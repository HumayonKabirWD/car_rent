import Image from "next/image"
import Maxwidth from "./Maxwidth"
import car from "../public/car.svg"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="top-2 h-16 sticky backdrop-blur-xl z-[100] ">
        <Maxwidth className=" relative">
            <div className="border-b-2 h-16 top-2  flex items-center justify-between px-3 font-semibold">
                <div className="flex items-center justify-between gap-3">
                    <Image src={car} alt="car" height={40} width={40}/>
                    <Link href="/" className="text-xl font-bold">Car Rental</Link>
                </div>
                <div className="flex items-center justify-center gap-5 ">
                    <Link className="" href="/configure/about">About</Link>
                    <Link className=""href="/configure/services">Services</Link>
                    <Link className=""href="/configure/contuct">contuct us</Link>
                </div>
            </div>
        </Maxwidth>
    </div>
  )
}

export default Navbar