import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  startSpace: {
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
  },
  endSpace: {
    paddingRight: `calc(1em + ${theme.spacing(9)}px)`,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  bookmarkSpace: {
    paddingLeft: `calc(0em + ${theme.spacing(1)}px)`,
  },
  widgetSpace: {
    paddingLeft: `calc(0em + ${theme.spacing(2)}px)`,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  secondTool: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    color: 'black',
  },
  /* root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }, */
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },

}));
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};
const flexItemContainer = {
  padding: '0px 45px 0px 20px',
  fontWeight: 'bold'
}
/* const fontCard = {
  fontWeight: 'bold'
} */

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.startSpace} variant="h6" noWrap>
          </Typography>
          <BookmarkIcon className={classes.widgetSpace} />
          <Typography className={classes.bookmarkSpace} variant="h6" noWrap>CHANNELS
          </Typography>
          <BookmarkIcon className={classes.widgetSpace} />
          <Typography className={classes.bookmarkSpace} variant="h6" noWrap>BOOKMARK
          </Typography>
          <WidgetsIcon className={classes.widgetSpace} />
          <Typography className={classes.bookmarkSpace} variant="h6" noWrap>OVERVIEW
          </Typography>
          <WidgetsIcon className={classes.widgetSpace} />
          <Typography className={classes.bookmarkSpace} variant="h6" noWrap>WIDGET
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />Lea Schneider
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          <Typography className={classes.endSpace} variant="h6" noWrap>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.secondTool}>
        <Typography className={classes.startSpace} variant="h6" noWrap>
        </Typography>
        <div>
        <List style={flexContainer}>
            <ListItem style={flexItemContainer}
              >Trending</ListItem>
            <ListItem style={flexItemContainer}
              >For You</ListItem>
              <ListItem style={flexItemContainer}
              >Cooking</ListItem>
              <ListItem style={flexItemContainer}
              >Nature</ListItem>
              <ListItem style={flexItemContainer}
              >Science</ListItem>
              <ListItem style={flexItemContainer}
              >Travel</ListItem>
              <ListItem style={flexItemContainer}
             >Climate</ListItem>
              <ListItem style={flexItemContainer}
              >Music</ListItem>
              <ListItem style={flexItemContainer}
              >People</ListItem>
          </List>
        </div>
        <Typography className={classes.endSpace} variant="h6" noWrap>
        </Typography>
      </Toolbar>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
          <Card className={classes.root}>
          <div className={classes.details}><CardMedia
        component="img"
        alt="Climate Strikes"
        height="140"
        image="/Assets/images/iceberg.jpg"
        title="Climate Strikes"
      /></div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Fresh wave of climate strikes takes place around the world
          </Typography>
        </CardContent>
    </Card>
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Arctic Sea"
          height="140"
          image="/Assets/images/penguine.jpg"
          title="Arctic Sea"
        />
        <CardContent >
          <Typography variant="body2" color="textSecondary" component="p">
            Arctic sea extent hits record low for winter maximum
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Phone Battery"
          height="140"
          image="/Assets/images/phonebattery.jpg"
          title="Phone Battery"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            New battery for smartphone can now charge in a minute
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Tropical Plants"
          height="140"
          image="/Assets/images/tropicalplants.jpg"
          title="Tropical Plants"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            The Best Tropical Plants You Can Grow Indoors
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </div>
      <BottomNavigation
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
  className={classes.root}
>
  <BottomNavigationAction label="About Us" />
  <BottomNavigationAction label="Terms and Conditions" />
  <BottomNavigationAction label="Privacy Policy" />
  <BottomNavigationAction label="Contact" />
  <BottomNavigationAction label="2019 All rights reserved" />
</BottomNavigation>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
