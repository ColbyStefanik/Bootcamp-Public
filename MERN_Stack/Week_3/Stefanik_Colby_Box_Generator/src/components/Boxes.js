import React from 'react';
    
const Boxes = (props) => {

    const { boxList } = props;
    
    return (
        <div>
            {
            boxList.map((color, index) => (
                <div key={index} style={{ 
                    display: "inline-block",
                    margin: "10px",
                    height: "50px", 
                    width: "50px", 
                    backgroundColor: color
                }}>
                </div>
            ))
            }
        </div>
    );
}
export default Boxes;