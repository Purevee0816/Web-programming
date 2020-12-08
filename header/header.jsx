import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        <div id="header-container">
            <img className='header-my-logo' src='./components/header/chillin.jpg'/>
            <div className='header-phrase' >Just Chill&trade;</div>
            <div className='header-rectangle'></div>
        </div>

        return(
            <nav>
                <ul>
                    <li><a href="/getting-started.html">Getting Started</a></li>
                    <li><a href="p2.html">Page 2</a></li>
                    <li><a href="p4.html">Page 4</a></li>
                    <li><a href="p5.html">Page 5</a></li>
                </ul>
            </nav>
        )
    }
}
export default Header;