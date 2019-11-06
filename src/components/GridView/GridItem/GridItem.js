import React, { useContext } from 'react';
import classes from './GridItem.module.scss';
import { OfficeContext } from '../../../contexts/OfficeContext';


const GridItem = () => {

    const {offices} = useContext(OfficeContext);

    const officesGrid = offices && offices.length ? (
        offices.map(office => {

            const officeInfo = <div className={classes.info}>
                                    <div className={classes.location_info}>{office.name}</div>
                                    <p>{office.description}</p>
                                </div>

            return (
                office.photo == null ? 
                (<div className={classes.grid_item} key={office.id}>
                    <div className={classes.inner}>
                <div className={classes.location}>{office.name.charAt(0)}</div>
                {officeInfo}
                </div>
                </div>) 
                :
                (<div className={classes.grid_item} key={office.id}>
                    <div className={classes.inner}>
                <div className={classes.flag}><img src={office.photo} alt=""></img></div>
                {officeInfo}
                </div>
                </div>)
               
            )
        })
    ) : null;
    return(
        <div className={classes.Grid}>
            {officesGrid}
        </div> 
    )
}
 
export default GridItem;