
import { useEffect, useState } from "react";
import './App.css';
import Notify from "./notify"
import { Button } from 'react-bootstrap'
import {useAlert} from "./notify/useAlert"
function App() {
 
  const {notifyList, sendAlert} = useAlert()

  return (
    <div className="App">
      <Button onClick={() => {

        sendAlert('success', new Date())

      }}>Send</Button>

      <Notify notifyList={notifyList} />
    </div>
  );


}

export default App;

