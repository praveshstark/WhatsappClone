import React, {useState , useEffect} from 'react'
import useStyles from './Chat.style'
import './chat.css';
import { Avatar } from '@material-ui/core';
import { AttachFile ,  MoreVert , SearchOutlined } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from "../../Firebase";
import { useParams } from 'react-router';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase';

const Chat = () => {
    const classes = useStyles();
    const [seed, setSeed] = useState("");
    const [input , setInput] = useState('');
    const { roomId } = useParams();
    const [roomName , setRoomName] = useState("");
    const [messages , setMessages] = useState([]);
    const [ { user } , dispatch] = useStateValue();


    useEffect(() =>{
        if(roomId){
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName
                (snapshot.data().name));

            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy('timestamp' , 'asc')
                .onSnapshot((snapshot) => 
                    setMessages(snapshot.docs.map((doc) => 
                    doc.data()))
                );
        }
    }, [roomId])

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000));
    } , [roomId]);

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log("you type..." , input);

        db.collection('rooms').doc(roomId).collection
        ('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className={classes.chatBar}>
            <div className={classes.chatHeader}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
                <div className={classes.chatHeaderInfo}>
                    <h3 style={{ marginBottom:"3px" , fontWeight: 500}}>{roomName}</h3>
                    <p style={{ color: "grey" }}> 
                    last seen{" "}
                    {new Date(
                        messages[messages.length - 1]?.timestamp?.toDate()
                        )
                        .toUTCString()
                    }
                    </p>
                </div>

                <div className={classes.chatHeaderRight}>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                    <IconButton><SearchOutlined /></IconButton>
                </div>
            </div>
            <div className={classes.chatBody}>
                {messages.map((message) =>(
                    <p className={`chatMessage ${message.name === user.displayName
                     && "chatReciever"}`}>
                    <span className={classes.chatName}>{message.name}</span>
                    {message.message}
                    <span className={classes.chatTime}>
                    {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                    </p>
                ) )}
                
            </div>

            <div className={classes.chatFooter}>
                <InsertEmoticonIcon />
                <form style={{ flex: 1 , display:"flex" }}>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={{flex:1 , borderRadius:"30px" , padding:"10px" , border:"none"}}
                        placeholder="Type a message" 
                        type="text" />
                    <button 
                        onClick={sendMessage} 
                        type="submit" 
                        style={{display:"none"}}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
