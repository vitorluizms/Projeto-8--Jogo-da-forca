export default function Letras(props) {
    
    const {letraClicada, letters} = props;

    return (
        <button onClick={() => letraClicada(letters)} className="letter">{letters.toUpperCase()}</button>
    )
}