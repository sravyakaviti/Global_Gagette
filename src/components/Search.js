import { useState, useEffect, useMemo } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';
function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

function Search({ pageSize, query }) {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    document.title = `${capitalizeFirstLetter(query)}`;

    // Searched News
    const searchNews = async () => {
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=68fe1f9feba24b18992eb1c915719059&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(data);
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }
    useEffect(() => {
        searchNews();
        console.log("My Query", query);
    }, [query, page])

    const handlePrevClick = async () => {
        setPage(page - 1);
        searchNews();
    }
    const handleNextClick = async () => {
        setPage(page + 1);
        searchNews();
    }
    return (
        <div className="container my-3">

            {totalResults > 0 &&<h1 className="text-center" style={{ margin: '35px 0px' }}>Top Headlines on {capitalizeFirstLetter(query)}</h1>}
            {loading && <Spinner />}
            {totalResults === 0 && <h1 className="text-center">News not found 😞.</h1>}
            {totalResults > 0 && (
                <div>
                    <div className="row">
                        {!loading && articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 88) : ""}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="container d-flex justify-content-between" style={{ paddingBottom: '50px' }}>
                        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                        <button disabled={page + 1 > Math.ceil(totalResults / pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Search
