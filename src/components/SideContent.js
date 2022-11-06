// import Header from "./header";
import "./sidecontent.css";

function SideContent() {
    return (
        <div className="side">
            <div className="sideBar">
                <div className="container1">
                    <div>
                        <div>
                            <h1 className="log">10X todo</h1>
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <li>Todo list</li>
                    <li>history</li>
                </div>
            </div>
        </div>
    )
}

export default SideContent;