import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import { useFetch } from "../components/useFetch";
import { Body } from "../components/Body";
import { Loading } from "../components/Loading";
import { useParams } from "react-router";
import { NoItems } from "../components/NoItems";


export default function Home({ method="post" }){
    // const [newsItem,setNewsItem] = useState([]);
    // const [loading,setLoading] = useState(true);
    // if(searchItem !== undefined)
    const [lang,setLang] = useState(null);
    const [country,setCountry] = useState(null);
    const [sort,setSort] = useState(0);
    // console.log(useParams());
    const queryString = useParams().queryString;
    // console.log(queryString);
    let checkHome = true;
    if(queryString !== undefined){
        checkHome = false;
    }
    const checkSortBy = country === null ? true : false;
    // console.log(checkHome);
    // console.log();

    const selectCountry = (countryCode) => {
        setCountry(prev => countryCode);
    }

    const setLanguage = (languageCode) => {
        // setLang(prevArray => arr);
        // console.log(arr); 
        setLang(prev => languageCode);
    }

    const setSortBy = (sortOption) => {
        setSort(prev => sortOption);
    }

    const objData = {...useParams(),lang,sort};
    // console.log(objData);
    const url = `http://localhost:5000/${checkHome === true ? "home": "q=" + queryString}`;
    // console.log(url);
    const { newsItem, loading, hasMore, noItems } = useFetch(url,method,objData);
    const loadingMore = loading && hasMore;
    return ( <>
        <Navbar lang={setLanguage} />
        <Body newsItem={newsItem} sort={sort} setSortBy={setSortBy} checkSortBy={checkSortBy} />
        {loadingMore === true && <Loading />}
        {noItems === true && <NoItems />}
        </>
    );
}