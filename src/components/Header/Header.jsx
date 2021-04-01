import React, { useContext } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import "./Header.css";
import { userContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const { user } = useContext(userContext);
  const { displayName, photoURL, name } = user;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileMoreAnchorElLeft, setMobileMoreAnchorElLeft] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileMenuOpeLeft = Boolean(mobileMoreAnchorElLeft);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuCloseLeft = () => {
    setMobileMoreAnchorElLeft(null);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    handleMobileMenuCloseLeft();
  };
  const handleMobileMenuOpenLeft = (event) => {
    setMobileMoreAnchorElLeft(event.currentTarget);
  };
  const handleMobileMenuOpenRight = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/logIn">
        <MenuItem onClick={handleMenuClose}>{name || displayName ? "Log Out" : "Log In"} </MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  // Toggle menue left
  const mobileMenuIdLeft = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorElLeft}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuIdLeft}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpeLeft}
      onClose={handleMobileMenuCloseLeft}
    >
      <MenuItem>
        <Link onClick={handleMenuClose} className="manu-left-toggle-link" to="/Home">
          Home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link onClick={handleMenuClose} className="manu-left-toggle-link" to="/Orders">
          Orders
        </Link>
      </MenuItem>
      <MenuItem>
        <Link onClick={handleMenuClose} className="manu-left-toggle-link" to="/Admin">
          Admin
        </Link>
      </MenuItem>
      <MenuItem>
        <Link onClick={handleMenuClose} className="manu-left-toggle-link" to="/Deals">
          Deals
        </Link>
      </MenuItem>
    </Menu>
  );
  //  toggle menu for mobile start rightF

  const mobileMenuIdRight = "primary-search-account-menu-mobile";
  const renderMobileMenuRigth = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuIdRight}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>LogIn</p>
      </MenuItem>
    </Menu>
  );
  // toggle menu for mobile End

  return (
    <div style={{ marginBottom: "64px" }}>
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuIdLeft}
                aria-haspopup="true"
                onClick={handleMobileMenuOpenLeft}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>

            <Typography className={classes.title} variant="h6" noWrap>
              Digital Shop
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className="manue-iteam">
              <Link className="manu-middle-toggle-link" to="/Home">
                Home
              </Link>

              <Link className="manu-middle-toggle-link" to="/Orders">
                Orders
              </Link>

              <Link className="manu-middle-toggle-link" to="/Admin">
                Admin
              </Link>
              <Link className="manu-middle-toggle-link" to="/Deals">
                Deals
              </Link>
            </div>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {displayName || name ? (
                  <>
                    <span className="userDisplayNameHeader">{displayName || name}</span>
                    <img className="userImageLogo" src={photoURL} alt="" srcset="" />
                  </>
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
            </div>

            {/* Mobile section  toggle */}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuIdRight}
                aria-haspopup="true"
                onClick={handleMobileMenuOpenRight}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            {/* Mobile section End  */}
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMobileMenuRigth}
        {renderMenu}
      </div>
    </div>
  );
};
export default Header;
