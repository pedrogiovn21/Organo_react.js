import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholders = `${props.placeholder}...`

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label> 
                {props.label} 
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder= {placeholders}/>
        </div>
    )
};

export default CampoTexto