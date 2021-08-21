import React from "react";
import ReactDOM from "react-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";
import purple from '@material-ui/core/colors/purple'
import { SimpleMenu } from "./SimpleMenu";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  link: {
    "&:hover": {
      color: purple,
    }
  }
}));

export function Navbar({ lang }) {
  const classes = useStyles();
  return <>
    <AppBar position="sticky">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Home</span>
          </Button>
        </Link>
        <Link to="/top-headlines" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Top Headlines</span>
          </Button>
        </Link>
        <Link to="/category=business" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Business</span>
          </Button>
        </Link>
        <Link to="/category=health" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Health</span>
          </Button>
        </Link>
        <Link to="/category=technology" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Technology</span>
          </Button>
        </Link>
        <Link to="/category=sports" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Sports</span>
          </Button>
        </Link>
        <Link to="/category=entertainment" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Entertainment</span>
          </Button>
        </Link>
        <Link to="/category=general" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>General</span>
          </Button>
        </Link>
        <Link to="/category=science" style={{ textDecoration: "none", color: "white" }} className={classes.title}>
          <Button color="secondary" style={{ color: "white" }}>
            <span className="category" style={{ fontSize: "21px", textTransform: "none" }}>Science</span>
          </Button>
        </Link>
        {/* <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/category=science" style={{ textDecoration: 'none', color: 'white' }}>
            <span className="category">Science</span>
          </Link>
        </Typography> */}
        <Typography className={classes.title} variant="h6" noWrap>
          <SimpleMenu lang={lang} />

        </Typography>
        <SearchInput />
      </Toolbar>
    </AppBar>
  </>;
}

export default Navbar;