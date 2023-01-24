import { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../Posts/PostList";
class Dashboard extends Component {
    render(){

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList />
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications />
                </div>
            </div>
        )
    }
}
export default Dashboard;