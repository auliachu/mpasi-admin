import React from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img className='plus-sign' src={assets.plus_sign} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img className='list-sign' src={assets.list_sign} alt="" />
                <p>List Foods</p>
            </NavLink>
        </div>
      
    </div>
  )
}


export default Sidebar
