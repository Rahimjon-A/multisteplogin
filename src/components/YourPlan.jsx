import React, { useState } from "react";
import Title from "./Title";
import Arcade from "../../public/assets/images/icon-arcade.svg";
import Advanced from "../../public/assets/images/icon-advanced.svg";
import Pro from "../../public/assets/images/icon-pro.svg";

const YourPlan = ({price, priceHendler}) => {
    

    const [option, setOption] = useState(1);

    

    return (
        <div className="md:mt-[30px] md:min-w-[412px]  ">
            <Title
                title="Select your plan"
                subTitle="You have the option monthly or yearly billing"
            />

            <div className="flex flex-col md:flex-row  md:gap-4 ">
                <div
                    onClick={() => setOption(1)}
                    className={`flex items-start w-full p-3 border md:flex-col md:pr-[20px] rounded-lg mb-[10px] ${
                        option === 1
                            ? "border-[--marin-blue] bg-[--magnol]"
                            : null
                    }`}
                >
                    <div className="mr-[10px] md:mb-[40px] ">
                        <img src={Arcade} alt="image" />
                    </div>
                    <div className="flex flex-col">
                        <p className=" text-[--marin-blue] font-medium text-[18px]  ">
                            Arcade
                        </p>
                        <span className="text-[--cool-grey] ">
                        
                         {price ? "$90/yr" : "$9/mo"}
                        </span>
                        <span
                            className={` text-[--marin-blue] text-[12px] transition-all ${
                                price ? "visible" : "hidden"
                            } `}
                        >
                            {" "}
                            2 months free
                        </span>
                    </div>
                </div>

                <div
                    onClick={() => setOption(2)}
                    className={`flex items-start w-full p-3 border md:flex-col md:pr-[20px] rounded-lg mb-[10px] ${
                        option === 2
                            ? "border-[--marin-blue] bg-[--magnol]"
                            : null
                    }`}
                >
                    <div className="mr-[10px] md:mb-[40px]  ">
                        <img src={Advanced} alt="image" />
                    </div>

                    <div className="flex flex-col">
                        <p className=" text-[--marin-blue] font-medium text-[18px]  ">
                            Advanced
                        </p>
                        <span className="text-[--cool-grey] ">
                            {" "}
                            {price ? "$120/yr" : "$12/mo"}{" "}
                        </span>
                        <span
                            className={` text-[--marin-blue] text-[12px] transition-all ${
                                price ? "visible" : "hidden"
                            } `}
                        >
                            {" "}
                            2 months free
                        </span>
                    </div>
                </div>

                <div
                    onClick={() => setOption(3)}
                    className={`flex items-start w-full p-3 border md:flex-col md:pr-[20px]  rounded-lg mb-[10px] ${
                        option === 3
                            ? "border-[--marin-blue] bg-[--magnol]"
                            : null
                    }`}
                >
                    <div className="mr-[10px] md:mb-[40px]  ">
                        <img src={Pro} alt="image" />
                    </div>

                    <div className="flex flex-col">
                        <p className=" text-[--marin-blue] font-medium text-[18px]  ">
                            Pro
                        </p>
                        <span className="text-[--cool-grey] ">
                            {" "}
                            {price ? "$150/yr" : "$15/mo"}{" "}
                        </span>
                        <span
                            className={` text-[--marin-blue] text-[12px] transition-all ${
                                price ? "visible" : "hidden"
                            } `}
                        >
                            {" "}
                            2 months free
                        </span>
                    </div>
                </div>
            </div>

            <div
                onClick={priceHendler}
                className="flex items-center w-full justify-center gap-[20px] mt-[10xp] bg-[--magnol] py-[10px] rounded-lg "
            >
                <p
                    className={` ${
                        price ? "text-[--cool-grey]" : "text-[--marin-blue]"
                    }  font-medium  `}
                >
                    Monthly
                </p>
                <span className="bg-[--marin-blue] w-[50px] h-[22px] rounded-2xl relative ">
                    <span
                        className={` bg-white rounded-full w-[17px] h-[17px] absolute inset-0 top-0.5 transition-all ${
                            price ? "left-7" : "left-1"
                        } `}
                    ></span>
                </span>
                <p
                    className={` ${
                        price ? "text-[--marin-blue]" : "text-[--cool-grey]"
                    } font-medium `}
                >
                    Yearly
                </p>
            </div>
        </div>
    );
};

export default YourPlan;
