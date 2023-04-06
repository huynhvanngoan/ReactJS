import React from "react";
import { useState } from "react";

// rfc
export default function App() {
// dùng useState 
    const [sum, setSum] = useState(0)
    const [soA, setsoA] = useState(0);
    const [soB, setsoB] = useState(0);
    const handleClick = (soA, soB) => {

        setSum(soA + soB);
    };
    return (
        <>
            <div className="container">
            <div className="form-group">
                Số A: <input type="number" className="form-control" value={soA} onChange={e => setsoA(e.target.value)}/>
            </div>

            <div className="form-group">
                Số B: <input type="number" className="form-control" value={soB} onChange={e => setsoB(e.target.value)}/>
            </div>
            <div className="form-group"></div>
            <div className="form-group">
                <button
                className="btn btn-primary"
                onClick={() => handlClick(sum)}>Tính</button>
            </div>
            </div>
        </>
    );
}

