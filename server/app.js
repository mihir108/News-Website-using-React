require('dotenv').config()
const path = require('path');
const express = require("express");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

const app = express();

app.use(express.json());


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post("/home", (req, res) => {
    console.log("/home");
    console.log(req.body);
    console.log("mihir");
    newsapi.v2.everything({
        // q: 'bitcoin',
        sources: 'bbc-news,the-verge,abc-news,al-jazeera-english,argaam,rtl-nieuws,ansa,abc-news-au,associated-press,australian-financial-review,bbc-sport,bild,cbc-news,cnn,google-news-fr,nrk,rt,globo,xinhua-net,el-mundo',
        language: req.body.lang,
        sortBy: req.body.sort === 0 ? "publishedAt" : req.body.sort === 1 ? "popularity" : "relevancy",
        page: req.body.pageNumber,
        pageSize: 10
      }).then(response => {
        res.send(response);
    });
});

app.post("/q=:queryString", (req,res) => {
  console.log("/q=:queryString", req.params.queryString);
    console.log(req.body);
    newsapi.v2.everything({
        qInTitle: req.params.queryString,
        q: req.params.queryString,
        language: req.body.lang,
        sortBy: req.body.sort === 0 ? "publishedAt" : req.body.sort === 1 ? "popularity" : "relevancy",
        page: req.body.pageNumber,
        pageSize: 10
      }).then(response => {
        res.send(response);
    });
});

app.post("/top-headlines", (req,res) => {
  console.log("/top-headlines");
  console.log(req.body);
  let selectCountry = null;
  if(req.body.country !== undefined){
    selectCountry = req.body.country;
  }
  newsapi.v2.topHeadlines({
    language: req.body.lang,
    page: req.body.pageNumber,
    pageSize: 10,
    country: selectCountry
  }).then(response => {
    res.send(response);
  });
});

app.post("/category=:category", (req,res) => {
  console.log("/category=:category", req.params.category);
  console.log(req.body);
  newsapi.v2.topHeadlines({
    category: req.params.category,
    language: req.body.lang,
    page: req.body.pageNumber,
    pageSize: 10,
    country: req.body.country
  }).then(response => {
    res.send(response);
  });
});

app.get("/sources", (req,res) => {
  newsapi.v2.sources({
    // category: 'technology',
    language: 'nl'
    // country: 'es'
  }).then(response => {
    console.log(response);
    res.send();
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
  });
})


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

let port = process.env.PORT;

if(port == null || port == ""){
    port = 5000;
}

app.listen(port, (req, res) => {
    console.log("server started at port 5000");
});