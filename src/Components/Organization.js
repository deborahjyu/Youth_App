import React from "react";

const Organization = props => {
    return (
    <div className = 'indOrg'>
        <p className= "name">{props.name}</p>
        <div className= "description"><a href = {props.description} target = "_blank" rel="noopener noreferrer" >Website (including license and registration)</a></div>
        <p className= "city">City: {props.city}</p>
        <p className= "state"> State: {props.state}</p>
        <p className= "zipcode">Zipcode: {props.zipcode}</p>
        <p className= "phone">Phone Number: {props.phone}</p>
        <p className= "capacity">Capacity: {props.capacity}</p>
    </div>
    );
};

export default Organization;