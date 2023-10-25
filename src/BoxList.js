import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./BoxList.css";

const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBox = ({ width, height, color }) => {
        setBoxes(oldBoxes => {
            const newBoxes = JSON.parse(JSON.stringify(oldBoxes));
            return [...newBoxes, { id: uuid(), width, height, color }];
        });
    };

    const removeBox = (idx) => {
        setBoxes(oldBoxes => {
            const newBoxes = JSON.parse(JSON.stringify(oldBoxes));
            return newBoxes.slice(0, idx).concat(newBoxes.slice(idx + 1));
        })
    }

    return (
        <>
            <NewBoxForm addBox={addBox} />
            <div className="BoxList">
                {boxes.map((box, idx )=>
                    <Box
                        testid={"box" + idx}
                        removeBox={removeBox}
                        key={box.id}
                        idx={idx}
                        width={box.width}
                        height={box.height}
                        color={box.color} />
                )}
            </div>
        </>
    );
};

export default BoxList;