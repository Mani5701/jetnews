import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

function News({ category ,setProgress}) {
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalresult, setTotalresult] = useState(0);
  const [news, setNews] = useState([]);
  console.log(news, "this is news");

  const fetchData = async () => {
      setProgress(15)
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=948a21fa30f54825be61f095b225b9ed`
    );
    setProgress(40)
    setloading(true)
    let json = await response.json();
    setProgress(70)
    setNews(json.articles);
    setTotalresult(json.totalResults);
    setProgress(100)
    setloading(false)
  };
  
  const upperCase = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
      const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page + 1}&apiKey=948a21fa30f54825be61f095b225b9ed`
          );
          setPage(page + 1);
    let json = await response.json();
    setNews(news.concat(json.articles));
    setTotalresult(json.totalResults);
  };

  return (
    <>
        <h3 className="text-center my-3">Top Headlines From {upperCase(category)} Sections</h3>
        {loading && <Spinner />}
      <InfiniteScroll
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={news.length !== totalresult}
        loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {news
              ? news.map((element) => {
                  return <div className="col-md-4 gy-3">
                  <Card news={element} />
                  </div>
                })
              : "No response"}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;
