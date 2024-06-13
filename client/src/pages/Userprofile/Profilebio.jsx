import React from 'react'

const Profilebio = ({currentprofile}) => {
  return (
    <div>
      <div>
        {currentprofile?.tags.length !==0? (
          <>
          <h4>Tags watched</h4>
          {currentprofile?.tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          ))}
          </>
        ):(
          <p> 0 Tags watched</p>
        )}
      </div>
      <div>{currentprofile?.about ? (
        <> 
        <h4>About</h4>
        <p>{currentprofile?.about}</p>
        </>
      ):(
        <p>No bio found</p>
      )}</div>
    </div>
  )
}

export default Profilebio