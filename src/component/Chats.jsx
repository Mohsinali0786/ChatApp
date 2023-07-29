import { onSnapshot } from "firebase/firestore";
import { useState,useEffect, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import { ChatContext } from "../context/chatContext";
export default function Chats() {
    const [chats,setChats]=useState([])
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
          const unsub = onSnapshot(doc(db, "userChates", currentUser.uid), (doc) => {
            setChats(doc.data());
          });
    
          return () => {
            unsub();
          };
        };
    
        currentUser.uid && getChats();
      }, [currentUser.uid]);

      const handleSelect=(u)=>{
        dispatch({type:'Change_User',payload:u})
      }
    //   console.log(Object.entries(chats))
    return (
        <div className="chats">
            {
                Object.entries(chats)?.map((v)=>{
                    console.log('vvvv',v)
                    return(
                        <div 
                            className="userChat" 
                            key={v[0]}
                            onClick={() => handleSelect(v[1].userInfo)}
                        >
                            <img src={v[1].userInfo.photoURL} alt="" />
                            {/* <img src="data:image/jpeg;base64,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" alt="" /> */}
                            <div className="userChatInfo">
                                <span>{v[1].userInfo.displayName}</span>
                                <p>{v[1].lastMessage?.text}</p>
                            </div>
                        </div>
                    )
                })
            }
       
        </div>
    )
}