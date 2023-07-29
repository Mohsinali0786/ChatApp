import { useContext, createContext,  useReducer,  } from "react";
import { AuthContext } from "./Auth";
export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState({})
    const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };
  
    const chatReducer=(state,action)=>{
        console.log('action.type',action.type)
        switch(action.type){
            case 'Change_User':
                return {
                    user: action.payload,
                    chatId:
                      currentUser.uid > action.payload.uid
                        ? currentUser.uid + action.payload.uid
                        : action.payload.uid + currentUser.uid,
                  };
          
            default:
                return state;
            }
    }
     
    const [state,dispatch]=useReducer(chatReducer,INITIAL_STATE)
    console.log(dispatch,'dispatch')
    
    return (
        < ChatContext.Provider value={{data:state,dispatch}}>
            {children}
        </ChatContext.Provider >
    )

}