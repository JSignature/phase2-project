import React from 'react'

const TemplateList = ({ templates }) => {
  console.log(templates)
  return (
    <div>
      {templates.map(template => (
        <div key={template.id}>
          <h3>Template Name: {template.tempName}</h3>
          <p>E-mail Body:{template.tempBody}</p>
        </div>
      ))}
    </div>
  )
}

export default TemplateList
