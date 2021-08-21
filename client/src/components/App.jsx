import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Home from "../pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TopHeadlines } from "../pages/TopHeadlines";
import { Category } from "../pages/Category";
import { LanguageProvider } from "./LanguageContext";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function App(){
    const classes = useStyles();
    return (
      <LanguageProvider>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/country=:country" children={<TopHeadlines curr="Home" />}></Route>
                {/* <Route exact path="/top-headlines/country=:country" children={<TopHeadlines />}></Route> */}
                {/* <Route exact path="/category=:category?country=:country" ></Route> */}
                <Route exact path="/q=:queryString" children={<Home method={"post"} />}></Route>
                <Route exact path="/top-headlines">
                  <TopHeadlines curr="Top-headlines" />
                </Route>
                <Route exact path="/category=:category" children={<Category method="post" />}>
                  {/* <Business /> */}
                </Route>
            </Switch>
        </Router>
        </LanguageProvider>
    );
}

export default App;