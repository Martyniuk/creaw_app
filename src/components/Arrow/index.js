import React from 'react';

import Styles from './styles.css';

const Arrow = ({ align, user, changeStatus }) => {
    const styles =
        align === 'left'
            ? [Styles.arrow, Styles.left].join(' ')
            : [Styles.arrow, Styles.right].join(' ');

    return <div className = { styles } onClick = { () => changeStatus(user, align) } />;
};

export { Arrow };
