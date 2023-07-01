import { Fragment, useState } from 'react';
import { useGlobalState } from "../hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from './Buttons';


export const Search = () => {
    const [searchState, setSearchState] = useGlobalState("searchActive")
    const [ActiveLocation] = useGlobalState("locationLists");
    const [location, setlocation] = useState()
    const locationState = () => {
        setSearchState({ ...searchState, searchActive: !searchState.searchActive })
    }

    return (
        <Fragment>
            <div className={'bg-white  my-5  rounded-3xl'}>
                <div className=''>
                    <ul className={searchState.searchActive ? 'w-full flex gap-4 shadow-md  align-start items-center rounded-xl' : "flex gap-4 shadow-md px-5  items-center rounded-xl"}>
                        <li className={searchState.searchActive ? 'flex flex-col w-[25em] p-2 border-[1px] rounded-xl border-gray-700' : 'flex flex-col'} onClick={locationState}><a href="#" className='cursor-pointer '>
                            <div className={searchState.searchActive ? ' text-md' : 'hidden'}>Location </div>
                            {searchState.searchActive ? (location ? location : "Helsinki, Finland") : "Helsinki, Finland"}</a></li>
                        <li className='w-[1px] h-8 bg-gray-300 py-7'></li>
                        <li className={searchState.searchActive ? 'flex flex-col w-[25em] p-2' : 'flex flex-col'} ><a href="#" className='cursor-pointer '>Add Guests</a></li>
                        <li className='w-[1px] h-8 bg-gray-300 py-7'></li>
                        <li className={searchState.searchActive ? 'flex flex-col w-[25em] p-2' : 'flex flex-col'}><a href="#" className='cursor-pointer '>{searchState.searchActive ? <Buttons /> : <FontAwesomeIcon icon={faMagnifyingGlass} />} </a></li>

                    </ul>
                    <ul className={searchState.searchActive ? 'hidden lg:block mt-10' : "hidden"}>
                        {ActiveLocation.map((value, index) => (
                            <li key={index} className="cursor-pointer flex gap-4 items-center my-4" onClick={() => { setlocation(value.name) }}><FontAwesomeIcon icon={faLocationDot} />{value.name}</li>
                        ))}
                    </ul>
                    <div></div>

                </div>

            </div>
        </Fragment>
    )
}