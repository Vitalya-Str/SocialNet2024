import React, {FC, useEffect} from "react";
import s from "./Users.module.css"
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {
    getCount,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getTotalCount,
    setSearchTerm,
    usersReselect
} from "../../redux/usersReselect";
import {followUser, getUsers, unfollowUser} from "../../redux/usersReducer";


export const Users = () => {
    const users = useSelector(usersReselect)
    const count = useSelector(getCount)
    const totalCount = useSelector(getTotalCount)
    const currentPage = useSelector(getCurrentPage)
    const isFetching = useSelector(getIsFetching)
    const followingInProgress = useSelector(getFollowingInProgress)
    const term = useSelector(setSearchTerm)

    const dispatch :any = useDispatch()


    useEffect(() => {
        dispatch(getUsers(currentPage, count, term))
    }, [])

    const searchForm = (term: string) => {
        dispatch( getUsers(1, count, term))
    }

    const pageNumber = (p: number, count: number, term: string) => {
        dispatch( getUsers(p, count, term))
    };

    const setUnfollowUser = (userId:number) => {
        dispatch(unfollowUser(userId))
    }
    const setFollowUser = (userId:number) => {
        dispatch(followUser(userId))
    }

    return (
        <>
            <div>
                {isFetching ? <Preloader/> : null}

                <div className={s.container}>
                    <div className={s.searchForm}><SearchFormik searchForm={searchForm}/></div>
                    <div>
                        <Paginator term={term} totalCount={totalCount} count={count}
                                   pageNumber={pageNumber} currentPage={currentPage}/>
                    </div>
                    <div>
                        {users.map(user => <User key={user.id} user={user}
                                                 followingInProgress={followingInProgress}
                                                 setUnfollowUser={setUnfollowUser}
                                                 setFollowUser={setFollowUser}/>)
                        }
                    </div>
                </div>
            </div>


        </>
    )
}



type SearchPropsType = {
    searchForm: (term: string) => void
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



