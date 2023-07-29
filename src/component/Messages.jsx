import { useContext, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/chatContext";
import { useEffect } from "react";
import { db } from "../firebase";
import { doc,onSnapshot } from "firebase/firestore";

export default function Messages() {
    const [messages,setMessages]=useState([])
    const {data}=useContext(ChatContext)
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
          doc.exists() && setMessages(doc.data().messages);
        });
    
        return () => {
          unSub();
        };
      }, [data.chatId]);
    return (
        <div className="messages">
            {
                messages.map((v)=>{
                    return(
                        <Message message={v} key={v.id} />
                    )
                })
            }
        </div>

    )
}