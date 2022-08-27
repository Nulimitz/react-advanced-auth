import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout";

function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const { password, confirmpassword } = formData;

  const { resetToken } = useParams();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setFormData({
        password: "",
        confirmpassword: "",
      });
      setTimeout(() => {
        setError();
      }, 5000);
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${resetToken}`,
        {
          password,
        },
        config
      );
      setSuccess(data.data);
      setFormData({
        password: "",
        confirmpassword: "",
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
            <div className="card p-5">
              <div className="card-body">
                <h3 className="mb-3 text-center">Reset Password</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}

                <form onSubmit={resetPasswordHandler}>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="New Password"
                      value={password || ""}
                      onChange={onChange}
                    />
                    <label htmlFor="email">New Password</label>
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
                    <label htmlFor="email">Confirm Password</label>
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResetPassword;
