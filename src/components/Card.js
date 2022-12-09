import React from "react";

function Card({news}) {
  return (
    <>
      <div className="card " style={{height:"60vh"}}>
        <img src={news.urlToImage} className="card-img-top" alt="img..." style={{height:"25vh"}} />
        <div className="card-body">
          <h6 className="card-title">{!news.title?"Title not available":news.title.slice(0,45)}... <span className="badge bg-warning">{news.source.name}</span></h6>
          <div className="description mb-3" style={{height:'15vh'}}>
          <p className="card-text">{!news.description?"Description not available":news.description.slice(0,80)}...</p>
          <small className="text-muted">Dated : {new Date(news.publishedAt).toGMTString()} </small>
          </div>
          <a href={news.url} target="_blank" className="btn btn-primary btn-sm text-capitalize">
            read more
          </a>
        </div>
      </div>
      </>
  );
}

export default Card;
