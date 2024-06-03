

function Alert(props) {
    return (
        <>
        {props.alert? <h1 className={`alert-${props.alert.type}`}>{props.alert.msg} </h1>:null}
        </>)
}

export default Alert