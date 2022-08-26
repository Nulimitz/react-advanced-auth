import Layout from "../../components/Layout";

function ResetPassword() {
  return (
    <Layout fullscreen>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="mb-3 text-center">Reset Password</h3>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="New Password"
                />
                <label for="email">New Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                />
                <label for="email">Confirm Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
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
