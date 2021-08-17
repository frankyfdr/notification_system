import "./style.css"
import { Alert, ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";



export var setNotifyList = null
 const Notify = () => {
    const [list, setList] = useState([])
    setNotifyList = setList

 return(<div className="notify-main-container" id='notify-main-container'>
    {list.length >0 &&
       
       list.map((item, idx) => <AlertItem type={item.type} text={item.text} index={idx} />)
    }
    </div>)

}

export  { Notify, sendAlert}



const AlertItem = ({ type, index, text }) => {

    const [progressValue, setProgressValue] = useState(100)

    useEffect(() => {


        if (progressValue >= 0) {
            const interval = setTimeout(() => {
                setProgressValue(progressValue - 4)

                if (progressValue <= 1) {

                    clearInterval(interval)
                }
            }, 200)
        }
        else {
            let div = document.getElementById("notify-item-" + index)
            if (div) {
                div.style.animation = "out 0.3s ease-in-out  forwards "

                setTimeout(() => {
                    div.remove()
                }, 500);
            }
        }

    })
    const remove = () =>{
         let div = document.getElementById("notify-item-" + index)
            if (div) {
                div.style.animation = "out 0.3s ease-in-out  forwards "

                setTimeout(() => {
                    div.remove()
                }, 500);
            }
    }

    return (
        <div className='notify-item' id={"notify-item-" + index}>
            <Alert key={index} variant={type} onClick={()=>remove()}>
                <div className='alert-text'>{text.toString()}</div>
            </Alert>
            <ProgressBar variant={type} now={progressValue} />
        </div>
    )
}



 const sendAlert = (type,text) =>{
    
        setNotifyList(old => [...old, { type, text }])      

}



