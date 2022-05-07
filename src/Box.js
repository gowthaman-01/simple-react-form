const Box = (props) => {
    const color = {
        backgroundColor: props.on ? "#222222" : "#ffffff"
    };
    const fontColor = {
        color: props.on ? "white" : "222222" 
    };

    return (
        <div className="box" style={color} onClick={() => props.toggle(props.id)}>
            <div className="box-id" style={fontColor}>
                {props.id}
            </div>
        </div>
    )
};

export default Box;