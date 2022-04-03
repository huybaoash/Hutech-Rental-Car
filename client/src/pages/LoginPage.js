import React from 'react';
import { Container, Divider, Fab } from '@material-ui/core';
import axios from "axios";
import Header from '../components/Header';
import PostList from '../components/PostList';
import UserList from '../components/UserList';
import CarList from '../components/CarList';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { showModal_Post, showModal_User,showModal_Car } from '../redux/actions';
import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import CreatePostModal from '../components/CreatePostModal';
import CreateUsersModal from '../components/CreateUsersModal';
import CreateCarModal from '../components/CreateCarModal';


export default function LoginPage() { 
  const classes = useStyles();

  const navigate = useNavigate();

  const [user, setUser] = React.useState({
    username: '',
    password: '',
  });
  
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
    let cookie = getCookie("username");
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
  }


  const login = () => {
    var login = 0;
    axios.post("http://localhost:5000/users/login", user)
    .then((res) => {
      alert("Đăng nhập thành công ! Xin chào " + res.data.username);
      window.location.replace("http://localhost:3000/");
      login = 1;
      setCookie("username",res.data.username,365);
      setCookie("user_Id",res.data._id,365);
      setCookie("user_role",res.data.quyen.tenquyen,365);
      
      navigate.push("/");
    })
    .catch((err) => {
        if (login != 1){
          console.log(err)
          alert("Đăng nhập thất bại !");
        }
        
    })
  };

  return (
    <Container maxWidth='lg'>
      <Header />
      
      
      
      <div className={classes.login}>
      <h1>Đăng nhập</h1>
      <input
        className={classes.input}
        type="text"
        name="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Nhập tên tài khoản"
      ></input>
      <input
        className={classes.input}
        type="password"
        name="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Nhập mật khẩu"
      ></input>
      <div className={classes.button} onClick={login}>
        Đăng nhập
      </div>
    </div>
      
    </Container>

    

    
  );
}
