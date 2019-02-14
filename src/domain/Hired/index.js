import React, { Component } from 'react';

import Styles from './styles.css';
import { Card } from '../../components/Card';

class Hired extends Component {
    render () {
        const { users, updateStatus } = this.props;

        return (
            <div className = { Styles.container }>
                <h3 className = { Styles.header }>Hired</h3>
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

export { Hired };
