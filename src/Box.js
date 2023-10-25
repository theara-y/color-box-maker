const Box = ({ testid, removeBox, idx, width, height, color }) => {
    const handleClick = () => {
        removeBox(idx);
    };

    return (
        <>
        <div className="Box" data-testid={testid} style={
            {
                width: width + "px",
                height: height + "px",
                backgroundColor: color
            }
        }></div>
        <button onClick={handleClick}>X</button>
        </>
    );
};

export default Box;