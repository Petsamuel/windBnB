import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


export const Button = () => {

    return (
        <Fragment>
            <div>
                <button type="button" className=" text-white rounded-xl px-4 py-3 text-sm flex gap-3 items-center bg-red-400">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                </button>
            </div>
        </Fragment>
    )
}

export const ButtonCounter = () => {
    const [adultCount, setAdultCount] = useState(0)
    const [childrenCount, setchildrenCount] = useState(0)

    const minusCount = () => {


    }
    const addCount = () => {

    }

    return (
        <Fragment>
            <div className="flex flex-col gap-4">
                <div className="">
                    <p>Adults</p>
                    <p className="text-gray-400 text-sm">Ages 13 and Above</p>
                    <div className="flex gap-4 pt-2 items-center">
                        <span className="border-2 rounded  text-sm black cursor-pointer py-[3px] px-[6px]" onClick={minusCount}><FontAwesomeIcon icon={faMinus} /> </span>
                        <p>{adultCount}</p>
                        <span className="border-2 rounded  py-[3px] px-[6px] text-sm cursor-pointer" onClick={addCount}><FontAwesomeIcon icon={faPlus} /></span>
                    </div>
                </div>
                <div>
                    <div className="">
                        <p>Children</p>
                        <p className="text-gray-400 text-sm">Ages 2 - 12</p>
                        <div className="flex gap-4 pt-2 items-center">
                            <span className="border-2 rounded  text-sm black cursor-pointer  py-[3px] px-[6px]"><FontAwesomeIcon icon={faMinus} /> </span>
                            <p>{childrenCount}</p>
                            <span className="border-2 rounded  text-sm cursor-pointer  py-[3px] px-[6px]"><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}