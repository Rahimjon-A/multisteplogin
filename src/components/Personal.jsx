
import Title from "./Title";
   
const Personal = ({ errorMsg, errorEmail, errorNumber, userName, userEmail, userNumber, handleInputChange }) => {


    return (
        <div>
            <Title
                title="Personal info"
                subTitle="Please provide your name, email address, and phone number"
            />

            <form  className=" flex flex-col gap-4"  >
                <div className=" relative" >
                    
                    <span className= {`warning text-red-500 text-[12px] absolute right-0   `} > {errorMsg} </span>
                    <label
                        htmlFor="userName"
                        className="block text-[--marin-blue] text-[14px] "
                    >
                        Name
                    </label>
                    <input
                        itemID="user"
                        type="text"
                        className=" border-[2px] w-full py-2 px-4 rounded outline-none focus:border-[2px] focus:border-[--marin-blue] "
                        placeholder="e.g Stephen King"
                        name="user" 
                        value={userName}
                        onChange={handleInputChange}
                         
                    />
                </div>

                <div className=" relative" >

                <span className= {`warning text-red-500 text-[12px] absolute right-0  `} >{errorEmail} </span>
                    <label
                        htmlFor="userName"
                        className="block text-[--marin-blue] text-[14px] "
                    >
                       
                        Email Address
                    </label>
                    <input
                        itemID="email"
                        type="email"
                        className=" border-[2px] w-full py-2 px-4 rounded outline-none focus:border-[2px] focus:border-[--marin-blue] "
                        placeholder="e.g stephenking@lorem.com"
                        name="email"
                        value={userEmail}
                        onChange={handleInputChange}
                        

                        

                        
                    />
                </div>

                <div className=" relative" >
                    
                <span className= {`warning text-red-500 text-[12px] absolute right-0  `} >{errorNumber} </span>
                    <label
                        htmlFor="userPhone"
                        className="block text-[--marin-blue] text-[14px] "
                    >
                        
                        Phone Number
                    </label>
                    <input
                        itemID="number"
                        type="number"
                        className=" border-[2px] w-full py-2 px-4 rounded outline-none focus:border-[2px] focus:border-[--marin-blue] "
                        placeholder="e.g +1 234 567 890"
                        name="number"
                        value={userNumber}
                        onChange={handleInputChange}

                        
                    />
                </div>
            </form>
        </div>
    );
};

export default Personal;
