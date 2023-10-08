import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
// import {SearchOutlined} from '@ant-design/icons'

const Search = () => {


  return (
    <form className='form-inline my-2 my-lg-0' >
        {/* <input type="search" value={text} className='form-control mr-sm-2' onChange={handleChange} /> */}
        <input
              type="search"
              value={''}
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-blue-700
                bg-white bg-clip-padding
                border border-solid border-blue-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-blue-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleSearch"
              placeholder="Search Products"
            />
        {/* <SearchOutlined onClick={handleSubmit} style={{cursor: 'pointer'}} /> */}
    </form>
  )
}

export default Search