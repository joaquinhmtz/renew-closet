const StatusTag = ({ status }) => {

    let label = "";

    if (status === "available" ? label = "Disponible" : "");
    if (status === "almost_yours" ? label = "Ya casi es tuyo" : "");
    if (status === "separate" ? label = "Apartado" : "");

    return (
        <>
            <div>
                <div></div> {label}
            </div>
        </>
    )
}

export default StatusTag