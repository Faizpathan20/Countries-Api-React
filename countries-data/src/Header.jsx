import { useState } from "react";

function Header() {

  
  const [isdark,setIsdark]=useState(localStorage.getItem('isDarkmode'))

  if(isdark){
                document.body.classList.add('dark')

  }
  else{
                document.body.classList.remove('dark')

  }
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme" onClick={()=>{
            setIsdark(!isdark);
            localStorage.setItem('isDarkmode',!isdark)
          }}>
            <i className={`fa-regular fa-${isdark?'sun':'moon'}`}></i>&nbsp;&nbsp;{isdark?'Light':'Dark'} Mode
          </p>
        </div>
      </header>
    </>
  );
}
export default Header;
