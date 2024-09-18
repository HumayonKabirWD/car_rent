import Maxwidth from "./Maxwidth"


const Navbar = () => {
  return (
    <div className="top-2 h-16 sticky backdrop-blur-xl z-[100] ">
        <Maxwidth className=" relative">
            <div className="border-b-2 h-16 top-2 bg-gradient-to-t from-red-400 to-red-600 flex items-center justify-between px-3 text-slate-200 font-semibold">
                <div className="flex items-center justify-between hover:text-white gap-1">
                    <img className="h-8" src="/car.svg" alt="" />
                    <a href="/">Home</a>
                </div>
                <div className="flex items-center justify-center gap-5 ">
                    <a className="hover:text-white" href="/configure/about">About</a>
                    <a className="hover:text-white"href="/configure/services">Services</a>
                    <a className="hover:text-white"href="/configure/contuct">contuct us</a>
                </div>
            </div>
        </Maxwidth>
    </div>
  )
}

export default Navbar