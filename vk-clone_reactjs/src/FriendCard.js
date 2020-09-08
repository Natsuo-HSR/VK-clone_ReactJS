import React from 'react'
import './FriendCard.css'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

function FriendCard({ name, status, src }) {
    return (
        <div  className='friendCard'>
            {/* <AccountCircleSharpIcon className='icon' /> */}
            <img className='icon' src={src} alt='npp' />
            <div className='friendCard__description'>
                <div className='name'>{name}</div>
                <div className='status'>{status}</div>
            </div>
        </div>
    )
}

export default FriendCard
