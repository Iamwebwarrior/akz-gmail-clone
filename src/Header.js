import react from "react"

import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton,Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

import "./css/header.css"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import firebase from "firebase"

const Header = ()=>{
    const user = useSelector(selectUser)
    
   
    

   
    
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="Logo"/>
            </div>

            <div className="header__middle">
                <div className="search_mail">
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input type="text" placeholder="Search mail"/>
                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
                </div>
            </div>

            <div className="header__right">
            <IconButton>
                    <SettingsIcon className="notifcation"></SettingsIcon>
                    <span className="notificationspan">
                     1
                    </span>
            </IconButton>
            <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>

                <IconButton>
                <span className="logout" onClick={()=>firebase.auth().signOut()}>
                     LOGOUT
                    </span>
                </IconButton>

                
               

                <Avatar src={user?.photoURL} onClick={()=>firebase.auth().signOut()}></Avatar>
            </div>
        </div>
    )
       
    
}

export default Header