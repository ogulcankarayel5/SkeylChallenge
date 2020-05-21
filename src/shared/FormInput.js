import React from 'react'
import {Input} from '.'


export const FormInput = React.memo(({name,type,placeholder,value,onChange,className,ariaLabel}) => {
 
  return (
      <>
      <Input data-test="Input" className={className} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} aria-label={ariaLabel}/>
      
      
      </>
  )
})