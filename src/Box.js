
//display div with dimensions matching props passed to it

function Box({ id, height, width, backgroundColor, removeBox }) {

    const myStyle = {
        height: height,
        width: width,
        backgroundColor: backgroundColor
    };
    //issues with variable names?

    function handleRemove(evt) {
        evt.preventDefault();
        removeBox(id);
      }

    return (
        <div>
                <div style={myStyle}></div>
                <button onClick={handleRemove}>X</button>
        </div>
    );

}


export default Box;
