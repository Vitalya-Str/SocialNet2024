import React from "react";
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
                </div>

                <div>
                    <div>
                        <Paginator totalCount={this.props.totalCount} count={this.props.count}
                                   getUsers={this.props.getUsers} currentPage={this.props.currentPage}/>
                    </div>
                    <div>
                        {this.props.users.map(u => <User key={u.id} user={u}
                                                         followingInProgress={this.props.followingInProgress}
                                                         unfollowUser={this.props.unfollowUser}
                                                         followUser={this.props.followUser}/>)


                        }
                    < /div>
                </div>
            </>
        )
    }
}

export default Users


