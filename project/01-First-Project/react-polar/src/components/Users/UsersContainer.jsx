import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, fetchUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/preloader';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.fetchUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.fetchUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                setCurrentPage={this.props.setCurrentPage}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, fetchUsers }),
    // withAuthRedirect
)(UsersContainer);
