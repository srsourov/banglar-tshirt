import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({children, hasFriend}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasFriend && <Friend></Friend>}
        </div>
    );
};

export default Cousin;