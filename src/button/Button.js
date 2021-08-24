import React, {Component} from 'react';
import style from './button.module.css';

class Button extends React.Component{
    render(){

        return(
            <button onClick={this.props.onClick} className={style.botao} style={{width: this.props.width}}> {this.props.children} </button>
        )
    }
}

export default Button;