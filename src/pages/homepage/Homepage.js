import { useState,useEffect } from "react";
import Books from "./books/Books";
import Sidebar from "./sidebar/Sidebar";
import getData from "../../resource/BookData";
import '../homepage/Homepage.scss'
function Homepage() {
    const [data, setData] = useState(null);
    let [temp, setTemp] = useState('')
    useEffect(() => {
      getData('https://owabooks.vercel.app/db.json')
      .then(data => {
        setData(data)
      })
    }, [])
  
    
  
  
    function searchItem(temp, books) {
      if (temp) {
        return books.filter(item => {
          return item.title.toLowerCase().includes(temp.toLowerCase())
        })
      } else {
        return books
      }
    }
  
    function onChangeSearch(str) {
      return setTemp(str)
    }
  
    const listFav = (id) => {
      const like = data.map((item) => {
        if(id === item.id){
          item = {...item, like: !item.like}
        }
        return item
      })
      setData(like)
    }
    let newData = searchItem(temp, data)
    return(
        <>
            <div className="container-hp">
                <Sidebar data={data}/>
                <div className="homepage-main-contant">
                    <div className="searching">
                        <input 
                        type="text" 
                        placeholder="search"
                        onChange={(e) => {onChangeSearch(e.target.value)}} value={temp}
                         />
                        
                        <div className="finding">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.01999 11.5C3.17393 12.6556 4.71063 13.3493 6.34057 13.4504C7.97051 13.5516 9.58119 13.0532 10.8692 12.0492L15.3008 16.4808C15.458 16.6326 15.6685 16.7166 15.887 16.7147C16.1055 16.7128 16.3145 16.6252 16.469 16.4707C16.6235 16.3162 16.7112 16.1072 16.7131 15.8887C16.7149 15.6702 16.631 15.4597 16.4792 15.3025L12.0475 10.8708C13.0961 9.52513 13.5918 7.83012 13.4336 6.13147C13.2755 4.43282 12.4753 2.85849 11.1962 1.72955C9.91719 0.600606 8.25568 0.00208938 6.55054 0.0560608C4.8454 0.110032 3.22506 0.812426 2.01999 2.02C1.39732 2.64235 0.903372 3.38129 0.566369 4.19459C0.229365 5.0079 0.0559082 5.87963 0.0559082 6.76C0.0559082 7.64036 0.229365 8.51209 0.566369 9.3254C0.903372 10.1387 1.39732 10.8776 2.01999 11.5ZM3.19832 3.2C4.02213 2.3762 5.10609 1.86353 6.26551 1.74933C7.42493 1.63512 8.58808 1.92645 9.55679 2.57368C10.5255 3.22091 11.2398 4.18399 11.5781 5.29884C11.9163 6.41369 11.8576 7.61133 11.4118 8.68771C10.966 9.76409 10.1608 10.6526 9.13343 11.2019C8.10601 11.7512 6.91993 11.9272 5.77726 11.7001C4.63458 11.4729 3.60602 10.8566 2.86682 9.95611C2.12761 9.05563 1.7235 7.92669 1.72332 6.76166C1.72103 6.09964 1.85024 5.44376 2.10344 4.83206C2.35665 4.22037 2.7288 3.66505 3.19832 3.19833V3.2Z" fill="#41B64D"/>
                        </svg>
                        </div>
                    </div>
                    <div className="main-books">
                    <div className="booksData">
                    <Books data ={newData} listFav={listFav}/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage;
