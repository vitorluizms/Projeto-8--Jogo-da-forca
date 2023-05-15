export default function Letras(props) {
  const { letraClicada, letters, fim, status, clicadas } = props;
  return (
    <button
      data-test="letter"
      onClick={() => letraClicada(letters)}
      disabled={fim || !status || clicadas.find((letra) => letters === letra)}
      className={
        status && !clicadas.find((letra) => letters === letra)
          ? fim
            ? "desabilitado"
            : ""
          : "desabilitado"
      }
    >
      {letters.toUpperCase()}
    </button>
  );
}
