import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import stiker from '../../../images/like-stiker.svg'
import likedBook from '../../../images/book-1.png'
import './Sidebar.scss'
function Sidebar({data}){
    
    // console.log(data);
    return(
        <div className="sidebar">
            <div className="sidebar-cont">
                <h1>Bookmarks</h1>
                {data?.map((item) => {
                    return item.like ? (
                        <div className="box-first">
                        <div className="book-face">
                            <img src={item.img} alt="book" />
                        </div>
                        <div className="box-first-aside">
                            <p>{item.title}... </p>
                            <span>{item.author}</span>
                            <img src={stiker} alt="love" />
                        </div>
                    </div>
                    ) : null
                })}
            </div>               
        </div>
    )
}
export default Sidebar;