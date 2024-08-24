
import React,{useState} from 'react';
import './App.css';
import { FaTrashAlt } from "react-icons/fa";


function TodoList(){
    const [newItem,setNewItem] =useState("");
  const [items,setItems] = useState([])
  function addItem() {
    if(!newItem) {
      alert("Please enter a Item")
      return ;
    }
   // console.log(newItem)
  
  const item ={
    id:Math.floor(Math.random()*1000),
    text:newItem
 
  }
  setItems(oldList=>[...oldList,item]);
  setNewItem("");

  }
function deleteItem(id){
  const newArray=items.filter(item=>item.id!==id);
  setItems(newArray)
 
}
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input 
        type="text"
        placeholder="Add an item..." 
        value={newItem}
        onChange={e=>setNewItem(e.target.value)}
        />
        <button className="addbutton" onClick={()=>addItem()}>Add item</button>
        <ul>
          {items.map(item=>{
            return (
              <li className='list'
              key={item.id}><input className="checkbox" type="checkbox"/>{item.text} <button className="delete-item" onClick={()=>deleteItem(item.id)}><FaTrashAlt /></button></li>
            )
          }) }
        </ul> 
    </div>
  );
}
export default TodoList