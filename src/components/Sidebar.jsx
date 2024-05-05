import SidebarMobile from "../../public/assets/images/bg-sidebar-mobile.svg"

const Sidebar = ({active}) => {
    return (
        <div className={`grid w-full h-[150px] bg-[url${SidebarMobile}] md:bg-[url('../../public/assets/images/bg-sidebar-desktop.svg')] md:bg-cover md:bg-no-repeat md:h-[100%] bg-cover md:rounded-lg`}  >
            <ul className="flex items-start   justify-center md:justify-start mt-[40px] md:mt-0  gap-5  mx-auto md:mx-0 md:flex-col md:p-7 ">
                
                <li className="flex items-center gap-4  " >
                   <span className= {`text-3  border border-white py-[7px] w-[33px] h-[33px] rounded-full grid place-content-center  ${ active=== 1 ? "bg-[--light-grey] text-black " : "text-white" } `} > 1</span>
                    <span className="hidden md:visible md:flex flex-col " >
                        <span className="  text-[--cool-grey]  text-[12px] " >STEP 1</span>
                        <span className="  text-white text-[14px] font-medium " >YOUR INFO</span>
                    </span>
                </li>
               
                <li className="flex items-center gap-4  ">
                   <span className= {`text-3  border border-white py-[7px] w-[33px] h-[33px] rounded-full grid place-content-center   ${ active=== 2 ? "bg-[--light-grey] text-black " : "text-white" } `} > 2</span>
                   <span className="hidden md:visible md:flex flex-col " >
                        <span className="  text-[--cool-grey]  text-[12px] " >STEP 2</span>
                        <span className="  text-white text-[14px] font-medium " >SELECT PLAN</span>
                    </span>
                </li>
                
                <li className="flex items-center gap-4  ">
                   <span className= {`text-3  border border-white py-[7px] w-[33px] h-[33px] rounded-full grid place-content-center  ${ active=== 3 ? "bg-[--light-grey] text-black " : "text-white" } `} > 3</span>
                   <span className="hidden md:visible md:flex flex-col " >
                        <span className="  text-[--cool-grey]  text-[12px] " >STEP 3</span>
                        <span className="  text-white text-[14px] font-medium " >ADD-ONS</span>
                    </span>
                </li>
               
                <li className="flex items-center gap-4 text-white  ">
                   <span className= {`text-3  border border-white py-[7px] w-[33px] h-[33px] rounded-full grid place-content-center   ${ active=== 4  ? "bg-[--light-grey] text-black " : null } ${ active === 5 ? "bg-[--light-grey] text-black " : null } `} > 4</span>
                   <span className="hidden md:visible md:flex flex-col " >
                        <span className="  text-[--cool-grey]  text-[12px] " >STEP 4</span>
                        <span className="  text-white text-[14px] font-medium " >SUMMARY</span>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
