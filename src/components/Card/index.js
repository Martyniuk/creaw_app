import React, { Component } from 'react';

import Styles from './styles.css';
import { Image } from '../Image';
import { Arrow } from '../Arrow';

class Card extends Component {
    render () {
        const { user, updateStatus } = this.props;
        const { picture, name, status } = user;

        if (!user) {
            return null;
        }

        const isHired = status === 'hired';
        const isInterviewing = status === 'interviewing';
        const isApplied = status === 'applied';

        return (
            <div className = { Styles.card }>
                <div className = { Styles.mainWrapper }>
                    <Image avatar = { picture.medium } />
                    <div className = { Styles.credentials }>
                        <h4>
                            {name.first} {name.last}
                        </h4>
                    </div>
                </div>
                <div
                    className = { [
                        Styles.arrowWrapper,
                        isApplied && Styles.alignRight
                    ].join(' ') }>
                    {(isHired || isInterviewing) && (
                        <Arrow
                            align = "left"
                            user = { user }
                            changeStatus = { updateStatus }
                        />
                    )}
                    {(isApplied || isInterviewing) && (
                        <Arrow
                            align = "right"
                            user = { user }
                            changeStatus = { updateStatus }
                        />
                    )}
                </div>
            </div>
        );
    }
}

export { Card };
