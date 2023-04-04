import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import "../../src/assets/css/style.css";
import Banner from '../Home/Banner/Banner';
import Top2 from '../Home/About/About';
import Card from '../Home/Card/Card';
import Footer from '../Home/Footer/Footer';
import { Routes, Route} from "react-router-dom"
import Contact from '../Home/Contact/Contact';
import Team from '../Home/Team/Team';
import VideoPlayer from '../Home/VideoPlayer/VideoPlayer';
import About from '../Home/About/About';
import VideoCall from '../Home/VideoCall/VideoCall';
import PlacementPredictor from '../Home/PlacementPredictor/PlacementPredictor';
import ButtonContainer from '../Home/ButtonContainer/ButtonContainer';


// import CodeEditor from './CodeEditor/CodeEditor';
// import vm from 'vm';

// import img from '../../src/bg.jpg';

const Dashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const [data, setData] = useState(false);


    const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status == 401 || !data) {
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data)
            history("/dash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    }, [])

    return (
        <>
        <Banner/>
        <About/>
        <VideoPlayer/>
        <br/>
        <ButtonContainer/>
        <Card/>
        {/* <VideoCall/> 
        <PlacementPredictor/> */}
        
        <Team/>
        <Contact/>
        <br/>
        <Footer/>
        <br/>
        </>

    )
}

export default Dashboard