import React,{ Component } from "react";
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button'

let logocss = {
    animation: 'app-logo-spin infinite 8s linear',
    height: '35px' ,
    background: '#ff7f7f'
 };
 class Header extends Component{
     
   render(){
       return <div className="app-header">
            <img src={logo} style={logocss} alt="Movies App Logo" />
            <Button variant="contained" color="primary" >Book Show </Button>
       </div>
   }
 }
 export default Header;