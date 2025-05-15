import Colaborador from '../Colaboradores/Colaborador';
import './Time.css'

const Time = (props) => {

    const styleIcon = {borderColor: props.corIcon};
    const styleBackground = { backgroundColor:props.corFundo };

    return(
        (props.colaboradores.length> 0) ? <section className='time' style={styleBackground}> 
            <h3 style={styleIcon}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador 
                    key={colaborador.nome}
                    corDeFundo={props.corIcon}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
            />)}
            </div>
        </section>
        :''
    )
}

export default Time