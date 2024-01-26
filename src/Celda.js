function Celda({ valor = "",onCeldaClick }) {


  return (
    <div>
      <button className="col rounded-3 celda"
        onClick={onCeldaClick}
        >
        {valor === " "?"\u00A0":valor}
  
  </button>
    </div>
  )
}


export default Celda;
