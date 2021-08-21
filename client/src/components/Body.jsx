import React from "react";
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import GridItems from "./GridItems";
import SearchByCountry from "./SearchByCountry";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        // position: '-webkit-sticky',
        position: 'sticky',
        top: '0',
        // position: "fixed",
        zIndex: 5,
    },
}));

export function Body({ countryCode,category,curr,newsItem,sort,setSortBy,checkSortBy }){
    const classes = useStyles();
    // console.log(newsItem);
    return (<>
    <Grid container style={{height: "100px"}}>
    </Grid>
    <Grid container direction="row" spacing={null}>
        <Grid item xs={8}>
            <GridItems key={new Date().getTime().toString()} newsItem={newsItem} />
            {/* <SearchBySource /> */}
            {/* <NewsCard /> */}
        </Grid>
        <Grid item xs={4} style={{position: "fixed",left: "1150px", overflowY: "scroll", maxHeight: "70%"}}>
            <SearchByCountry countryCode={countryCode} category={category} curr={curr} sort={sort} setSortBy={setSortBy} checkSortBy={checkSortBy}/>
            {/* <NewsCard /> */}
        </Grid>
    </Grid>
    </>
    );
}