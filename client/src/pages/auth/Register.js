import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState();

  const { username, email, password, confirmpassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Layout fullscreen>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h3 className="mb-3 text-center">User Registration</h3>

            {error && <div className="alert alert-danger">{error}</div>}

            <form
              className="p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={registerHandler}
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={onChange}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email || ""}
                  onChange={onChange}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password || ""}
                  onChange={onChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={confirmpassword || ""}
                  onChange={onChange}
                />
                <label htmlFor="password">Confirm Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Register
              </button>
            </form>
            <p className="mt-3">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
