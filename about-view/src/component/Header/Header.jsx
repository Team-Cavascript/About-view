import React from 'react'
import './Header.css'

const Header = ({onLogin, userName}) => {
    return (
        <header className="wrap-header">
            <div className="logo">
                ABOUT
            </div> 
            {onLogin ? 
                 <div className="wrap-signup">
                    <img src={process.env.PUBLIC_URL + './favicon.ico'} alt=""  className="user-img"/>
                    <div className="margin-div-6"></div>
                    <h3>{userName}</h3>
                 </div>
                 :
                <div className="wrap-signup">
                    <h3>회원가입</h3>
                    <div className="margin-div-18"></div>
                    <button className="button-style">로그인</button>
                </div>
       
            }
            
        </header>
    )
}

export default Header
