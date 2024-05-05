import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Personal from "./Personal";
import { ButtonNext, ButtonPrev } from "./Button";
import YourPlan from "./YourPlan";
import Services from "./Services";
import Finishing from "./Finishing";
import Thanks from "./Thanks";

const RegisterDesktop = ({
    step,
    goBack,
    forward,
    price,
    priceHendler,
    changer,
}) => {
    // validation
    const [ errorMsg, setErrorMsg] = useState("")
    const [ errorEmail, setErrorEmail] = useState("")
    const [ errorNumber, setErrorNumber] = useState("")
    

    const [values, setValues] = useState({
        user: '',
        email: '',
        number: '',
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
         
    
        // Validation
        if (!values.user.trim()) {
            setErrorMsg("Please enter your name");
            return false;
        } else setErrorMsg(null)
    
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
            setErrorEmail("Please enter a valid email address");
            return false;
        } else setErrorEmail(null)
    
        if (!/^\d+$/.test(values.number)) {
            setErrorNumber("Please enter a valid number");
            return false;
        } else setErrorNumber(null)
    
        return true;
    };
    
    
    
    
    


    return (
        <div className=" hidden  md:visible md:block w-[100vw] h-[100vh]  place-content-center ">
            <div className="max-w-[790px] max-h-[480px] w-full h-full mx-auto gap-[90px] flex justify-between items-center p-4 rounded-2xl bg-white relative ">
                <div className="min-w-[30%] h-[100%] ">
                    <Sidebar active={step} />
                </div>

                <div className="flex flex-col justify-between pr-[40px] ">
                    <div className="max-w-[605] w-full mb-[70px] ">
                        {step === 1 ? (
                            <Personal
                                userName={values.user}
                                userEmail={values.email}
                                userNumber={values.number}
                                handleInputChange={handleInputChange}
                                errorMsg={errorMsg}
                                errorNumber={errorNumber}
                                errorEmail={errorEmail}
                            />
                        ) : null}
                        {step === 2 ? (
                            <YourPlan
                                price={price}
                                priceHendler={priceHendler}
                            />
                        ) : null}
                        {step === 3 ? <Services price={price} /> : null}
                        {step === 4 ? (
                            <Finishing price={price} changer={changer} />
                        ) : null}
                        {step === 5 ? <Thanks /> : null}
                    </div>
                </div>

                {step === 5 ? null : (
                    <div className="bg-white absolute bottom-4 right-9 max-w-[434px] w-full flex justify-between ">
                        <div
                            className={`flex container mx-auto ${
                                step === 1 ? "justify-end" : "justify-between"
                            } bg-white items-center h-[60px]`}
                        >
                            {step === 1 ? null : (
                                <ButtonPrev goBack={goBack} btn="Go Back" />
                            )}
                            <ButtonNext
                                handleSubmit={handleSubmit}
                                forward={forward}
                                btn="Next Step"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterDesktop;
