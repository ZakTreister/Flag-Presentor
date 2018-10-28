import React from 'react';

const dropDownCountries = function (props) {
    return (
        props.countries && props.countries.length > 0 ?
            < select onChange={(e) => { props.choiceHandler(e.target.value) }}>
                {props.countries.map((country, index) => <option key={index} value={country.name} >{country.name}</option>)}
            </ select > :
            <div></div>
    )

}
export default dropDownCountries;