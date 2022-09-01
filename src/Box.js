
//display div with dimensions matching props passed to it

function Box({ height, width, backgroundColor }) {

    const myStyle = {
        height: height,
        width: width,
        backgroundColor: backgroundColor
    };
    //issues with variable names?

    return (
        <div style={myStyle}></div>
    );

}


export default Box;
