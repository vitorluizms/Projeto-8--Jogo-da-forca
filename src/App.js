import Jogo from "./Jogo";
import React, { useState } from "react";
import Letras from "./Letras";
import palavras from "./palavras";

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    const [palavra, setPalavra] = useState('')
    const [palavraUnderline, setUnderline] = useState('')
    const [arrayLetras, setLetras] = useState([]);

    function sortearPalavra(){
        let palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
        setPalavra(palavraSorteada)
        let underline = '';

        for (let i=0; i<palavraSorteada.length; i++){
            underline += '_'
        }
        setUnderline(underline);
    }

    function letraClicada(letra) {
        const arrayUnderline = [...palavraUnderline]
        arrayUnderline[2] = letra;
        setLetras(arrayUnderline)
    }
    console.log(arrayLetras)
    return (    
        <React.Fragment>
            <Jogo palavra={palavra} underline={palavraUnderline} sortearPalavra={sortearPalavra}/>
            <div className="containerLetters">
                {alfabeto.map(letters => <Letras letters={letters} letraClicada={letraClicada}/>)}
            </div>

        </React.Fragment>
    );
}