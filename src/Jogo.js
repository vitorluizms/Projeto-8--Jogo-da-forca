import forca0 from "./assets/forca0.png";

export default function Jogo() {
    return (
        <div className="game">
            <img src={forca0} alt="forca0"></img>
            <button className="startGame">Escolher Palavra</button>
        </div>
    )
}