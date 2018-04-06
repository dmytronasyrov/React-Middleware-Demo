import React from 'react'

const ErrorMsg = props => {
  if (props.errorMessage) {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> { props.errorMessage }
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default ErrorMsg
