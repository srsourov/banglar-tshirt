import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext);
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>brother</h2>
            <p><small>{ring}</small></p>
            <p><small>grandpa money : {money}</small></p>
        </div>
    );
};

export default Brother;