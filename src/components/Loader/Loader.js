import React, { useContext } from 'react';
import classes from './Loader.module.scss';

import { OfficeContext } from '../../contexts/OfficeContext';

const Loader = () => {
    const {loading} = useContext(OfficeContext);
    return ( 
        loading ? (<div className={classes.loader_overlay}>
            <div className={classes.loader}></div>
        </div>) : null
     );
}
 
export default Loader;
