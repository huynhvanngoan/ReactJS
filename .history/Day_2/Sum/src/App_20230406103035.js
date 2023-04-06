import React from "react";
import { useState } from "react";

// rfc
export default function App() {
    // dùng useState 
    const [sum, setSum] = useState(0)
    const [soA, setsoA] = useState(0);
    const [soB, setsoB] = useState(0);
    const handleClick = () => {
        if (isNaN(soA) || isNaN(soB)) {
            alert("Please enter number!!!!");
            return;
        }
        setSum(parseFloat(soA) + parseFloat(soB));
    };
    return (
        <>
            <div className="container">
                <div className="form-group">
                    Số A:{" "}
                    <input
                        type="number"
                        className="form-control"
                        value={soA}
                        onChange={(e) => setsoA(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    Số B:{" "}
                    <input
                        type="number"
                        className="form-control"
                        value={soB}
                        onChange={(e) => setsoB(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    Tổng:
                    <input
                        type="number"
                        className="form-control"
                        value={sum} placeholder="0" rea
                    />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleClick(sum)}
                    >
                        Tính
                    </button>
                </div>
            </div>
        </>
    );
}

