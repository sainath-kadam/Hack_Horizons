import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import './room.css';

const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 433322506;
        const serverSecret = "c9a9da7466c9acd1d203a312cc2df2cc";
        const  kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString()," ");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container : element,
            sharedLinks : [
                {
                    name : "Copy Link",
                    url : `https://fantastic-halva-e9efb3.netlify.app`
                }
            ],
            scenario : {
                mode : ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton : true,
        });
    }
  return (
    <div>
      <div style={{ width: '100vw', height: '100vh' }} ref={myMeeting}/>
    </div>
  )
}

export default RoomPage
