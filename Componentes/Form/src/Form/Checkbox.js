import React from 'react'

const Checkbox = ({options, value, setValue, ...props}) => {
 
    const handleChange = ({target})=>{
        target.checked ?
        setValue([...value, target.value])
        :
        setValue(value.filter(itemValue=>itemValue !== target.value))
    }
    return (
    <>
    	{options.map(option=>(
            <label key={option}>
                <input
                    type='checkbox'
                    value={option}
                    checked={value.includes(option)}
                    onChange={handleChange}
                    {...props}
                />
                {option}
            </label>
        ))}
    </>
  )
}

export default Checkbox