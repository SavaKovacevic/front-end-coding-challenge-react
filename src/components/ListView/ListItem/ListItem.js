import React, { useContext } from 'react';
import classes from './ListItem.module.scss';
import { OfficeContext } from '../../../contexts/OfficeContext';


const ListItem = () => {

    const {offices} = useContext(OfficeContext);

    // const { offices } = props;

    const officesList = offices && offices.length ? (
        offices.map(office => {

            const officeInfo = <div className={classes.info}>
                                    <div className={classes.location_info}>{office.name}</div>
                                    <p>{office.description}</p>
                                </div>

            return (
                office.photo == null ? 
                (<div className={classes.list_item} key={office.id}>
                <div className={classes.location}>{office.name.charAt(0)}</div>
                {officeInfo}
                </div>) 
                :
                (<div className={classes.list_item} key={office.id}>
                <div className={classes.flag}><img src={office.photo} alt=""></img></div>
                {officeInfo}
                </div>)
               
            )
        })
    ) : null;
    return(
        <div>
            {officesList}
        </div> 
    )
}
 
export default ListItem;