import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import FriendsList from './FriendsList'
import logo from './logo/vk_logo.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

function Header() {
    const [search, setSearch] = useState(false)

    function activateForm() {
        if (!search) {
        document.querySelector('.header__input').classList.add('header__input_active')
        } else {
            document.querySelector('.header__input').classList.remove('header__input_active')
        }
    }

    return (
        <div className='header'>
        <div className='header__container'>
                <Link to='/'>
                    <img 
                    className='header__icon'
                    src={logo}
                    alt='no pic'    
                    />
                </Link>


                <div className='header__search'>
                    <div className='header__input'>
                        <SearchIcon />
                        <input type='text' defaultValue='Поиск'
                        onClick={() => {
                            setSearch(!search)
                            activateForm()
                        }}/>
                    </div>
                    {search && <FriendsList />}
                </div>
                <div className="header__icons">
                        <NotificationsIcon className='header__notification' />
                        <LibraryMusicIcon className='header__music' />
                        <PlayArrowSharpIcon className='header__play'/>
                    </div>
                    

                <div className='header__profile'>
                    <div className='profile__name'>
                        Игорь
                    </div>
                    <AccountCircleSharpIcon className='profile__icon' />
                    <ExpandMoreSharpIcon className='profile__expand' />
                </div>
            </div>
        </div>
    )
}

export default Header
