import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import slugify from "slugify";
import { removeProduct } from "../../tools/actions/ProductAction";

const Dashboard = () => {
  const data = useSelector((p) => p.product);
  const dispatch = useDispatch();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <p className="h1 my-5">Dashboard</p>
      <Link to={"/dashboard/add"} className="btn btn-dark">
        Add Product
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>
                {" "}
                <img width={70} src={item.img} alt={item.title} />{" "}
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Link
                  to={`/dashboard/edit/${slugify(item.title)}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(removeProduct(item.id));
                  }}
                  className="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Dashboard;
