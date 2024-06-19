import { useState } from "react"
import { CartFill, DashCircleFill, PlusSquareFill } from "react-bootstrap-icons"
import Swal from 'sweetalert2'


const Detalle = ({ item, carrito, setCarrito }) => {

    const [cantidad, setCantidad] = useState(5)

    function disminuirCant(){
        if(cantidad>0){
            setCantidad((cantidad)=>cantidad-1)
        }   
    }
    function sumarCant(){
      if (cantidad < item.stock) {
        setCantidad((cantidad)=>cantidad+1)
      
      }
    }
    function mostrarMensage(titulo,texto){
      Swal.fire({
          title: titulo,
          text: texto,
          icon: "success"
        });
    }
    const agregarCarrito = () =>{
      const prod =item;
      prod["cantidad"]=cantidad;
      setCarrito([...carrito,prod])
      console.log(carrito)
      const productoExistenteIndex = carrito.findIndex((item) => item.id === prod.id);
      if (productoExistenteIndex !== -1) {
        // Si el producto ya existe, reemplazarlo en el carrito
        const carritoActualizado = [...carrito];
        carritoActualizado[productoExistenteIndex] = prod;
        setCarrito(carritoActualizado);
        mostrarMensage("¡Actualizado!","Producto actualizado en el carrito");
      } else {
        // Si el producto no existe, agregarlo al carrito
        setCarrito([...carrito, prod]);
        mostrarMensage("¡Agregado!","Producto agregado al carrito");
      }
    }
    return (
        <>
            <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={item.thumbnail} alt={item.title} className="img-fluid img-thumbnail" />
                                </div>
                                <div className='col-md-8'>
                                    <h3>{item.title}</h3>

                                    <p className="lead">
                                        <b>Marca: </b>{item.brand}
                                        <br /><b>Categoria: </b>{item.category}
                                        <br /><b>Stock: </b>{item.stock}
                                        <br /><b>Clasificación: </b><span className="badge bg-info">{item.rating}</span>
                                    </p>
                                    <p className='lead small'><b>Descripción: </b>{item.description}</p>

                                    <h3 className="text-danger"><b>Precio: </b>{item.price.toFixed(0).toLocaleString()}$</h3>

                                    <h5>Comprar</h5>
                                    <div className="d-flex">
                                        <h5 className='text-danger pt-1'><b>Cantidad : </b> </h5>
                                        <div className="d-flex justify-content-center mx-3 border-3 ">
                                            <p className='p-1' type="button">
                                                <DashCircleFill color="red" size={25} onClick={disminuirCant} />
                                            </p>
                                            <h4 className='p-1'>{cantidad}</h4>
                                            <p className='p-1' type="button" >
                                                <PlusSquareFill color="green" size={25}  onClick={sumarCant}/>
                                            </p>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-danger me-2'onClick={agregarCarrito}   > <CartFill size={30}  /> Agregar al Carrito</button>
                                    <button className='btn btn-outline-info me-2' >  <CartFill size={30} /> Ver Carrito</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalle