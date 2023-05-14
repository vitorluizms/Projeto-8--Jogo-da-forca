import { useState } from "react";
import forca0 from "./assets/forca0.png";
import palavras from "./palavras";

export default function Jogo(props) {
    
    const {palavra, underline, sortearPalavra} = props

    // let palavraUnderline = underline.split('')
    // console.log(palavraUnderline)

    return (
        <div className="game">
            <img src={forca0} alt="forca0"></img>
            <div className="direita">
                <button onClick={sortearPalavra} className="startGame">Escolher Palavra</button>
                <div className="palavraJogo">
                    <p>{underline}</p>
                </div>
            </div>
        </div>
    )
}
