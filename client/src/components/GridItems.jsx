import React from "react";
import ReactDOM from "react-dom";
import NewsCard from "./NewsCard";
import Grid from '@material-ui/core/Grid';

export default function GridItems({newsItem}) {
    // console.log(newsItem);
    return (<Grid container direction="row" spacing={2}>
        {newsItem.map((item,index) => {
            return (<Grid item lg={4} sm={5} key={index}>
                <NewsCard key={new Date().getTime().toString()} {...item} />
                {/* <NewsCard key={new Date().getTime().toString()}/> */}
            </Grid>)
        })}
    </Grid>);
}