import React from 'react'
// import PropTypes from 'prop-types'

function Alert (props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
       {props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
        {capitalize(props.alert.type)} : {props.alert.msg}
        </div>}
  </div>
  )
}

export default Alert