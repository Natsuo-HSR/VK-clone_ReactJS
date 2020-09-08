import React from 'react'
import './FriendsList.css'
import FriendCard from './FriendCard'

function FriendsList() {
    return (
        <div className='friendsList'>
            <FriendCard 
                name='Петя Петров'
                status='Санкт-Петербург'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM44430OV4S8zI71m_HHhsZRILQ73p4NjH7A&usqp=CAU'
            />
            <FriendCard 
                name='Артур Артуров'
                status='Tokyo'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShiE823pdhQFCic6dcVzY4ybNCt8-R6Ups8g&usqp=CAU'
            />
            <FriendCard 
                name='Даша Дашева'
                status='New York'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQihmxzodvqV6jejd9rmqmL51znG9hyckiDjA&usqp=CAU'
            />
            <FriendCard 
                name='Алексей Алексеев'
                status='Томск'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBPll_3fks98AQxmYFyFMX-E9v2VWeWb5naw&usqp=CAU'
            />
            <FriendCard 
                name='Александр Александров'
                status='Омск'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4lwSv8q3WAWWrRriY-tcjBbFiEbSonR05cg&usqp=CAU'
            />
            <FriendCard 
                name='Игорь Игорев'
                status='Москва'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQORu-KahJF3QKHjeW6wteiUnpftkY8TK3SgQ&usqp=CAU'
            />
            <FriendCard 
                name='Оля Котикова'
                status='Новгород'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCKVpGuPoqsg54Mf4SbsO5wSpCPP0jrdp8RA&usqp=CAU'
            />
            <FriendCard 
                name='Анна Спиридонова'
                status='Киев'  
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWhwez0jYEkmTKgyB5-PHwroBT9ER7Q4wWnA&usqp=CAU'
            />
        </div>
    )
}

export default FriendsList
