import SideContent from "./SideContent";
import Header from "./Header";
import { useNavigate } from "react-router-dom"

import Table  from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import { useState, useEffect } from "react"
import "./viewpage.css"


function Viewpage() {

    const authToken = localStorage.getItem("authorization");
    const [listData, setListdata] = useState([]);

    const navigate = useNavigate();

    function handelAddProp() {
        navigate("/addactivity");
    }

    useEffect(() => {
        fetch("http://localhost:8000/todo/view", { method: "GET", headers: { authorization: authToken } })

            .then((res) => {
                return res.json();
            }).then((uData) => {
                setListdata(uData.reverse())
            }).catch((err) => {
                navigate("/")
            });
    }, []);




    return (
        <div>
            <SideContent />
            <Header />
            <div className="box1">
                <button style={{ backgroundColor: "#284E91" }} type="submit" value="+Add Property" className="button07" onClick={handelAddProp}>+Add Activity</button>
            </div>
            <div className="info">
                <TableContainer className="tc">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className="th">
                            <TableRow>
                                <TableCell style={{ color: "#284E91" }}>Activity</TableCell>
                                <TableCell style={{ color: "#284E91" }}>Status</TableCell>
                                <TableCell style={{ color: "#284E91" }}>Time taken (Hrs:Min:Sec)</TableCell>
                                <TableCell style={{ color: "#284E91" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        {listData.map((user, i) => {
                            const PPID = "PPD" + user._id[user._id.length - 4] + user._id[user._id.length - 3] + user._id[user._id.length - 2] + user._id[user._id.length - 1]
                            return (
                                <TableBody>
                                    <TableRow key={i}>
                                        <TableCell>{user.activity}</TableCell>
                                        <TableCell>{user.status}</TableCell>
                                        <TableCell>{user.timeTaken}</TableCell>
                                        <TableCell>{user.action}</TableCell>
                                    </TableRow>
                                </TableBody>
                            )
                        })}
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}


export default Viewpage;