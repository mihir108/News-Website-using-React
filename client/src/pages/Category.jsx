import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import { useFetch } from "../components/useFetch";
import { Body } from "../components/Body";
import { Loading } from "../components/Loading";
import { useParams, useLocation } from "react-router";
import queryString from "query-string";
import { NoItems } from "../components/NoItems";

export function Category({ method="post" }){

    const parsed = queryString.parse(useLocation().search);
    // console.log(parsed);
        // console.log(location.search);
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
    const objData = {...useParams(),lang,...parsed,sort};
    // console.log(objData);

    const category = useParams().category;
    const url = `/category=${category}`;
    // console.log(url);
    const { newsItem, loading, hasMore, noItems } = useFetch(url,method,objData);
    const loadingMore = loading && hasMore;
    return ( <>
        <Navbar lang={setLanguage} />
        {/* <TopHeadlines /> */}
        {/* {loading === true ? <Loading /> : <Body newsItem={newsItem} />} */}
        <Body countryCode={parsed.country} category={useParams().category} curr="Category" newsItem={newsItem} sort={sort} setSortBy={setSortBy} />
        {loadingMore === true && <Loading />}
        {noItems === true && <NoItems />}
        </>
    );
}