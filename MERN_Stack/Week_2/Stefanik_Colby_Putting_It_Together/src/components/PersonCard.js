import React, { useState } from "react";
    
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props; 
    const [stateAge, setNewAge] = useState(age);
    return (
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h5>
                Age: {stateAge}
            </h5>
            <h5>
                Hair Color: {hairColor}
            </h5>
            <button onClick={() => setNewAge(stateAge + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;

