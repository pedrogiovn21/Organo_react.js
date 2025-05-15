import { useState } from 'react'
import './App.css'
import Banner from './componentes/Banner/Banner.jsx'
import Formulario from './componentes/Formulario/Formulario.jsx'
import Time from './componentes/Time/Time.jsx'
import Rodape from './componentes/Rodape/Rodape.jsx'


const App = () => {

  const timesPersonalizacao = [
    {
      nome:'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Data-science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:'UI e UX',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className='App'>
      <Banner />
      <Formulario 
        times={timesPersonalizacao.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />
      {/*LI de times*/}
      {timesPersonalizacao.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corIcon={time.corPrimaria} 
        corFundo={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </div>

  )
}

export default App
