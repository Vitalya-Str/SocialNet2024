import React, {FC} from "react";
import s from "./Users.module.css"
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../type/type";
import {Field, Form, Formik} from "formik";

type PropsType = {
    currentPage: number
    count: number
    totalCount: number
    isFetching: boolean
    users: UserType[]
    term: string


    getUsers: (currentPage: number, count: number, term: string) => void
    followingInProgress: number[]
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void

}

class Users extends React.Component<PropsType, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count, this.props.term );
    }

    searchForm = (term:string) => {
    this.props.getUsers(1, this.props.count,term)
    }

    render() {
        return (
            <>
                <div>
                    {this.props.isFetching ? <Preloader/> : null}

                    <div className={s.container}>
                        <div className={s.searchForm}><SearchFormik searchForm={this.searchForm} /></div>
                        <div>
                            <Paginator term={this.props.term} totalCount={this.props.totalCount} count={this.props.count}
                                       getUsers={this.props.getUsers} currentPage={this.props.currentPage}/>
                        </div>
                        <div>
                            {this.props.users.map(user => <User key={user.id} user={user}
                                                                followingInProgress={this.props.followingInProgress}
                                                                unfollowUser={this.props.unfollowUser}
                                                                followUser={this.props.followUser}/>)
                            }
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
type SearchPropsType = {
    searchForm: (term:string) => void
}
const SearchFormik: FC<SearchPropsType> = ({searchForm}) => {
    return <div>
        <Formik
            initialValues={{term: ''}}
            onSubmit={(values, {setSubmitting}) => {
                searchForm(values.term)
                setSubmitting(false)
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}

export default Users


