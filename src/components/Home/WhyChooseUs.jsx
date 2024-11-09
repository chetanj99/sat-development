import React from 'react'
import { MdOutlinePrivacyTip, MdSupportAgent } from "react-icons/md";
import { PiTimerDuotone, PiCubeTransparentDuotone } from "react-icons/pi";

const WhyChooseUs = () => {
    return (
        <div className="container m-auto sm:my-[70px] my-12 p-4">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-medium mb-2 ">
                    WHY CHOOSE US ?
                </h1>
                <p className="px-2 md:px-20 lg:px-48 xl:px-72">
                    Quality and trust is what is important for you as a client and for
                    us as service providers to assist for better business requirements.
                </p>
            </div>
            <div className="my-8">
                <div className="flex justify-center items-center xl:justify-start flex-wrap ">
                    <div className=" basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2  ">
                        <div className="w-full min-h-[200px] rounded-sm border-x-2 hover:border-x-4 border-primary shadow-lg  px-2 py-4	">
                            <div className="text-md font-medium flex items-center gap-2 text-xl pb-2 ">
                                <MdSupportAgent className="text-4xl text-primary" />
                                Professional Assistance
                            </div>
                            <p className="pl-11">
                                Our experts, including CA, CS, Advocates, and staff, will
                                assist, suggest, and assure quality for all services.
                            </p>
                        </div>
                    </div>
                    <div className=" basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2 ">
                        <div className=" w-full min-h-[200px] p-5 rounded-sm border-x-2 hover:border-x-4 border-primary shadow-lg  px-2 py-4	">
                            <div className="text-md font-medium flex items-center gap-2 text-xl pb-2">
                                <PiTimerDuotone className="text-4xl text-primary " />
                                Support at Anytime
                            </div>
                            <p className="pl-11">
                                We have a dedicated professional support team committed to
                                assisting you at every stage of your business.
                            </p>
                        </div>
                    </div>

                    <div className="basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2 ">
                        <div className=" w-full min-h-[200px] p-5 rounded-sm border-x-2 hover:border-x-4 border-primary shadow-lg  px-2 py-4	">
                            <div className="text-md font-medium flex items-center gap-2 text-xl pb-2 ">
                                <PiCubeTransparentDuotone className="text-4xl text-primary " />
                                Transparency
                            </div>
                            <p className="pl-11">
                                We keep our prices transparent, no hidden cost is included so
                                you pay for your requirements for the business.
                            </p>
                        </div>
                    </div>
                    <div className=" basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2 ">
                        <div className=" w-full min-h-[200px] p-5 rounded-sm border-x-2 hover:border-x-4 border-primary shadow-lg  px-2 py-4		">
                            <div className="text-md font-medium flex items-center gap-2 text-xl  pb-2">
                                <MdOutlinePrivacyTip className="text-4xl text-primary " />
                                Confidential & Privacy
                            </div>
                            <p className="pl-11">
                                We understand business information is valuable and assure all
                                your private information is safe with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
