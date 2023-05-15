import Jogo from "./Jogo";
import React, { useState } from "react";
import Letras from "./Letras";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

let acertos = 0;
let erros = 0;

export default function App() {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [palavra, setPalavra] = useState("");
  const [palavraUnderline, setUnderline] = useState("");
  const [arrayLetras, setLetras] = useState([]);
  const [fim, setFim] = useState(false);
  const [vitoria, setVitoria] = useState(false);
  const [derrota, setDerrota] = useState(false);
  const [imageForca, setForca] = useState(forca[erros]);
  const [status, setStatus] = useState(false)
  console.log(palavra);

  function sortearPalavra() {
    setDerrota(false);
    setFim(false);
    setVitoria(false);
    setStatus(true)
    erros = 0;
    acertos = 0;
    let palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraSorteada);
    let underline = "";

    for (let i = 0; i < palavraSorteada.length; i++) {
      underline += "_";
    }
    setUnderline(underline);
  }
  function letraClicada(letra) {
    const arrayUnderline = [...palavraUnderline];
    const clicada = [...arrayLetras, letra];
    setLetras(clicada);
    if (palavra.includes(letra)) {
      for (let i = 0; i < palavraUnderline.length; i++) {
        if (palavra[i].includes(letra)) {
          arrayUnderline[i] = letra;
          acertos++;
        }
      }
      if (arrayUnderline.indexOf("_") === -1) {
        setVitoria(true);
        setFim(true);
      }
      setUnderline(arrayUnderline);
    } else {
      if (erros < 6) {
        erros++;
      }
      setForca(forca[erros]);
      if (erros >= 6) {
        setDerrota(true);
        setFim(true);
      }
    }
  }


  return (
    <React.Fragment>
      <Jogo
        palavra={palavra}
        underline={palavraUnderline}
        sortearPalavra={sortearPalavra}
        forca={imageForca}
      />
      <div className="containerLetters">
        {alfabeto.map((letters) => (
          <Letras
            letters={letters}
            letraClicada={letraClicada}
            fim={fim}
            status={status}
            clicadas={arrayLetras}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
