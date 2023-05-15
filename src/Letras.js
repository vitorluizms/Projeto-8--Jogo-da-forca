export default function Letras(props) {
    
    const {letraClicada, letters, fim, status, clicadas} = props;

    return (
        <button onClick={() => letraClicada(letters)} disabled={fim || !status || clicadas.find(letra => letters === letra )} className="letter">{letters.toUpperCase()}</button>
    )
}