import * as React from 'react';
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


export default function RentCarPage() { 
  const classes = useStyles();

  const navigate = useNavigate();

  
  
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

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  const user_Id = getCookie('user_Id');  
  console.log(user_Id); 
  var getCar_success = -1;

  var car_id_GET = urlParams.get('id');
  console.log(car_id_GET); 

  var car_id = {"_id" : car_id_GET};
  console.log(car_id); 

  var car_carname_GET = urlParams.get('carname');
  console.log(car_carname_GET); 

  var car_carname = {"carname" : car_carname_GET};
  console.log(car_carname); 

  var car_pricerent_GET = urlParams.get('pricerent');
  console.log(car_pricerent_GET); 

  var car_pricerent = {"pricerent" : car_pricerent_GET};
  console.log(car_pricerent); 

 

  const [contract, setContract] = React.useState({
    userid: user_Id,
    totalprice: car_pricerent_GET,
    carid:  car_id_GET,
    dayrent: 1,
    deposits:car_pricerent_GET,
    contractid:'',
    carname: car_carname_GET,
    pricerent: car_pricerent_GET,
  }
  );


  
  


  const createContract = () => {
    var createContract_Success = -1;
    
    contract.totalprice = contract.dayrent * contract.pricerent;
      
    axios.post("http://localhost:5000/contracts/", contract)
    .then((res) => {
        const contractid = res.data._id;
        contract.contractid = contractid;
        
        axios.post("http://localhost:5000/detailscontracts/", contract)
        .then((res) => {
            createContract_Success = 1;
            alert("Thuê thành công !");
            window.location.replace("http://localhost:3000/");
      
        })
        .catch((err) => {
            if (createContract_Success != 1){
            console.log(err)
            alert("Thuê thất bại !");
            }
            
        });

      
      
      
    })
    .catch((err) => {
        if (createContract_Success != 1){
          console.log(err)
          alert("Thuê thất bại !");
        }
        
    });

    
  };
  if (checkCookie("username") == false)
  return window.location.replace("http://localhost:3000/");

  else{
    
    console.log(contract);
    return (
        <Container maxWidth='lg'>
          <Header />
          
          
          
          <div className={classes.login}>
          <h1>Lập hợp đồng</h1>
          <input
            className={classes.input}
            readOnly = 'true'
            type="text"
            name="carname"
            value={contract.carname}
            placeholder="Tên xe"
            onChange={(e) => setContract({ ...contract, carname: e.target.value })}
          />

        <input
            className={classes.input}
            readOnly = 'true'
            type="number"
            name="CarPrice"
            value={contract.pricerent}
            placeholder="Giá thuê xe"
            onChange={(e) => setContract({ ...contract, pricerent: e.target.value })}
          />

        <input
            className={classes.input}
            readOnly = 'true'
            type="number"
            name="CarPrice"
            value={contract.pricerent * contract.dayrent}
            placeholder="Tổng tiền"
            onChange={(e) => setContract({ ...contract, totalprice: e.target.value })}
          />

          <input
            className={classes.input}
            type="number"
            name="DayRent"
            value={contract.dayrent}
            min = '0'
            onChange={(e) => setContract({ ...contract, dayrent: e.target.value })}
            placeholder="Số ngày thuê"
          ></input>

          <input
            className={classes.input}
            type="number"
            name="Deposits"
            value={contract.deposits}
            onChange={(e) => setContract({ ...contract, deposits: e.target.value })}
            placeholder="Tiền trả trước"
          ></input>
    
          <div className={classes.button} onClick={createContract}>
            Thanh toán
          </div>
          
        </div>
          
        </Container>
    
        
    
        
      );
  }
  
}
