import React from 'react';

import Styles from './styles.css';

const Image = ({ avatar }) => {
    return <img className = { Styles.avatar } src = { avatar } alt = "Avatar" />;
};

export { Image };
