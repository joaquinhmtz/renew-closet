import { Link } from "react-router-dom"
import Icon from "../../shared/components/Icon"

const ContainerOption = ({ props, sendData }) => {

    const SetDataTemplate = (params) => {
        sendData(params);
    }

    return (
        <>
            <Link onClick={() => SetDataTemplate(props)} to={props.url} className="w-full border-primary-all hover:shadow-md rounded-sm">
                <div className="w-full flex p-10">
                    <Icon key={props.icon} name={props.icon} styleClass={"mr-5"} size={"xl"}/>
                    <h3>{props.name}</h3>
                </div>
            </Link>
        </>
    )
}

export default ContainerOption