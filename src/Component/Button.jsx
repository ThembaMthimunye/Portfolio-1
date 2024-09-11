import React from 'react'

const Button = ({label,  onClick}) => {
  return (
    
    <button className='text-white bg-[#f50a0a] rounded-[1px] p-1 font-semibold'  onClick={onClick}>{label}</button>
  )
}

export default Button
