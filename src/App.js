import axios from "axios";
import React, {Component} from "react";
import css from './style/app.module.css';
import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal, AiOutlineEdit } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdDelete } from "react-icons/md";

class App extends Component{

  state={
    users:[],
    profileImage:"https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy",
  }

  getUsers =()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{

      this.setState({users:res.data});
    })
    .catch((err)=>{
      console.log(err);
    })
  }
componentDidMount(){
  this.getUsers();
}

handleDelete=(index)=>{
  const newUsers = this.state.users;
  newUsers.splice(index,1);
  this.setState({users:[...newUsers]});
}

  render(){
    return(
      <>
      <div className={css.rootContainer}>
        {
       this.state.users?.map((user,index)=>{
       return(
       <div className={css.profileContainer}>
        <div className={css.pfImageContainer}>
         <img src={this.state.profileImage}  alt="Profile"/>
        </div>

      <div className={css.pfDetailsSec}>
        <p className={css.pfName}>{user?.name}</p>
        <p className={css.pfDetails}><AiOutlineMail/><span>{user?.email}</span></p>
        <p className={css.pfDetails}><AiOutlinePhone/><span>{user?.phone}</span></p>
        <p className={css.pfDetails}><AiOutlineGlobal/><span>{user?.website}</span></p>
      </div>

      <div className={css.pfDeleteSec}>
        <div className={css.deleteItem}><FcLikePlaceholder/></div>
        <div className={css.deleteItem}><AiOutlineEdit/></div>
        <div className={css.deleteItem} style={{cursor:"pointer"}}
        onClick={()=>{this.handleDelete(index)}}><MdDelete/></div>
      </div>
       </div>
       )}
       )
       }
       </div>
      </>
    )
  }
}

export default App;
