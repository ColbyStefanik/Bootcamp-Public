import React from 'react';
    
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props; 
    return (
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h5>
                Age: {age}
            </h5>
            <h5>
                Hair Color: {hairColor}
            </h5>
        </div>
    );
}
export default PersonCard;

