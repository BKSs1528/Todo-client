import "./header.css";

// import Nav from "react-bootstrap/Nav"
// import NavDropdown from "react-bootstrap/NavDropdown"
import {useState, useEffect}from "react";
import {useNavigate, useHistory} from "react-router-dom";
// import {AiOutlineUser} from "react-icons/ai"

function Header(){
    const authToken = localStorage.getItem("authorization");
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/todo/done",{method:"GET",headers:{authorization:authToken}})
        .then((res)=>{
            return res.json();
        }).then((uData)=>{
            setData(uData);
        })
    })

    const navigate = useNavigate();
    function handleLogout(){
        localStorage.setItem("authorization","");
        navigate("/")
        function preventBack(){window.history.forward();}
        setTimeout(preventBack(),0);
        window.onunload = ()=>{""};
    }

    return(
        <div className = "headPage">
            <div className ="header">
                {data.map((user, i)=>{

                    return(
                        <div>
                            <div className = "heading">

                                <p>{user.mail}</p>
                                <select className ="dropDown" onClick = {handleLogout}>
                                    {/* <option></option> */}
                                    <option>Logout</option>
                                </select>
                            </div>
                            <div className="id">
                                <p>User Id:{user._id}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Header;