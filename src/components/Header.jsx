import React from 'react';


const Header = ({title, size}) => {
  return (
    <div className='mb-5'>
        <p className={`text-${size}xl font-extrabold tracking-tight text-slate-900`}>
            {title}
        </p>
    </div>
  )
}

export default Header