import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { countryList } from './CountryList';
import { useHistory } from 'react-router';
import { SortBy } from './SortBy';

const useStyles = makeStyles({
  root: {
    // backgroundColor: "#FC766AFF",
    backgroundColor: "#42EADDFF",
    minWidth: 275,
    border: "2px solid red",
    borderRadius: "15px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SearchByCountry({ countryCode,category,curr,sort,setSortBy,checkSortBy }) {

  const history = useHistory();
  // const [value, setValue] = React.useState(countryCode === undefined ? '' : countryCode);
  const value = countryCode === undefined ? '' : countryCode;

  const handleChange = (event) => {
    // setValue(event.target.value);
    if(curr === "Category"){
      history.push(`/category=${category}?country=${event.target.value}`);  
    }
    else if(curr === "Top-headlines"){
      history.push(`/top-headlines?country=${event.target.value}`);
    }
    else{
      history.push(`/country=${event.target.value}`);
    }
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (<Card className={classes.root} variant="outlined">
    {/* {console.log("render value", value)} */}
    <CardContent>
      { checkSortBy === true && <SortBy sort={sort} setSortBy={setSortBy} />}
      {/* </Typography> */}
      <Typography variant="h5" component="h2" style={{ marginBottom: "28px" }}>
        Search by Country
      </Typography>
      {/* <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          {countryList.map(country => {
            return <div key={country.id}><FormControlLabel value={country.code} control={<Radio />} label={<h3 style={{margin: "0"}}>{country.name}</h3>} /> <img src ={`https://newsapi.org/images/flags/${country.code}.svg`} style={{height: "20px", width: "20px"}} /> </div> 
          })}
        </RadioGroup>
      </FormControl>
    </CardContent>
  </Card>);
}