
import { useState } from "react";
import { ButtonNext, ButtonPrev } from "./Button";
import Finishing from "./Finishing";
import Personal from "./Personal";
import Services from "./Services";
import Sidebar from "./Sidebar";
import Thanks from "./Thanks";
import YourPlan from "./YourPlan";

const RegisterMobile = ({step, goBack, forward, price, priceHendler, changer}) => {
  
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
        <main className="flex h-[100vh] flex-col justify-between relative w-full md:hidden ">
            <Sidebar active={step} />

            <div className="" >
                <div className="absolute left-1/2 -translate-x-1/2 w-[90%] top-[13%] ">
                    <div className="container mx-auto  px-15px   bg-white rounded-lg py-6 px-4 ">
                        {step === 1 ? <Personal 
                            userName={values.user}
                            userEmail={values.email}
                            userNumber={values.number}
                            handleInputChange={handleInputChange}
                            errorMsg={errorMsg}
                            errorNumber={errorNumber}
                            errorEmail={errorEmail}
                        /> : null}
                        {step === 2 ? <YourPlan
                         price={price}
                         priceHendler={priceHendler}
                         /> : null}
                        {step === 3 ? <Services price={price}  /> : null}
                        {step === 4 ? <Finishing price={price} changer={changer} /> : null}
                        {step === 5 ? <Thanks /> : null}
                    </div>
                </div>

                {step === 5 ? null : (
                    <div className="bg-white">
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
                            forward={forward} btn="Next Step" />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default RegisterMobile;
