import React from 'react'
import { BiSearch } from "react-icons/bi"
import './search.scss'

const SearchBox = ({ type, style }) => {
    return (
        <div className='searchContainer' style={style}>
            <BiSearch />
            <input type={type} placeholder='Search' />
        </div>
    )
}

export default SearchBox