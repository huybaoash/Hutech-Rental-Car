import React from 'react';
import { Dividerider, Typography,Divider,Link} from '@material-ui/core';
import useStyles from './styles';
import {} from '../../index.css'

export default function Header() {
  const classes = useStyles();

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie(cname) {
    let cookie = getCookie(cname);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
  }

  const logout = () => {
    setCookie("username","",-1);
      setCookie("user_Id","",-1);
      setCookie("user_role","",-1);
      window.location.replace("http://localhost:3000/");
  };


  if (checkCookie("username") == false)
  return (
    
   <nav className='navbar navbar-light'>
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand fas fa-hotel" href="http://localhost:3000">Web Cho Thuê Xe</a>
      </div>

      <ul class="nav navbar-nav">
       		<li><a href="http://localhost:3000/danh-sach-xe">Danh sách xe</a></li>
       		<li><a href="">Dịch vụ</a></li>
       		
       		
    </ul>

    <ul class="nav navbar-nav navbar-right">
	      <li><a href="http://localhost:3000/dang-nhap"><span class="glyphicon glyphicon-user"></span> Đăng nhập</a></li>
	      <li><a href="http://localhost:3000/dang-ky"><span class="glyphicon glyphicon-log-in"></span> Đăng ký</a></li>
	    </ul>
    </div>
    
  </nav>
   

   
      
  );

  else
  {
    const username = getCookie('username');
    const user_Id = getCookie('user_Id');
    const user_role = getCookie('user_role');
    
    return (<nav className='navbar navbar-light'>
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand fas fa-hotel" href="http://localhost:3000">Web Cho Thuê Xe</a>
      </div>

      <ul class="nav navbar-nav">
       		<li><a href="http://localhost:3000/danh-sach-xe">Danh sách xe</a></li>
       		<li><a href="">Dịch vụ</a></li>
       		
       		
    </ul>

    <ul class="nav navbar-nav navbar-right">
	      <li><a href=""><span class="glyphicon glyphicon-user"></span> {user_role} {username} </a></li>
	      <li><a href="" onClick={logout}><span class="glyphicon glyphicon-log-in"></span> Đăng xuất</a></li>
	    </ul>
    </div>
    
  </nav>);
    
  }
}
