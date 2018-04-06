import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <fieldset className="form-group">
    <label>{ label }</label>
    <input { ...input } placeholder={ label } type={ type } className="form-control"/>
    { touched && error && <span>{ error }</span> }
  </fieldset>
);
export default renderField
