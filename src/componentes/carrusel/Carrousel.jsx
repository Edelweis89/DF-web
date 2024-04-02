
import "./carrousel.css";




const Carrousel = () => {
  return (
    <>

    <section className="servicios">
    <section className="inicioFood">

      <h1 className="titPresentacion">Preparamos tu pedido Personalizado para el evento que tengas</h1>

      <div className="card">
        <img className="imgFood" src="./img/food1.jpg" alt="food" />
        <div className="card-body">
          <h5 className="card-title">Eventos</h5>
          <p className="p1">
            Pedidos Personalizados: Casamientos, Fiestas, eventos ...
            Personaliza tu pedido como mas te guste.
          </p>
        </div>
      </div>

      <div className="card">
        <img className="imgFood" src="./img/food2.jpg" alt="food" />
        <div className="card-body">
          <h5 className="card-title">Cumpleaños</h5>
          <p className="p1">
            Regala la mas dulce de las sorpresas y disfruta del momento con
            quien mas quieras.
          </p>
        </div>
      </div>

      <div className="card">
        <img className="imgFood" src="./img/food3.jpg" alt="food" />
        <div className="card-body">
          <h5 className="card-title">Para el Mate</h5>
          <p className="p1">Regalos Perfectos a medida</p>
        </div>
      </div>
    </section>

    
<section className="textInicio">
        

          <h2>Hace tu pedido y paga de la forma que prefieras.</h2>
          <div className="contenido1">
            <p>
              Paga como quieras! Aceptamos MercadoPago, Tarjetas de Credito y
              Efectivo.{" "}
              <img
                className="imgMp"
                src="../mercadopago.png"
                alt="mercadopago"
              />
            </p>
          </div>
          <div className="contenido2">
            <p>
              Descuento por pago en efectivo! Todos los dias 10% de descuento
              pagando en efectivo o transferencia bancaria.
            </p>
          </div>
          <div className="contenido3">
            <p>
              <img
                className="imgWts"
                src="../IcBaselineWhatsapp.png"
                alt="Whatsapp"
              />{" "}
              Consultanos el Stock y los tiempos de preparacion para tus pedidos
            </p>
          </div>
        
        
      </section>
      
      <div className="slider-container">  

    <h1 className='resenaR'>Clientes Enamorados</h1>
  <img
    className="slider-item"
    src="/img/118shots_so.png"
  />
  <img
    className="slider-item"
    src="/img/155shots_so.png"
  />
  <img
    className="slider-item"
    src="/img/442shots_so.png"
  />
  <img
    className="slider-item"
    src="/img/924shots_so.png"
  />
</div>  

      </section>
      </>
  );
};

export default Carrousel;
