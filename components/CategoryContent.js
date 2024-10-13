import React from 'react'

const CategoryContent = ({children, isContentWide}) => {
  return (
    <div className={`CategoryContent ${isContentWide ? 'Wide' : ''}`} >
        {children}
    </div>
  )
}

export default CategoryContent