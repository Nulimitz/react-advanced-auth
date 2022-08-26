import Layout from "../components/Layout";

function Error() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center text-danger">Error</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Error;
