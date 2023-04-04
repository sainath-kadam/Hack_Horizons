import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import "../../src/assets/css/style.css";
import Top from '../../src/components/Home/Top1/Top';
import Top2 from '../../src/components/Home/Top2/Top2';
import Top3 from '../../src/components/Home/Top3/Top3';
import Footer from '../../src/components/Home/Footer/Footer';
import Top4 from './Home/Top4/Top4';



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
        {/* <Top/>
        <Top2/>
        <Top3/>
        <Top4/>
        <br/>
        <Footer/>
         */}
       
            {/* {
                data ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" , margin:'1.5rem'}}>
                    <img src={img} style={{ width: "100%", marginTop: 20 ,height:"50%"}} alt=" hlo" />
                    <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>
                </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            } */}

        </>

    )
}

export default Dashboard