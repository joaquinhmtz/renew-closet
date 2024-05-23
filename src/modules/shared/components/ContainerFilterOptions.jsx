import { useState } from "react";
import { Link } from "react-router-dom"
import Icon from "./Icon"

const ContainterFilterOptions = ({ props, sendPimpFilters }) => {

    const [pimpFilters, setPimpFilters] = useState(true);

    const PimpFilters = () => {
        setPimpFilters(!pimpFilters);
        sendPimpFilters(pimpFilters);
    }

    return (
        <>
            <div className="w-full flex justify-between items-center">
                <h3 className="font-bold text-xl text-baby-black">{props.title} ({props.total})</h3>
                <div className="flex justify-between">
                    <button className="hover:bg-[#dbe2e9] p-2 px-[0.65rem] rounded-md" onClick={() => PimpFilters()}>
                        <Icon name={"faFilter"} styleClass={"text-secondary-gray"} size={"lg"}></Icon>
                    </button>
                    {props.new ? 
                    <Link to={props.newUrl} className="hover:bg-[#dbe2e9] p-2 px-[0.65rem] rounded-md">
                        <Icon name={"faPlus"} styleClass={"text-secondary-gray"} size={"lg"}></Icon>
                    </Link>
                    : null}
                </div>
            </div>
        </>
    )
}

export default ContainterFilterOptions