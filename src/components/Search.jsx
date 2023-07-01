import { Fragment } from 'react';

export const Search = () => {
    return (
        <Fragment>
            <div className='bg-white  my-5  rounded-3xl'>
                <div className='flex justify-around gap-4  items-center px-5'>
                    <ul className='flex gap-4 shadow-md px-5 align-start items-center rounded-xl'>
                        <li className=''><a href="#" className='cursor-pointer '>Location</a></li>
                        <li className='w-[1px] h-8 bg-gray-300 py-7'></li>
                        <li><a href="#" className='cursor-pointer '>Add Guests</a></li>
                        <li className='w-[1px] h-8 bg-gray-300 py-7'></li>
                        <li><a href="#" className='cursor-pointer '>Search</a></li>

                    </ul>
                </div>

            </div>
        </Fragment>
    )
}