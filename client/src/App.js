import Header from "./components/Main/Header";
import Login from "./components/Main/Login";
import Register from "./components/Main/Register";
import Dashboard from "./components/Main/Dashboard";
import Error from "./components/Main/Error";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import RquestionsSet from "./components/Questionset/RquestionsSet";
import EquestionsSet from "./components/Questionset/EquestionsSet";
import NquestionsSet from "./components/Questionset/NquestionsSet";
import MquestionsSet from "./components/Questionset/MquestionsSet";
import MlquestionsSet from "./components/Questionset/MlquestionsSet";
import CssquestionsSet from "./components/Questionset/CssquestionsSet";
import CppquestionsSet from "./components/Questionset/CppquestionsSet";
import DsaquestionsSet from "./components/Questionset/DsaquestionsSet";
import Footer from "./components/Home/Footer/Footer";

function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


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
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/dash");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/RquestionsSet" element={<RquestionsSet />} />
              <Route path="/NquestionsSet" element={<NquestionsSet />} />
              <Route path="/EquestionsSet" element={<EquestionsSet />} />
              <Route path="/MquestionsSet" element={<MquestionsSet />} />
              <Route path="/MlquestionsSet" element={<MlquestionsSet />} />
              <Route path="/CssquestionsSet" element={<CssquestionsSet />} />
              <Route path="/CppquestionsSet" element={<CppquestionsSet />} />
              <Route path="/DsaquestionsSet" element={<DsaquestionsSet />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;
