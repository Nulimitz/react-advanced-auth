import { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const { email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );
      setSuccess(data.data);
      setFormData({
        email: "",
      });
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
            <h3 className="mb-3 text-center">Forgot Password</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form
              className="p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={forgotPasswordHandler}
            >
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

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPassword;
