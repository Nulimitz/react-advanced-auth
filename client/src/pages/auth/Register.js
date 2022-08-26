import Layout from "../../components/Layout";

function Register() {
  return (
    <Layout fullscreen>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h3 className="mb-3 text-center">User Registration</h3>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                />
                <label for="username">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <label for="email">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label for="password">Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
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
