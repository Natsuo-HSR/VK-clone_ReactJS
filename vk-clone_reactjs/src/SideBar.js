import React from 'react'
import './SideBar.css'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';

function SideBar() {
    return (
        <div className='sideBar'>
            <ul className='sideBar__container'>
                <li className='sideBar__row'>
                    <HomeSharpIcon className='sideBar__icon' />
                    <div className='sideBar__label'>Моя страница</div>
                </li>
                <li className='sideBar__row'>
                    <LibraryBooksSharpIcon className='sideBar__icon' />
                    <div className='sideBar__label'>Новости</div>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
