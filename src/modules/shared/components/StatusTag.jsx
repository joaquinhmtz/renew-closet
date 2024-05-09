import Icon from "../../shared/components/Icon"

const StatusTag = ({ status, colors }) => {

    let label = "";

    if (status === "available" ? label = "Disponible" : "");
    if (status === "almost_yours" ? label = "Ya casi es tuyo" : "");
    if (status === "separate" ? label = "Apartado" : "");

    return (
        <>
            <div className={`w-auto flex content-center ${colors.text} ${colors.bg} rounded-2xl px-3 py-1 text-xs`}>
                <div><Icon name={"faCircle"} styleClass={`pr-1 text-sm[10px] ${colors.circle}`} size={"xs"}/></div>
                <span className="font-medium">{label}</span>
            </div>
        </>
    )
}

export default StatusTag