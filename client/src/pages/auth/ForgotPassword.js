import Layout from "../../components/Layout";

function ForgotPassword() {
  return (
    <Layout fullscreen>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="mb-3 text-center">Forgot Password</h3>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <label for="email">Email address</label>
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

export default ForgotPassword;
