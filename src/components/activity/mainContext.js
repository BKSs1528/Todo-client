import React, { useState } from "react"
import AddActivity from "./AddActivity"
import { useNavigate } from "react-router-dom"

import axios from "axios"
export const mainContext = React.createContext()


function Context() {
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const authToken = localStorage.getItem("authorization");
    const navigate = useNavigate();
    function submitData(e) {
        // console.log(userData)
        e.preventDefault();
        axios({
            url: "http://localhost:8000/todo/addActivity",
            method: "POST",
            headers: {
                authorization: authToken
            },
            data: userData
        }).then((res) => {
            console.log(res)
            navigate("/view");
        })
            .catch((err) => {
                navigate("/");
            })

    }

    return (
        <>
            <mainContext.Provider value={{ userData, setUserData, finalData, setFinalData, submitData }} className="step3">
                <AddActivity />
            </mainContext.Provider>
        </>
    )
}


export default Context;