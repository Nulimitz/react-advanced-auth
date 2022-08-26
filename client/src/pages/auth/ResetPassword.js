import Layout from "../../components/Layout";

function ResetPassword() {
  return (
    <Layout fullscreen>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h3 className="mb-3 text-center">Reset Password</h3>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="New Password"
                />
                <label htmlFor="email">New Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                />
                <label htmlFor="email">Confirm Password</label>
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

export default ResetPassword;
