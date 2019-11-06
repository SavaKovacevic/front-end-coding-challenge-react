import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const OfficeContext = createContext();

const OfficeContextProvider = (props) => {

    const [offices, setOffices] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://itk-exam-api.herokuapp.com/api/offices")
            .then(response => {
                setOffices(response.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
      }, []);

    return ( 
        <OfficeContext.Provider value={{offices, loading}}>
            { props.children }
        </OfficeContext.Provider>
     );
}
 
export default OfficeContextProvider;
