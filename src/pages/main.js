import React, { PureComponent } from 'react';
import Select from 'react-select';

import Styles from './styles.css';
import {
    filterByStatus,
    collectFilterOptions,
    checkStorage,
    modifyUsersList
} from '../utils/helpers';
import { Column } from '../components/Column';

class Main extends PureComponent {
    constructor (props) {
        super(props);

        this.filterOptions = [];
        this.state = {
            usersList:        [],
            userListFiltered: [],
            selectedOption:   null,
        };
    }

    async componentDidMount () {
        await this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?nat=gb&results=5');
            const data = await response.json();

            if (data) {
                const usersWithStatuses = await modifyUsersList(data);

                this.filterOptions = await collectFilterOptions(data);
                const selectedOption = checkStorage();

                if (selectedOption) {
                    this.filterUsers(data.results, selectedOption);
                    this.setState({
                        selectedOption,
                    });
                }

                this.saveUsers(usersWithStatuses);
            }
        } catch (error) {
            console.error('Failed to get users', error);
        }
    };

    saveUsers = users => {
        this.setState({
            usersList: users,
        });
    };

    filterUsers = (users, option) => {
        const filterBy = option || {};
        const filteredUsers = users.filter(
            user => `${user.name.first} ${user.name.last}` === filterBy.value
        );

        this.setState({
            userListFiltered: filteredUsers,
        });
    };

    handleSelectChange = selectedOption => {
        localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
        this.setState({ selectedOption }, () => {
            this.updateUsersList();
        });
    };

    updateUsersList = () => {
        const { usersList, selectedOption } = this.state;

        this.filterUsers(usersList, selectedOption);
    };

    modifyStatusForLeftAlign = user => {
        const { status } = user;
        const { usersList, userListFiltered } = this.state;

        const updatedUsersList = usersList.filter(
            usr => usr.id.value !== user.id.value
        );
        const updatedUsersListFiltered = userListFiltered.filter(
            usr => usr.id.value !== user.id.value
        );

        switch (status) {
            case 'hired': {
                const result = { ...user, status: 'interviewing' };

                if (userListFiltered.length) {
                    this.setState({
                        userListFiltered: [...updatedUsersListFiltered, result],
                    });
                }

                this.setState({
                    usersList: [...updatedUsersList, result],
                });
                break;
            }
            case 'interviewing': {
                const result = { ...user, status: 'applied' };

                if (userListFiltered.length) {
                    this.setState({
                        userListFiltered: [...updatedUsersListFiltered, result],
                    });
                }

                this.setState({
                    usersList: [...updatedUsersList, result],
                });
                break;
            }
            default:
                return 'status change unavailable';
        }
    };

    modifyStatusForRightAlign = user => {
        const { status } = user;
        const { usersList, userListFiltered } = this.state;
        const updatedUsersList = usersList.filter(
            usr => usr.id.value !== user.id.value
        );
        const updatedUsersListFiltered = userListFiltered.filter(
            usr => usr.id.value !== user.id.value
        );

        switch (status) {
            case 'applied': {
                const result = { ...user, status: 'interviewing' };

                if (userListFiltered.length) {
                    this.setState({
                        userListFiltered: [...updatedUsersListFiltered, result],
                    });
                }

                this.setState({
                    usersList: [...updatedUsersList, result],
                });
                break;
            }
            case 'interviewing': {
                const result = { ...user, status: 'hired' };

                if (userListFiltered.length) {
                    this.setState({
                        userListFiltered: [...updatedUsersListFiltered, result],
                    });
                }

                this.setState({
                    usersList: [...updatedUsersList, result],
                });
                break;
            }
            default:
                return 'status change unavailable';
        }
    };

    updateUserStatus = (user, align) => {
        const { usersList } = this.state;

        const chosenOne = usersList.find(usr => usr.id.value === user.id.value);

        if (align === 'left') {
            this.modifyStatusForLeftAlign(chosenOne);
        } else {
            this.modifyStatusForRightAlign(chosenOne);
        }
    };

    render () {
        const { usersList, userListFiltered, selectedOption } = this.state;
        const appliedUsers = userListFiltered.length
            ? filterByStatus(userListFiltered, 'applied')
            : filterByStatus(usersList, 'applied');
        const interviewingUsers = userListFiltered.length
            ? filterByStatus(userListFiltered, 'interviewing')
            : filterByStatus(usersList, 'interviewing');
        const hiredUsers = userListFiltered.length
            ? filterByStatus(userListFiltered, 'hired')
            : filterByStatus(usersList, 'hired');
        const showFilterError =
            !userListFiltered.length && selectedOption !== null;

        return (
            <div className = { Styles.container }>
                <Select
                    isSearchable
                    isClearable
                    placeholder = "Filter by..."
                    value = { selectedOption }
                    className = { Styles.select }
                    options = { this.filterOptions }
                    onChange = { this.handleSelectChange }
                />
                <div className = { Styles.error }>
                    {showFilterError &&
                        'No matches found, all users are listed below'}
                </div>
                <div className = { Styles.wrapper }>
                    <Column
                        columnTitle = "Applied"
                        users = { appliedUsers }
                        updateStatus = { this.updateUserStatus }
                    />
                    <Column
                        columnTitle = "Interviewing"
                        users = { interviewingUsers }
                        updateStatus = { this.updateUserStatus }
                    />
                    <Column
                        columnTitle = "Hired"
                        users = { hiredUsers }
                        updateStatus = { this.updateUserStatus }
                    />
                </div>
            </div>
        );
    }
}

export { Main };
