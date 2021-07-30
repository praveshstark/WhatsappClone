import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(()=>({
    chatBar:{
        flex: 0.65,
        display:"flex",
        flexDirection:"column"
       },
    chatHeader:{
        padding: "20px",
        display:"flex",
        alignItems: "center",
        borderBottom: "1px solid lightgrey"
    },
    chatHeaderInfo:{
        flex: 1 , 
        paddingLeft: "20px"
    },
    chatHeaderRight:{
        display:"flex",
        justifyContent:"space-between",
        minWidth: "100px"
    },
    chatBody:{
        flex:1,
        backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        padding: "30px",
    },
    chatMessage:{
        position: "relative",
        fontSize: "16px",
        padding: "10px",
        borderRadius: "10px",
        width: "fit-content",
        backgroundColor: "#ffffff",
        marginBottom: "30px"
    },
    chatName:{
        position: "absolute",
        top: "-15px" ,
        fontWeight: 800 ,
        fontSize: "xx-small"
    },
    chatTime:{
        marginLeft: "10px",
        fontSize: "xx-small"
    },
    chatReciever:{
        marginLeft:"auto",
        backgroundColor:"#dcf8c6"
    },
    chatFooter:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "62px",
        borderTop: "1px solid lightgray"
    }
  }));