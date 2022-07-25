import React from 'react';

import '../assets/styles/reset.css';
import Start from './Start';
import Content from './Content';

export default function App () {
    const [swap, setSwap] = React.useState(true);

    return (
        <>
            {swap === true ? <Start setSwap={setSwap} /> : <Content setSwap={setSwap}/>}|
        </>
    )
}