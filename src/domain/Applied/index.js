import React, { Component } from 'react';

import { Card } from '../../components/Card';

import Styles from './styles.css';

class Applied extends Component {
    render () {
        const { users, updateStatus } = this.props;

        return (
            <div className = { Styles.container }>
                <h3 className = { Styles.header }>Applied</h3>
                <div className = { Styles.wrapper }>
                    {users.map(user => (
                        <Card
                            key = { user.id.value }
                            user = { user }
                            updateStatus = { updateStatus }
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export { Applied };
