import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Twitter from '../Components/img/twitter.png';
import Ld from '../Components/img/linkedin.png';
import Funcionamiento  from './funcionamiento';

class Quote extends React.Component {
    constructor(props) {
        super(props);

        this.colors = ['tomato', 'Teal', 'RoyalBlue', 'aqua', 'violet', 'Lime', 'Chartreuse', 'gray', 'purple', 'brown'];


        this.state = {
            color: '',
        };

        this.generateRandomcolor = this.generateRandomcolor.bind(this);
    }


    generateRandomcolor() {
        const random = Math.round(Math.random() * this.colors.length - 1)
        this.setState({ color: this.colors[random] })
    }

    render() {
        const { color } = this.state;
        return (
            <div style={{ background: color }}>
                <div className="container-fluid d-flex justify-content-center text-center align-item-center p-3">
                    <div className="row" id="contenedor" >
                        <div className="col-sm-8 align-items-center color-fondo p-2">
                            <div className="card bg-white text-info text-center color-fondo p-4">
                                <Funcionamiento color={color}  randomColor={this.generateRandomcolor} />
                                <div className="row">
                                    <div className="col d-flex bd-highlight mb-0 p-3 justify-content-center">
                                        <button type="button" className="btn btn-ligth"><a href="https://twitter.com/explore" target="_blank"></a><img className="icono mg-2 bg-white" src={Twitter} /></button>
                                        <button type="button" className="btn btn-ligth"><a href="https://www.linkedin.com/home" target="_blank"></a><img className="icono mg-2 bg-white" src={Ld} /></button>
                                        <button type="button" className="btn btn-dark ml-auto bd-highlight" style={{ background: color }}
                                            onClick={this.generateRandomcolor}
                                        >Nueva Cita</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Quote;