import React from 'react';

const name = function (props) {
    return (
        props.name != null ?
            < div >
                <h1>{props.name}</h1>
            </div > :
            <div></div>
    )

}
export default name;