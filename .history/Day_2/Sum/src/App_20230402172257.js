import React from "react";
import { useState } from "react";

// rfc
export default function App() {
// dùng useState 
  const [sum, setSum] = useState
    return (
        <>
            <div className="container">
                <div className="form-group">
                    Số A: <input type="number" className="form-control" />
                </div>

                <div className="form-group">
                    Số B: <input type="number" className="form-control" />
                </div>
                <div className="form-group">



                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick="">Tính</button>
                </div>
            </div>
        </>
    );
}

