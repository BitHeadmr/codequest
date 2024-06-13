import React from 'react'

const Taglist = ({tag}) => {
  return (
    <div className="tag">
        <h5>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default Taglist