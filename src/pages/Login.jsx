import { useRef } from "react";
import { Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const userAuth = {
  email: "baharalekberova2005@gmail.com",
  password: "2005",
};

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passRef.current.value) {
      Swal.fire({
        title: "Please, fill the inputs!",
        icon: "warning",
      });
    } else {
      if (
        emailRef.current.value === userAuth.email &&
        passRef.current.value === userAuth.password
      ) {
        navigate("/dashboard");
      } else {
        Swal.fire({
          title: "Email or password is wrong!",
          icon: "error",
        });
      }
    }
  };
  return (
    <Container>
      <p className="h1 text-center my-5">Login Page</p>
      <div className="d-flex align-items-center justify-content-center">
        <Col sm={12} md={5}>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input ref={emailRef} type="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input ref={passRef} type="password" className="form-control" />
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

export default Login;
