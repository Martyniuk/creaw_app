import React, { Component } from 'react';

import { Image } from '../Image';
import { Arrow } from '../Arrow';

import { CardStyled, MainWrapper, Credentials, ArrowWrapper } from './styles';

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
            <CardStyled>
                <MainWrapper>
                    <Image avatar = { picture.medium } />
                    <Credentials>
                        <h4> { name.first } { name.last } </h4>
                    </Credentials>
                </MainWrapper>
                <ArrowWrapper isApplied = { isApplied }>
                    { (isHired || isInterviewing) && (
                        <Arrow
                            align = "left"
                            user = { user }
                            changeStatus = { updateStatus }
                        />
                    ) }
                    { (isApplied || isInterviewing) && (
                        <Arrow
                            align = "right"
                            user = { user }
                            changeStatus = { updateStatus }
                        />
                    )}
                </ArrowWrapper>
            </CardStyled>
        );
    }
}

export { Card };
