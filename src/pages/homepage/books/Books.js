import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../books/Books.scss'
function Books({data, listFav, id}){
    const[like, setLike] = useState(true)
//     function cutting(arg){
//     if(arg.length >= 27){
//         return arg.slice(0, 27)
//     } else {
//         return arg.title;
//     }
//    }
//    console.log(data)
// console.log(addFav)

function cuttingTitle(arg) {
    if( arg.length >= 30){
        return arg.slice(0, 27) + '...'
    }
    else{
        return arg
    }
}
    return(
        // {
            data?.map((book) => {
                return(
                    <div className="books-contant">
            <div className="wrapper-content">
            <div className="wrapper">
                <div className="bookPage">
                <img src={book.img} alt="" />
                </div>
                <h2>{cuttingTitle(book.title)}</h2>
                <p>{book.author}, {book.date}</p>
                <div className="rates">
                <span>{book.rate}/5</span>
                <div className="love">
                {
                    like ? 
                        <svg 
                        className='notPaint'
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        // onClick={() =>setLike(false)}
                        onClick={() => listFav(book.id)}
                        >
                        <path d="M7.73373 14.683L7.72883 14.6804L7.71184 14.6712C7.69737 14.6633 7.67668 14.6519 7.65018 14.6372C7.59719 14.6076 7.52093 14.5643 7.42472 14.5077C7.23237 14.3945 6.95988 14.2279 6.63391 14.0112C5.98306 13.5786 5.11341 12.9426 4.24145 12.1297C2.51586 10.5212 0.6875 8.13133 0.6875 5.1875C0.6875 2.99146 2.5352 1.25 4.76562 1.25C6.07729 1.25 7.25174 1.84932 8 2.7887C8.74826 1.84932 9.92271 1.25 11.2344 1.25C13.4648 1.25 15.3125 2.99146 15.3125 5.1875C15.3125 8.13133 13.4841 10.5212 11.7586 12.1297C10.8866 12.9426 10.0169 13.5786 9.36609 14.0112C9.04012 14.2279 8.76763 14.3945 8.57528 14.5077C8.47907 14.5643 8.40281 14.6076 8.34982 14.6372C8.32332 14.6519 8.30263 14.6633 8.28816 14.6712L8.27117 14.6804L8.26627 14.683L8.2642 14.6841C8.09923 14.7717 7.90077 14.7717 7.7358 14.6841L7.73373 14.683Z" stroke="#2B3844" strokeLinejoin="round"/>
                        </svg>
                        :
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.80731 13.9307L7.80223 13.928L7.78461 13.9185C7.76961 13.9103 7.74815 13.8985 7.72067 13.8832C7.66571 13.8525 7.58662 13.8076 7.48685 13.7489C7.28738 13.6316 7.00479 13.4588 6.66674 13.2341C5.99177 12.7854 5.0899 12.1258 4.18563 11.2829C2.3961 9.61468 0.5 7.1363 0.5 4.08339C0.5 1.80598 2.41616 0 4.72923 0C6.08949 0 7.30746 0.621522 8.08345 1.59571C8.85943 0.621522 10.0774 0 11.4377 0C13.7507 0 15.6669 1.80598 15.6669 4.08339C15.6669 7.1363 13.7708 9.61468 11.9813 11.2829C11.077 12.1258 10.1751 12.7854 9.50015 13.2341C9.16211 13.4588 8.87952 13.6316 8.68004 13.7489C8.58027 13.8076 8.50118 13.8525 8.44623 13.8832C8.41875 13.8985 8.39729 13.9103 8.38228 13.9185L8.36467 13.928L8.35959 13.9307L8.35744 13.9319C8.18636 14.0227 7.98054 14.0227 7.80946 13.9319L7.80731 13.9307Z" fill="#F34040"/>
                        </svg>
                     
                }
                
                </div>
                </div>
                <div className="buttons">
                    <Link to={`/home/info/${book.id}`} className='info'>Info</Link>
                    <button className='read'>Read</button>
                </div>
            </div>
            </div>
        </div>
                )
            })
        // }
    )
}
export default Books;
// {
//     data?.map((book) => {
//         return <Books
//         key={book.id}
//         img = {book.img}
//         title = {book.title}
//         author = {book.author}
//         date = {book.createdAt}
//         rate = {book.rate}
//         like = {book.like}
//         id = {book.id}
//         />
        
        
//     })
// }