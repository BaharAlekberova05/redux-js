import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";

const Products = () => {
  const data = useSelector((p) => p.product);
  return (
    <Container>
      <p className="h1 text-center my-5">Products List</p>
      <Row>
        {data.map((item, i) => (
          <SingleProduct key={i} allitems={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
