import React from 'react';
import { useTranslation } from 'react-i18next'
import flagen from "../../assets/flag-en.png";
import flagfr from "../../assets/flag-fr.png";
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '150px',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


const useStyles = makeStyles(theme => ({
  flexdiv: {
    display: "flex",
  },
  flexdiv2: {
    display: "flex",
    marginTop: "10px",
  },
  div: {
    display: "flex",
    '&:hover': {
      backgroundColor: "#DA291C",
      cursor: "pointer"
   },
   textLang: {
     paddingLeft: "50px !important",
   }
  }
}));


const LocaleSwitcher = ({ t, lang }) => {
    const { i18n } = useTranslation()
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);   

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      handleClose();
    }
   
    return (
      <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{backgroundColor:'transparent', boxShadow:'none'}}
        onClick={handleClick}
      >
        { i18n.language === 'en' && (
            <img src={flagen} alt="flagen" width="25px" />
          )}
          
        { i18n.language === 'fr' && (
            <img src={flagfr} alt="flagfr" width="25px" />
        )}
        { i18n.language === 'he' && (
            <img src={flagen} alt="flagen" width="25px" />
        )}
      </Button>
      <StyledMenu
        id="customized-menu"
        style={{float:'center', textAlign: 'center'}}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <ListItem className={classes.div}>
          <div onClick={() => changeLanguage('en')} className={classes.flexdiv} >
              <img src={flagen} alt="flagen" width="30px" height="30px" />
                <p style={{marginLeft: "10px", marginTop: "0px"}}>English</p>
            </div>
          </ListItem>
          <Divider light />
          <ListItem  className={classes.div}>
          <div onClick={() => changeLanguage('fr')} className={classes.flexdiv2} >
              <img src={flagfr} alt="flagfr"  width="30px" height="30px" />
                <p style={{marginLeft: "10px", marginTop: "0px"}}>Français</p>
            </div>
          </ListItem>
        </div>
        </StyledMenu>  
      </div> 
      )
};
export default LocaleSwitcher;
