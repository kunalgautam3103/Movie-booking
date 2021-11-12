import React,{ Component } from "react";
import './Header.css';
import logo from '../../assets/logo.svg';

let logocss = {
    animation: 'app-logo-spin infinite 8s linear',
    height: '35px' ,
    background: '#ff7f7f'
 };
 class Header extends Component{
     
   render(){
       return <div className="app-header">
            <img src={logo} style={logocss} alt="Movies App Logo" />
       </div>
   }
 }
 export default Header;