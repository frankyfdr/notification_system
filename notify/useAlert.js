 
import {  useState } from "react";

export const useAlert = () =>{
    const [notifyList, setNotifyList] = useState([])
   
    const sendAlert = (type,text) =>{

           setNotifyList(old => [...old, { type, text }])      
    }
  

    return  {notifyList,sendAlert}
}
 
