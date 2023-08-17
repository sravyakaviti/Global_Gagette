import React, { Component } from 'react';
import {WhatsappShareButton} from 'react-share'
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
          <img src={!imageUrl ? "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} ... </h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <div className="d-flex justify-content-between">
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              <WhatsappShareButton url={newsUrl}><div className="btn btn-sm btn btn-success" ><i className="fa-brands fa-whatsapp"></i> Share </div></WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default NewsItem
