import { useState, useEffect } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

function News({ country,category, pageSize, API_KEY }) {
  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  document.title = `${capitalizeFirstLetter(category)}`;

  const updateNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
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
      updateNews()
  }, [country,category,page])

  const handlePrevClick = async () => {
      await setPage(page - 1);
      updateNews();
  }
  const handleNextClick = async () => {
      await setPage(page + 1);
      updateNews();
  }
  return (
      <div className="container my-3">

          <h1 className="text-center" style={{ margin: '35px 0px' }}>Top Headlines on {capitalizeFirstLetter(category)}</h1>
          {loading && <Spinner />}
          <div className="row">
              {!loading && articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
              })}
          </div> 
          <div className="container d-flex justify-content-between" style={{ paddingBottom: '50px' }}>
              <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
              <button disabled={page + 1 > Math.ceil(totalResults / pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
          </div>
      </div>
  )
}

export default News