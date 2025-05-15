import './Rodape.css'

const Rodape = () =>{
    return(
        <footer>
            <section className='redeSociais'>
                <a href="https://www.instagram.com" target='_blank'>
                    <img src="/imagens/ig.png" alt="Instagram" />
                </a>
                <a href="https://x.com" target='_blank'>
                    <img src="/imagens/tw.png" alt="Twitter" />
                </a>
                <a href="https://www.facebook.com" target='_blank'>
                    <img src="/imagens/fb.png" alt="Facebook" />
                </a>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Organo" />
            </section>
            <section>
                <h4>
                    Desenvolvido por Pedro Giovane
                </h4>
            </section>
        </footer>
    )
}

export default Rodape