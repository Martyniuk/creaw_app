import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './pages/main';

const root = document.getElementById('root');

ReactDOM.render(<Main />, root);

if (module.hot) {
    module.hot.accept();
}
