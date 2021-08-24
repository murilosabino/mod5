import React, {Component} from 'react';
import style from '../formulario/formulario.module.css';
import imgContato from '../imgs/contact-pic.jpg';
import Button from '../button/Button';

class Formulario extends Component{
    render(){

        return(
            <section className={style.meio}>
                {/*<div className={style.div1}>1</div>
                <div className={style.div2}>2</div>
                <div className={style.div3}>3</div>
                <div className={style.div4}>4</div>
                <div className={style.div5}>5</div>
                <div className={style.div6}>6</div>
                <div className={style.div7}>7</div>
                <div className={style.div8}>8</div>
                <div className={style.div9}>9</div>
                <div className={style.div10}>10</div>*/}
                <img src={imgContato}></img>
                <Button width='200px' onClick={() => {console.log('key up')}}>Teste</Button>
                <Button>Murilo</Button>
            </section>
        )
    }
}

export default Formulario;