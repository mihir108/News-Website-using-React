import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import { useFetch } from "../components/useFetch";
import { Body } from "../components/Body";
import { Loading } from "../components/Loading";
import { useParams, useLocation } from "react-router";
import { NoItems } from "../components/NoItems";
import queryString from "query-string";

export function TopHeadlines({ method="post", curr }){
    
    const [lang,setLang] = useState(null);
    const [sort,setSort] = useState(0);
    const setLanguage = (languageCode) => {
        // setLang(prevArray => arr);
        // console.log(arr); 
        setLang(prev => languageCode);
    }
    const setSortBy = (sortOption) => {
        setSort(prev => sortOption);
    }

    const parsed = queryString.parse(useLocation().search);
    let countryCode = useParams().country;
    if(countryCode === undefined){
        countryCode = parsed.country;
    }

    // console.log("top-headlines", lang);
    const url = `/top-headlines`;
    // console.log(url);
    const { newsItem, loading, hasMore, noItems } = useFetch(url,method,{...useParams(),lang: lang,sort: sort,...parsed});
    const loadingMore = loading && hasMore;
    return ( <>
        <Navbar lang={setLanguage}/>
        {/* <TopHeadlines /> */}
        {/* {loading === true ? <Loading /> : <Body newsItem={newsItem} />} */}
        <Body countryCode={countryCode} newsItem={newsItem} sort={sort} setSortBy={setSortBy} curr={curr} />
        {loadingMore === true && <Loading />}
        {noItems === true && <NoItems />}
        </>
    );
}