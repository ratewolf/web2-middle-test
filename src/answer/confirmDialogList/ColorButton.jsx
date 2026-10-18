import React from "react";

function ColorButton(props) {
    return (
        // <button style={{color: 'white', background: `${props.color}`}}>
        //     <b>{props.children}</b>
        // </button>
        <button className={`bg-${props.color}`}>
            <b>{props.children}</b>
        </button>
    );
}

export default ColorButton;