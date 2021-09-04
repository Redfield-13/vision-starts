import React from 'react'
import '../styles/navbar.css'

function navbar() {
    
    return (
        
        <div className='nav' id='nav'>
        
        
            <ul className='first-ul'>
                <li className='logo'><a><img width='235px' height='40.5px' src="//images.squarespace-cdn.com/content/v1/54e237d3e4b00d4519b43bc7/1425428072624-H091XRRH403H8L9SH086/logo-vision-starts-digital-transparent-white.png?format=1500w"/></a></li>
                
                
                
                <li className='contact'><a href="">CONTACT US</a></li>
               
                <li><a href="">HOW WE DO IT</a></li>
                <li><a href="">WHAT WE DO</a></li>
                <li><a href="">WHO WE ARE</a></li>
                
                
            </ul>
            <ul className='nd-ul'>
                <li className='nd-logo'><img width='235px' height='40.5px' src='//images.squarespace-cdn.com/content/v1/54e237d3e4b00d4519b43bc7/1425428072624-H091XRRH403H8L9SH086/logo-vision-starts-digital-transparent-white.png?format=1500w'/></li>
                <li><img src="https://img.icons8.com/material-sharp/50/000000/menu--v3.png"/></li>
            </ul>
        </div>
    )
    // window.onscroll = function(){
    //     myFunction();
    // }
    // var nav = document.getElementById('nav')
    // var sticky = nav.offsetTop;
    // function  myFunction(){
    //     if (window.pageYOffset >=sticky) {
    //         nav.classList.add('sticky')
            
    //     }
    //     else{
    //         nav.classList.remove('sticky')
    //     }
    // }
}

export default navbar
