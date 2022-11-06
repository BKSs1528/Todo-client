import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { mainContext } from "./mainContext"



function Final() {
    const { userData, setUserData } = useContext(mainContext)
    console.log(mainContext);
    const navigate = useNavigate()
    function handleCancel(){
        setUserData("")
        navigate("/view")
    }

    return (
        <>
            <div className="BasicInfo">
                <div className="PT">
                    <div >
                        <label className="inputtxt">Activity</label>
                        <div >
                            <select className="property" value={userData['activity']} onChange={(e) => setUserData({ ...userData, "activity": e.target.value })}>
                                <option >Select Activity</option>
                                <option >Running</option>
                                <option >Drinking</option>
                                <option>Sleeping</option>
                                <option>Eating</option>
                                <option>Washing</option>
                                <option>Cooking</option>
                            </select>

                        </div>
                    </div>

                    <div className="divide">
                        <label className="inputtxt">Status</label>
                        <div>
                            <select type="text" className="property" value={userData['status']} onChange={(e) => setUserData({ ...userData, "status": e.target.value })}>
                                <option >Status</option>
                                <option>Pending</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="PT">
                    <div>
                        <label className="inputtxt">Time Taken</label>
                        <div>
                            <input className="property" placeholder="0:15 min" value={userData['timeTaken']} onChange={(e) => setUserData({ ...userData, "timeTaken": e.target.value })}></input>
                        </div>
                    </div>


                    <div className="divide">
                        <label className="inputtxt">action</label>
                        <div >
                            <select className="property" value={userData['action']} onChange={(e) => setUserData({ ...userData, "action": e.target.value })}>
                                <option>Select Action</option>
                                <option>Start</option>
                                <option>End</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="basicbtns">
                    <div>
                        <button className="cancelbtn" type="submit" onClick={handleCancel}>cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Final;