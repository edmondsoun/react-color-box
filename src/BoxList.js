import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid';
import { useState } from "react"

//state for all boxes
//similar to list?
function BoxList(){


    const [boxes, setBoxes] = useState([]);

    function renderItems() {
      return (
          <ul>
            {boxes.map(box => (
                <li key={box.id}>
                  {box.width}: {box.qty}
                </li>
            ))}
          </ul>
      );
    }

    function addItem(box) {
      let newBox= { ...box, id: uuid() };
      setBoxes(boxes => [...boxes, newBox]);
    }


  return (
    <div className="boxList">
      <NewBoxForm  />

    </div>
  );
}

//render all Box components
//render newBoxForm


//add button to remove box here? worry about this later?


export default BoxList;
