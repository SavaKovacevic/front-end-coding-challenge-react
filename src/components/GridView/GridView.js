import React from 'react';
import GridItem from './GridItem/GridItem';
import OfficeContextProvider from '../../contexts/OfficeContext';

const GridView = () => {

    return ( 
        <OfficeContextProvider>
            <GridItem />
        </OfficeContextProvider>
     );
}
 
export default GridView;

