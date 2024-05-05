import { useState } from "react";
import "./App.css";
import RegisterMobile from "./components/Register";
import RegisterDesktop from "./components/RegisterDesktop";

function App() {
    const [step, setStep] = useState(1);

    const Forward = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const GoBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const changer = () => {
        setStep(2);
    };

    const [price, setPrice] = useState(false);
    const priceHendler = () => {
        setPrice((prev) => !prev);
    };

    
    
    // validation
   

    

    

    return (
        <div>
            <RegisterMobile
                goBack={GoBack}
                forward={Forward}
                step={step}
                price={price}
                priceHendler={priceHendler}
                changer={changer}
                
                
            />
            <RegisterDesktop
                goBack={GoBack}
                forward={Forward}
                step={step}
                price={price}
                priceHendler={priceHendler}
                changer={changer}
                
            />
        </div>
    );
}

export default App;
