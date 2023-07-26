import { Fragment, useState } from "react";
import { useGlobalState } from "../../hooks";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Home = () => {
    const [data] = useGlobalState("data")
    const [filter, setFilter] = useGlobalState("search")
    console.log(filter)

    return (
        <Fragment>
            <section className="relative my-[20vh]">
                <div className="pb-6 mx-12 mt-6 flex justify-between ">
                    <h1>Stays in Finland</h1>
                    <div>12+ stays   </div>
                </div>

                <div className="mx-12 ">
                    <div className="grid lg:grid-cols-3 grid-cols-1 place-content-center align-middle gap-5">
                        {
                            data.map((val, key) => (
                                <div key={key}>
                                    <img src={val.photo} className="rounded-xl lg:w-full flex lg:h-[300px]" alt={`stay-image ${key}`} />
                                    <div className="flex flex-col py-3 ">
                                        <div className="flex justify-between text-gray-400">
                                            <div className={val.superHost ? "flex gap-4 justify-start items-start" : ""}>
                                                <span>{val.superHost ? <span className={"border-2 border-gray-900 rounded-xl px-2 py-[2px] "}>Super Host</span> : null}</span>{val.type}
                                            </div>
                                            <div><FontAwesomeIcon icon={faStar} />{val.rating}</div>
                                        </div>
                                        <div className="font-bold">{val.title}</div>
                                    </div>

                                </div>
                            ))


                        }

                    </div>

                </div>
            </section>
        </Fragment>
    )
}