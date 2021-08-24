import React, {Component} from 'react';
import style from '../header/header.module.css'

class Header extends Component{
    render(){
        return(
            <header className={style.headerzinho}>
                <a>Drinks</a>
                <a>Sobre Nós</a>
                <a>Bons Drinks</a>
                <a>Nosso Time</a>
                <a>Contato</a>
            </header>
        )
    }
}

export default Header;