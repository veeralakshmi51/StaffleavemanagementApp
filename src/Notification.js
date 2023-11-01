import React from 'react'
import addNotification from 'react-push-notification'
import logo from './logo.png'
const Notification = () => {
    const clickToNotify=()=>{
        addNotification({
        title:"Push Notification",
        message:"New Notification is came",
        duration:10000,
        icon:logo.png,
        native:true,
        onClick:()=>console.log("Notified")
        })
        }
        return(
        <div>
        <button onClick={clickToNotify} style={{margin:'100px'}}> Click </button>
        </div>
        )
        }


export default Notification