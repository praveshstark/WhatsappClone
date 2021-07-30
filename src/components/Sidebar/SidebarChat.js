import React , {useState , useEffect} from 'react'
import useStyles from './Sidebar.style'
import { Avatar } from '@material-ui/core';
import db from "../../Firebase";
import { Link } from "react-router-dom"

const SidebarChat = ({ id , name , addNewChat }) => {
    const classes = useStyles();
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() =>{
        if (id) {
            db.collection("rooms")
              .doc(id)
              .collection("messages")
              .orderBy("timestamp" , "desc")
              .onSnapshot((snapshot) => 
                    setMessages(snapshot.docs.map((doc) => 
                    doc.data()))
                );
        }
    }, [id]);

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000));
    } , []);

    const createChat = () =>{
        const roomName = prompt("Please Enter Room Name For Chat/Masti");

        if(roomName){
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return  !addNewChat ? (
        <Link to={`/rooms/${id}`} style={{ textDecoration: "none",
        color: "black"}}>
        <div className={classes.chat}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className={classes.sidebarInfo}>
                <h3>{name}</h3>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ) : (
       <div onClick={createChat} className={classes.chat}>
        <h2>Add new Chat</h2>
       </div>
    );
}

export default SidebarChat
