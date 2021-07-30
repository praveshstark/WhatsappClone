import React , {useState , useEffect} from 'react'
import useStyles from './Sidebar.style'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import db from "../../Firebase";
import { useStateValue } from '../../StateProvider';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const [{ user } , dispatch] = useStateValue();

    useEffect(() =>{
      db.collection('rooms').onSnapshot(snapshot =>
        (
          setRooms(snapshot.docs.map(doc =>
            ({
              id: doc.id,
              data: doc.data(),
            })
            ))
        ))
    },[]);

    return (
        <>
          <div className={classes.sidebar}>
              <div className={classes.sidebar_header}>
                <Avatar src={user?.photoURL} style={{ fontSize:"40px" }}/>
                <div className={classes.sidebar_headerRight} style={{fontSize:"24px"}}>
                 <IconButton><DonutLargeIcon/></IconButton>
                 <IconButton><ChatIcon/></IconButton>
                 <IconButton><MoreVertIcon/></IconButton>
                </div>
              </div>

              <div className={classes.search}>
                <div className={classes.searchBar} style={{ color:"grey" , padding:"10px"}}>
                   <SearchIcon/> 
                   <input placeholder="Search or Start new chat" type="text" 
                       style={{ border:"none" ,padding:"10px" , marginLeft:"10px"}}/>
                </div>
              </div>
              <div className={classes.sidebarChat}>
                  <SidebarChat addNewChat/>
                  {rooms.map(rooms => (
                    <SidebarChat key={rooms.id} id={rooms.id} name={rooms.data.name}/>
                  ))}
                    
                  
              </div>
          </div>
        </>
    )
}

export default Sidebar
