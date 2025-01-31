import { Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useRef } from "react";

import { addProduct } from "../../tools/actions/ProductAction";
const Form = () => {
  const imgRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        img: imgRef.current.value,
        title: titleRef.current.value,
        price: priceRef.current.value,
        desc: descRef.current.value,
      })
    );
  };
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center">
        <Col sm={12} md={5}>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label">IMG url</label>
              <input ref={imgRef} type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label ref={titleRef} className="form-label">
                Title
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input ref={priceRef} type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Describtion</label>
              <input ref={descRef} type="text" className="form-control" />
            </div>

            <button type="submit" className="btn btn-dark">
              Add
            </button>
          </form>
        </Col>
      </div>
    </Container>
  );
};

export default Form;
