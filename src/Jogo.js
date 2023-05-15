import { useState } from "react";
import palavras from "./palavras";

export default function Jogo(props) {
  const { palavra, underline, sortearPalavra, forca, vitoria, derrota } = props;

  return (
    <div className="game">
      <img data-test="game-image" src={forca} alt={forca}></img>
      <div className="direita">
        <button
          data-test="choose-word"
          onClick={sortearPalavra}
          className="startGame"
        >
          Escolher Palavra
        </button>
        <div className="palavraJogo">
          <p
            data-test="word"
            className={derrota ? "vermelha" : vitoria ? "verde" : ""}
          >
            {derrota ? palavra : underline}
          </p>
        </div>
      </div>
    </div>
  );
}
