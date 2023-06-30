import { Fragment } from 'react';

export const Search = () => {
    return (
        <Fragment>
            <div className='bg-white shadow-md  my-5  rounded-3xl'>
                <div className='flex justify-around gap-4 py-5 items-center px-5'>
                    <div className='flex gap-4 items-center'>
                        <div className='cursor-pointer '>Location</div>
                        {/* <div className="w-[1px] h-8 bg-gray-500"></div> */}
                    </div>
                    <div className={"flex gap-4 items-center  border-r-gray-500 border border-l-2"}>
                        <div classname=" cursor-pointer text-gray-200 ">Add Guests</div>
                        {/* <div className="w-[1px] h-8 bg-gray-500"></div> */}
                    </div>

                    <div>
                        <div className='cursor-pointer items-center'>Search</div>
                        <div className=""></div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}