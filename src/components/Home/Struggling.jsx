import React, { Fragment } from 'react'
import { FaTasks } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { FaCalculator } from "react-icons/fa";

const data = [
    {
        icon: <FaTasks />,
        title: "Staying Organized",
        description: "Sodales id ullamcorper neque imperdiet leo, fames massa ipsum erat quisque."
    },
    {
        icon: <FaHourglassHalf />,
        title: "Time Management",
        description: "Lacinia blandit eget nibh sodales ornare magna risus auctor justo."
    },
    {
        icon: <GoGoal />,
        title: "Life Goals",
        description: "Amet non lobortis mi amet leo et nam facilisi elementum ultricies."
    },
    {
        icon: <FaCalculator />,
        title: "Accountability",
        description: "Amet non lobortis mi amet leo et nam facilisi elementum ultricies."
    },
];

const Struggling = () => {
    return (
        <Fragment>
            <div className='text-center w-full m-auto container sm:my-32 lg:mt-8 xl:my-32 my-20 p-4'>
                <h2 className='sm:text-[42px] text-4xl mb-8 font-medium'>What Are You Struggling With?</h2>
                <p className='text-xl text-secondary'>Eu orci sed nulla mattis id fermentum rhoncus enim eleifend ultricies erat libero eu aliquam mauris vitae magna elementum egestas.</p>
                <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 mt-14'>
                    {data.map((value, i) => {
                        return (
                            <div className='flex text-center items-center justify-center flex-col gap-4' key={i}>
                                <div className='text-3xl text-primary'>{value.icon}</div>
                                <h3 className='text-[22px] font-semibold mt-2'>{value.title}</h3>
                                <p className='text-lg'>{value.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Struggling
