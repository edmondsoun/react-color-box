import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid';
import { useState } from "react"

// [{id:xx, width:xx, height:xx, backgroundColor:xx}, ...]

function BoxList() {


    const [boxes, setBoxes] = useState([]);

    function renderBoxes() {
        return (
            <ul>
                {boxes.map(box => (

                    <Box 
                            width={`${box.width}px`}
                            height={`${box.height}px`}
                            backgroundColor={box.backgroundColor}
                            removeBox={removeBox} />

                ))}
            </ul>
        );
    }

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    function removeBox(boxId) {
        setBoxes(boxes => boxes.filter(
            b => b.id !== boxId
        ));
    }

    return (
        <div className="boxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );

}

//render all Box components
//render newBoxForm


//add button to remove box here? worry about this later?


export default BoxList;
