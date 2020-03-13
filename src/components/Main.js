import React from 'react';
import logo from '../logo.svg';
import './Main.css';
import fotofundo from "../fotofundo.jpg"
import perfilfoto from "../perfilfoto.jpg"
import fotopost from "../ganso.webp"
import curtir from "../coracao.png"
import comentar from "../coment.png"
import compartilhar from "../compartilhar.png"

function App() {
    return (
        <div className="container">
            <div className="menu">

                <div className="div1">
                    <img className="imagem" src={logo} alt="Logo" title="Logo"></img>

                </div>

                <div className="botao">
                    <button className="bot">Linha do Tempo</button>
                    <button className="bot">Criar Grupo</button>
                </div>
                <div className="tudo" alt="Perfil" title="Perfil">
                    <div className="foto">
                        <img className="perfilfoto" src={perfilfoto}></img>

                    </div>
                    <div className="textonome">
                        <h1>Carol Santana</h1>
                        <p>Imagine um mundo sem vio..</p>
                    </div>
                </div>
                <div className="postConteiner">
                    <div className="fotofundo">

                    </div>
                    <div className="postagens">
                        <div className="post" >
                            <h2>Olha só esse gansooooo meu amigo!!!</h2>
                            <img className="fotopost" src={fotopost}></img>
                            <img className="curtir" src={curtir}></img>
                            <img className="curtir" src={comentar}></img>
                            <img className="curtir" src={compartilhar}></img>

                            <p>Encontrei esse neném lá na lagoa hoje kkkk, meu deus quase tive um ataque ele é muito fofo migossss!!!</p>
                        </div>
                        <div className="post">
                            <h2>Olha só esse gansooooo meu amigo!!!</h2>
                            <img className="fotopost" src={fotopost}></img>
                            <img className="curtir" src={curtir}></img>
                            <img className="curtir" src={comentar}></img>
                            <img className="curtir" src={compartilhar}></img>
                            <p>Encontrei esse neném lá na lagoa hoje kkkk, meu deus quase tive um ataque ele é muito fofo migossss!!!</p>
                        </div>
                        <div className="post">
                            <h2>Olha só esse gansooooo meu amigo!!!</h2>
                            <img className="fotopost" src={fotopost}></img>
                            <img className="curtir" src={curtir}></img>
                            <img className="curtir" src={comentar}></img>
                            <img className="curtir" src={compartilhar}></img>
                            <p>Encontrei esse neném lá na lagoa hoje kkkk, meu deus quase tive um ataque ele é muito fofo migossss!!!</p>
                        </div>
                        <div className="post">
                            <h2>Olha só esse gansooooo meu amigo!!!</h2>
                            <img className="fotopost" src={fotopost}></img>
                            <img className="curtir" src={curtir}></img>
                            <img className="curtir" src={comentar}></img>
                            <img className="curtir" src={compartilhar}></img>
                            <p>Encontrei esse neném lá na lagoa hoje kkkk, meu deus quase tive um ataque ele é muito fofo migossss!!!</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>



    );
}

export default App;