import React, {Component} from 'react';
import style from '../footer/footer.module.css';

class Footer extends Component{
    render(){

        return(
            <footer className={style.footerzinho}>
                <p>
                    Resilia 2021 - Alguns direitos reservados 
                </p>
            </footer>
        )
    }
}

export default Footer;