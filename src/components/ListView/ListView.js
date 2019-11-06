import React from 'react';
import classes from './ListView.module.scss';
import ListItem from './ListItem/ListItem';
import OfficeContextProvider from '../../contexts/OfficeContext';

const ListView = () => {

    return ( 
        <OfficeContextProvider>
            <div className={classes.List}>
                <ul>
                    <ListItem />
                </ul>
            </div>
        </OfficeContextProvider>
     );
}
 
export default ListView;

