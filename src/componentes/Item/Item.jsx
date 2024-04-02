import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img className="image" src={producto.imagen} alt={producto.nombre} />

      <p className="titulo"> {producto.nombre} </p>
      <p className="descp"> {producto.descripcion} </p>
      <a href="" className="link">
        {" "}
        <img
          className="imgWts"
          src="../IcBaselineWhatsapp.png"
          alt="Whatsapp"
        />
        Consultar
      </a>
    </div>
  );
};
export default Item;
