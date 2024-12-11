import React from "react";
import s from "./Users.module.css"
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

class Users extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count);
    }

    render() {
        return (
            <>
                <div>
                    {this.props.isFetching ? <Preloader/> : null}
                    <div className={s.container}>
                        <div>
                            <Paginator totalCount={this.props.totalCount} count={this.props.count}
                                       getUsers={this.props.getUsers} currentPage={this.props.currentPage}/>
                        </div>
                        <div>
                            {this.props.users.map(user => <User key={user.id} user={user}
                                                                followingInProgress={this.props.followingInProgress}
                                                                unfollowUser={this.props.unfollowUser}
                                                                followUser={this.props.followUser}/>)
                            }
                        < /div>
                    </div>
                </div>


            </>
        )
    }
}

export default Users


