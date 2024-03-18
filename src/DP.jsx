import React from "react";
import PropTypes from 'prop-types'
const DP=(props)=>{
    return(
        <div>
            <h1>{props.Name}</h1>
            <h1>{props.location}</h1>
            <h1>{props.company}</h1>
        </div>
    )
}
DP.defaultProps={
    Name:'Dinesh',
    location:'Bangalore',
    company:'facebook'
}
DP.propTypes={
    Name:PropTypes.string,
    location:PropTypes.string,
    company:PropTypes.string
}
export default DP