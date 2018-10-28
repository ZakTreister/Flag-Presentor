import React from 'react';

const flag = function (props) {
    return (
        props.flag ?
            < div >
                <img src={props.flag} alt="Just Imagine"></img>
            </div > :
            <div></div>
    )

}
export default flag;