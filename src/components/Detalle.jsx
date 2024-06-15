const Detalle = ({ item }) => {
  return (
    <div
      className="modal fade"
      id={item.id}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-theme="dark"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <ModalHeader item={item} />
          <ModalBody item={item} />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

const ModalHeader = ({ item }) => {
  return (
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">
        {item.title}
      </h1>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>
  );
};

const ModalBody = ({ item }) => {
  return (
    <div className="modal-body">
      <div className="row py-2">
        <div className="col-md-4">
          <img
            src={item.thumbnail}
            className="card-img-top img-thumbnail"
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="col-md-8">
          <ProductDetails item={item} />
        </div>
      </div>
    </div>
  );
};

const ProductDetails = ({ item }) => {
  return (
    <>
      <h3>{item.category}</h3>
      <p>
        Marca: <span className="fw-light">{item.brand}</span>
      </p>
      <p>
        Stock: <span className="badge bg-info">{item.stock}</span>
      </p>
      <p>
        Garantia: <span className="fw-light">{item.warrantyInformation}</span>
      </p>
      <p>
        SKU: <span className="fw-light">{item.sku}</span>
      </p>
      <p>
        Rating: <span className="bg-success">{item.rating}</span>
      </p>
      <ul>
        Opiniones
        {item.reviews.map((rev) => (
          <li key={rev.id}>{rev.comment}</li>
        ))}
      </ul>
      <p className="lead fw-bold">
        Descripcion: <span className="fw-light">{item.description}</span>
      </p>
      <h3 className="text-danger">
        Precio: <span className="fw-bold">{item.price}$</span>
      </h3>
    </>
  );
};

const ModalFooter = () => {
  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Cerrar
      </button>
    </div>
  );
};

export default Detalle;