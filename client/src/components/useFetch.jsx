import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export function useFetch(url,method,body=null){
    // console.log(body);
    const [newsItem,setNewsItem] = useState([]);
    const [loading,setLoading] = useState(true);
    const [hasMore,setHasMore] = useState(true);
    const [pageNumber,setPageNumber] = useState(1);
    const [noItems,setNoItems] = useState(false);
    const [index,setIndex] = useState(0);
    // console.log(pageNumber);
    // console.log(loading);
    const handleScroll = () => {
        // console.log("scroll");
        // console.log(window.innerHeight,document.documentElement.scrollTop,document.documentElement.offsetHeight, loading, newsItem);
        if (window.innerHeight + document.documentElement.scrollTop -5 >= document.documentElement.offsetHeight && setHasMore){
            // console.log('Fetch more list items!');
            // console.log("scroll accessed", loading);
            setPageNumber(preValue => preValue + 1);
            setIndex(prevIndex => prevIndex + 1);
            // setPageNumber(pageNumber + 1);
        }
    }
    const getNews = async (url) => {
        // console.log(pageNumber);
        // console.log(newsItem);
        axios[method](url, {...body,pageNumber}, { crossdomain: true }).then(response => {
            // console.log(response.data);
            const newsArray = [];
            response.data.articles.forEach(item => {
                const { title, description, url, urlToImage } = item;
                const source = item.source.name;
                newsArray.push({title,description,url,urlToImage,source});
            });
            if(response.data.articles.length === 0){
                setHasMore(false);
            }
            if(response.data.articles.length === 0 && newsItem.length === 0){
                setNoItems(true);
            }
            // console.log(newsArray);
            setNewsItem(prevItem => {
                return [...prevItem,...newsArray];
            });
            setLoading(false);
            // console.log(newsItem);
        }).catch(error => console.log(error));
    }
    useEffect(() => {
        // console.log("effect 1");
        // console.log("Warning", loading);
        setLoading(true);
        setHasMore(true);
    },[url,pageNumber,body.lang,body.country,body.sort])
    useEffect(() => {
        // console.log("effect 2");
        setNewsItem([]);
        setPageNumber(1);
        setNoItems(false);
        setIndex(prevIndex => {
            return prevIndex === 0 ? 0 : prevIndex + 1;
        });
        // console.log(pageNumber);
        // console.log(newsItem);
        window.addEventListener("scroll", handleScroll);
        return () => { 
            window.removeEventListener("scroll", handleScroll);
            setIndex(prevIndex => {
                return prevIndex === 0 ? prevIndex + 1 : prevIndex;
            });
        }
    },[url,body.lang,body.country,body.sort])
    useEffect(() => {
        // console.log("effect 3");
        if(body.lang !== null)
            getNews(url);
    },[index]);
    return { newsItem, loading, hasMore, noItems };
}