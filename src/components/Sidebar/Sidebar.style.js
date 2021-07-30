import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(()=>({
    sidebar:{
        display:"flex",
        flexDirection: "column",
        flex: 0.35,
    },
    sidebar_header:{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderRight: "1px solid lightgrey"
    },
    sidebar_headerRight:{
        display:"flex",
        alignItems:"center",
        justifyContent: "space-between",
        minWidth:"10vw" , 
        marginRight:"2vw",
    },
    search:{
        display:"flex",
        alignItems:"center",
        backgroundColor: "#f6f6f6",
        height:"39px",
        padding:"10px"
    },
    searchBar:{
        display:"flex",
        alignItems:"center",
        backgroundColor: "white",
        height:"35px",
        width: "100%" ,
        borderRadius:"20px",
    },
    sidebarChat:{
        flex:1,
        backgroundColor: "white",
        //overflow: "scroll"
    },
    chat:{
       display:"flex",
       padding:"20px",
       cursor:"pointer",
       borderBottom : "1px solid #f6f6f6",
       '&:hover': {
        backgroundColor: "#ebebeb"
      }
    },
    sidebarInfo:{
        fontSize:"16px",
        marginBottom:"8px",
        marginLeft: "15px"
    }
  }));