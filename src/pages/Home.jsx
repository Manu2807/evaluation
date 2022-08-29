import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Home = () => {
  const{isAuth,setAUth}=React.useContext(AuthContext)
  const [data,setdata]=React.useState([])
  const{count,setCount}=React.useContext(CartContext)
  React.useEffect(()=>{
   
    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((res)=>
    setdata(res)
    )
    .catch((error)=>console.log(error))
    
  },[])

  const navigate =useNavigate()
  console.log(isAuth)
  function deleteitem(id){
    fetch(`http://localhost:8080/cartItems/${id}`, {
      method: "DELETE",
     
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res)=>setCount(res.length))
  }
if(!isAuth){
  navigate("/login")}

  return <div>
   <table>
    <thead>
      <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>description</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        data.map(function(elem){
          return(<tr key={elem.id}>
    <td>{elem.id}</td>
    <td>{elem.name}</td>
    <td>{elem.description}</td>
    <td onClick={deleteitem(elem.id)}>add</td>
    <td>-</td>
          </tr>)
        })
      }
    </tbody>
   </table>
  </div>;
}
export default Home;
