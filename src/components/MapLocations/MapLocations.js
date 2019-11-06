import React from 'react';
import OfficeContextProvider from '../../contexts/OfficeContext';
import Map from './Map';

const MapLocations = () => {
    // const observed = useRef(null);
    return ( 
        <OfficeContextProvider>
            <Map/>
        </OfficeContextProvider>
     );
}
 
export default MapLocations;



