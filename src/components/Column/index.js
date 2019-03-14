import React, { Component } from 'react';

import Styles from './styles.css';
import { Card } from '../../components/Card';

class Column extends Component {
    render () {
        const { users, updateStatus, columnTitle } = this.props;

        return (
            <div className = { Styles.container }>
                <h3 className = { Styles.header }>{ columnTitle }</h3>
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

export { Column };
