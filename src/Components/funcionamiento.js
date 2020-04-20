import React from 'react';


class Funcionamiento extends React.Component {
    constructor(props) {
        super(props);

        this.frases = [
            {
                frase: '“Hay amores tan bellos que justifican todas las locuras que hacen cometer”.',
                autor: 'Plutarco',
               
            },
            {
                frase: '“El amor se compone de una sola alma que habita en dos cuerpos”.',
                autor: 'Aristóteles',
             
            },
            {
                frase: '"Temer al amor es temer a la vida, y los que temen a la vida ya están medio muertos..."',
                autor: 'Marie Curie',
               
            },
            {
                frase: '“Estar solo no tiene nada que ver con cuantas personas hay alrededor”.',
                autor: 'Revolutionary Road, Richard Yates',
                
            },
            {
                frase: '“ El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación”.',
                autor: 'Arthur Conan Doyle',
               
            },
            {
                frase: '“Piensa mal y acertarás”.',
                autor: 'Nicolás Maquiavelo',
               
            },
        

        ];

        this.state = {
            quota: '',
        };

        this.selectRandomQuota = this.selectRandomQuota.bind(this);
    }


    componentDidMount() {
        const { randomColor } = this.props;
        randomColor();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.color !== this.props.color) {
            this.selectRandomQuota();
        }
    }

    selectRandomQuota() {
        const random = Math.round(Math.random() * this.frases.length - 1)
        this.setState({ quota: this.frases[random] });
    }


    render() {
        const { quota } = this.state;
        const { color } = this.props;
        return (

            <div style={{ color }}>
                <div>
                    {quota.frase}
                </div>
                <div>
                    {quota.autor}
                </div>
            </div>

        )
    }

}

export default Funcionamiento;