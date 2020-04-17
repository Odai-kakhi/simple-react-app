import React from 'react';
import './search-box.styles.css'

/**
 * In the function parametrs we are the destructure technich 
 * so what is happening is 
 * placeholder = props.placeholder 
 * handelChange = props.handelChange
 */

export const SearchBox = ({placeholder, handelChange}) => (
    <input className='search' placeholder={placeholder} type="text" onChange={event => handelChange(event)}/>
)



/**
 * what is a funcntional component : 
 * it's a component that dose not have acess to the state because it dose not have access to the constructor which is a class method
 * and it dose have access to the life sicyl mehtods, becuase sometimes we only need to render some HTML with out changing the state
 * in other words a  functional component it's a component that gets some props and returns some HTML
 */