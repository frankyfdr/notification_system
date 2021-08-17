

import {Notify,sendAlert} from "./Notify"
import { Button } from 'react-bootstrap'

function App() {

  console.log("@")
  return (
    <div className="App">
      <Button onClick={() => {

        sendAlert('danger', new Date())

      }}>Send</Button>

      <Notify />
      <div>{new Date().toString()}</div>
    </div>
  );


}

export default App;
