import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export const Buttons = () => {

    return (
        <Fragment>
            <div>
                <button type="button" className="bg-red-400 text-white rounded-xl p-3 text-sm">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                </button>
            </div>
        </Fragment>
    )
}
