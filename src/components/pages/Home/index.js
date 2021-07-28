import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../../css/home.css"

const Home = ({menus }) => {
  return (
    <div className="row">
     <h1 className="head-center " >ร้านค้าที่เปิดให้บริการ</h1>
        {menus.map((menu) => ( 
          <div>
                 <div className="column">
                 <div className="contentH cardH shadowv" >
                 <Link   to={`/${menu.id}`} ><img className="img-fluid "  src={menu.img} /></Link>
                   <Link  to={`/${menu.id}`} style={{textDecoration:"none"}}><h2 >{menu.name}</h2></Link>
                   <Link  to={`/${menu.id}`} style={{textDecoration:"none"}}><p>{menu.description}</p></Link>
                 </div>
               </div></div>
                ))}
     </div>
          
  );
};

const mapStateToProps = (state) => ({
  menus: state,
});



export default connect(mapStateToProps)(Home);
