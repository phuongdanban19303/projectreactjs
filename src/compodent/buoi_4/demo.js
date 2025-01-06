import React from 'react'

function Demo(props) {
    console.log(props);
    
    const {children}=props
  return ( <div>{children}</div>
  )
}

export default Demo
