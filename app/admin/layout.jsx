import Image from "next/image";
import SideBar from "../../components/AdminComponents/sidebar";
import { assets } from "../../Assets/assets";


export default function Layout({ children }){
    return (

        <>
        <div className="flex">
            <SideBar />
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h=[60px] px-12 border border-b border-black">
                    <h3 className="font-medium">Admin Panel</h3>
                    <Image src={assets.profile_icon} width={40} alt=""/>
                </div>
                {children}
            </div>

        </div>
       
        
        </>
    )
}