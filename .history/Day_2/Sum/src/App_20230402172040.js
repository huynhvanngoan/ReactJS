// rfc
export default function App() {
  return (
    <>
      <div className="container">
        <div className="form-group">
          Số A: <input type="number" className="form-control" />
        </div>

        <div className="form-group">
          Số B: <input type="number" className="form-control" />
        </div>
        <div className="form-group"></div>
        <div className="form-group">
          <button className="btn btn-primary">Tính</button>
        </div>
      </div>
    </>
  );
}
