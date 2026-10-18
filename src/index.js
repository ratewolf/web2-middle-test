import React from 'react';
import ReactDOM from 'react-dom/client';

// import Accommodate from './answer/accommodate/withoutCustomHook/Accommodate'
// import Clock from "./answer/clock/Clock";
import ConfirmDialogList from "./answer/confirmDialogList/ConfirmDialogList";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
        root.render(
            <React.StrictMode>
                <ConfirmDialogList />
            </React.StrictMode>
        );
    }, 1000
);