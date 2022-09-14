import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../component/data.json"
import  "../pages/todo.css"
import detail from "./detail"
import {Link } from 'react-router-dom'

function Todo() {
  return (
    <div className="bg-body w-25" style={{margin: "auto"}}>
      {data.map((itemData) => {
        console.log(itemData);
        return (
            
            <Link to="/account/{itemData.id}">

            <div onClick={detail} id={itemData.id} className="m-2 bg-dark d-flex p-3 rounded">
            <img src={itemData.image} alt="_blank"></img>
            
            <div>
            <p className="text-white ms-2 mt-3 fs-5 fw-bold">@{itemData.username}
             <br></br>
             Followers: {itemData.follower}
            </p>
            </div>
            </div>
            </Link>
        );
      })}
    </div>
  );
}

export default Todo;
