import React, { useEffect, useState,useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { languages } from './Language';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { LanguageContext } from './LanguageContext';


export function SimpleMenu({ curr,lang }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [value, setValue] = useContext(LanguageContext);

  const handleChange = (event) => {
    // console.log("handle change called", event.target.value);
    setValue(event.target.value);
    
    lang(event.target.value);
  };
  // console.log("re-render", value);

     

  const handleClick = (event) => {
    // console.log(event.target);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    lang(value);
  },[])

  return (
    <div>
      {/* {console.log("infinite")} */}
      <Button aria-controls="simple-menu" aria-haspopup="true"  style={{color: "white", fontSize: "18px",textTransform: "none"}} onClick={handleClick}>
        <span style={{fontSize: "21px", textTransform: "none"}} className="category" onClick={handleClick}>Language</span>
        {/* Language */}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <FormControl component="fieldset" style={{marginLeft: "20px"}}>
          <FormLabel component="legend">Choose Language</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          {languages.map((language,index) => {
            return <FormControlLabel value={language.code} control={<Radio />} label={language.lang} key={language.id} />
          })}
          </RadioGroup>
        </FormControl>
        
      </Menu>
    </div>
  );
}