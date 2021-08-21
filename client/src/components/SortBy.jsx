import React, { useState } from "react";
import ReactDOM from "react-dom";
import SortIcon from '@material-ui/icons/Sort';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export function SortBy({ sort,setSortBy }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const selectedIndex = sort;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const options = ["Newest","Popularity","Relevancy"];

    const handleClickMenuItem = (e,index) => {
        // setSelectedIndex(prev => index);
        setSortBy(index);
        setAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{marginBottom: "8px"}}>
                <span><SortIcon /> <p style={{display: "inline-block", fontWeight: "bold", margin: "0"}}>Sort By</p> </span>
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option,index) => {
                    return <MenuItem onClick={(e) => handleClickMenuItem(e,index)} selected={index === selectedIndex} key={index}>{option}</MenuItem>
                })}
            </Menu>
        </div>
    )
}