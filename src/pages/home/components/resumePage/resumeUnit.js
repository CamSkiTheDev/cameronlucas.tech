import React from 'react'

export default props => (
  <div className="resume_unit">
    <div className="title">{props.title}</div>
    <div className="info">
      <div className="company_name">{props.company}</div>
      <div className="time_at_company">{props.timeAtCompany}</div>
    </div>
    <div className="description">{props.description}</div>
  </div>
)
