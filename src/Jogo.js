import { useState } from "react";
import palavras from "./palavras";

export default function Jogo(props) {
    
    const {palavra, underline, sortearPalavra, forca} = props
    console.log(forca)

    // let palavraUnderline = underline.split('')
    // console.log(palavraUnderline)

    return (
        <div className="game">
            <img src={forca} alt={forca}></img>
            <div className="direita">
                <button onClick={sortearPalavra} className="startGame">Escolher Palavra</button>
                <div className="palavraJogo">
                    <p>{underline}</p>
                </div>
            </div>
        </div>
    )
}
