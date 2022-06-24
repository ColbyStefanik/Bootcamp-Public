import React, { useState } from "react";
    
const BoxInput = (props) => {

    const { boxColorList, setBoxColorList } = props;

    const [ color, setColor] = useState("");

    const submitHandler = (event) => {

        event.preventDefault();
        setBoxColorList( [ ...boxColorList, color ] );
    }

    return (
        <div>
            <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
            <div>
                <label htmlFor="color">Color</label>
                <input 
                    type="text" 
                    name="color"
                    onChange={ (e) => setColor(e.target.value) }
                />
            </div>
            <button>Add</button>
            </form>
        </div>
    );
}
export default BoxInput;