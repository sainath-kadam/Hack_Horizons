// import React, { useContext, useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import "./header.css";
// import { LoginContext } from "../ContextProvider/Context";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { useNavigate, NavLink } from "react-router-dom";

// const Header = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const { logindata, setLoginData } = useContext(LoginContext);

//   const history = useNavigate();

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const logoutuser = async () => {
//     let token = localStorage.getItem("usersdatatoken");
//     const res = await fetch("https://hac-bac.onrender.com/logout", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//         Accept: "application/json",
//       },
//       credentials: "include",
//     });
    
//     const data = await res.json();
  
//     if (data.status === 201) {
//       localStorage.removeItem("usersdatatoken");
//       setLoginData(false);
//       history("/");
//     } else {
//       console.log("error");
//     }
//   };

//   const goDash = () => {
//     history("/dash");
//   };
  
//   const goError = () => {
//     history("*");
//   };

//   return (
//     <>
//       <header>
//         <nav>
//           <div className="logo">
//             <img
//               src="https://i.ibb.co/PWY29wB/Hack-horizons-low-resolution-logo-black-on-transparent-background.png"
//               alt="Logo"
//             />
//           </div>

//           <div className="avtar">
//             {logindata.ValidUserOne ? (
//               <Avatar
//                 style={{
//                   background: "black",
//                   fontWeight: "bold",
//                   textTransform: "capitalize",
//                 }}
//                 onClick={handleClick}
//               >
//                 {logindata.ValidUserOne.fname[0].toUpperCase()}
//               </Avatar>
//             ) : (
//               <Avatar style={{ background: "black" }} onClick={handleClick} />
//             )}
//           </div>

//           <Menu
//             id="basic-menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             MenuListProps={{
//               "aria-labelledby": "basic-button",
//             }}
//           >
//             {logindata.ValidUserOne ? (
//               <>
//                 <MenuItem
//                   onClick={() => {
//                     goDash();
//                     handleClose();
//                   }}
//                 >
//                   Profile
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => {
//                     logoutuser();
//                     handleClose();
//                   }}
//                 >
//                   Logout
//                 </MenuItem>
//               </>
//             ) : (
//               <>
//                 <MenuItem
//                   onClick={() => {
//                     goError();
//                     handleClose();
//                   }}
//                 >
//                   Profile
//                 </MenuItem>
//               </>
//             )}
//           </Menu>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;
import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./header.css";
import { LoginContext } from "../ContextProvider/Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, NavLink, Link } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { logindata, setLoginData } = useContext(LoginContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goDash = () => {
    navigate("/dash");
    handleClose();
  };
  
  const goError = () => {
    navigate("*");
    handleClose();
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img
              src="https://i.ibb.co/PWY29wB/Hack-horizons-low-resolution-logo-black-on-transparent-background.png"
              alt="Logo"
            />
          </div>

          <div className="avatar">
            {logindata.ValidUserOne ? (
              <Avatar
                style={{
                  background: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={handleClick}
              >
                {logindata.ValidUserOne.fname[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar style={{ background: "black" }} onClick={handleClick} />
            )}
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {logindata.ValidUserOne ? (
              <>
                <MenuItem onClick={goDash}>Profile</MenuItem>
                <Link to='/'>
                  <MenuItem>Logout</MenuItem>
                </Link>
              </>
            ) : (
              <>
                <MenuItem onClick={goError}>Profile</MenuItem>
              </>
            )}
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;
