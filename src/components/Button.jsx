// validateName, validateEmail, validatePhone 
const ButtonNext = ({ forward, btn,  handleSubmit }) => {
    // const handleClick = () => {
    //     if (validateEmail() && validateName() && validatePhone()) {
    //         forward();
    //     }
    // };

    const handleClick = () => {
        if (handleSubmit() ) {
            forward();
        }
    };

    return (
        <button
            onClick={handleClick}
            // onClick={handleSubmit}
            className=" bg-[--marin-blue] text-1 px-3 py-2 text-[--magnol] rounded-md "
        >
            {btn}
        </button>
    );
};


const ButtonPrev = ({ goBack, btn }) => {
    return (
        <button
            onClick={goBack}
            className="text-1 px-3 py-2 text-[--cool-grey] bg-[--ala] rounded-lg "
        >
            {btn}
        </button>
    );
};

export { ButtonNext, ButtonPrev };
