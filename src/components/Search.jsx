import { Fragment, useState } from 'react';
import { useGlobalState } from "../hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonCounter } from './Buttons';


export const Search = () => {
    const [searchState, setSearchState] = useState(false)
    const [ActiveLocation] = useGlobalState("locationLists");
    const [ActiveState, setActiveState] = useGlobalState("searchActive");
    const [total] = useGlobalState("total")
    const [location, setlocation] = useState("Helsinki, Finland")
    const [menuSwitch] = useState(true)
    const [hover, setHover] = useState("location")
    const Switcher = (e) => {
        if (e === "location") {
            setSearchState(!searchState);
            setActiveState({ ...ActiveState, searchActive: !searchState })
            setHover("location")
        }
        else if (e === "guest") {
            // setSearchState(!searchState);
            // setActiveState({ ...ActiveState, searchActive: !searchState })
            setHover("guest")
        }

    }

    return (
        <Fragment>
            <div className={'bg-white  my-5  '}>
                <div className=''>
                    <ul className={searchState ? 'w-full flex gap-4 shadow-md  align-start items-center rounded-xl' : "flex gap-4 shadow-md px-5  items-center rounded-xl"}>
                        <li className={searchState ? 'flex flex-col w-[25em] p-2' : 'flex flex-col'} >
                            <a href="#" className={searchState && hover === "location" ? 'cursor-pointer border-[1px] rounded-xl border-gray-700 p-2' : "cursor-pointer p-2"} onClick={() => { Switcher('location'); }}>
                                <div className={searchState ? ' text-md' : 'hidden'}>Location </div>
                                { location}</a></li>
                        <li className='w-[1px] h-8 bg-gray-300 py-7'></li>
                        <li className={searchState ? 'flex flex-col w-[25em] p-2' : 'flex flex-col'}>
                            <a href="#" className={searchState && hover === "guest" ? 'cursor-pointer border-[1px] rounded-xl border-gray-700 p-2' : "cursor-pointer p-2"} onClick={() => { Switcher('guest'); }}>
                                <div className={searchState ? ' text-md' : 'hidden'}>Guess </div>
                                {total != 0 ? total : "Add"} Guests</a></li>
                        <li className='w-[1px] h-8 bg-gray-300 py-7'></li>
                        <li className={searchState ? 'flex flex-col w-[25em] p-2' : 'flex flex-col'}><a className='cursor-pointer flex items-center justify-center'>{searchState ? <Button /> : <FontAwesomeIcon icon={faMagnifyingGlass} />} </a></li>

                    </ul>
                    <div className='flex justify-between  items-start  mx-4 align-middle relative w-[58%]'>
                        <ul className={searchState ? 'hidden  mt-10 lg:flex flex-col items-start ' : "hidden"}>

                            {menuSwitch ? ActiveLocation.map((value, index) => (
                                <li key={index} className="cursor-pointer flex gap-4 items-center my-4 align-middle" onClick={() => { setlocation(value.name) }}><FontAwesomeIcon icon={faLocationDot} />{value.name}</li>
                            )) : ""}
                        </ul>
                        <div className={searchState && hover === "guest" ? 'mt-10  w-80 lg:flex items-start hidden' : 'hidden'} >
                            <ButtonCounter />
                        </div>

                    </div>


                </div>

            </div>
        </Fragment>
    )
}