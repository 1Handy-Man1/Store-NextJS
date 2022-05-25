import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0';

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
NAVBAR DISPLAY ON PHONES/SMALL TABLET
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function MobileNav({open, setOpen}) {
    const {user} = useUser();

    if(user){
        return <>
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-3xl font-semibold" href="/"><img className='h-20 w-full object-cover md:h-full md:w-20' src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/playing_cards.png'></img></a>
            </div>
            <div className="flex flex-col ml-4 text-center">
                <a className="text-2xl font-medium my-4" href="/AdminHome" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Store
                </a>
                <a className="text-2xl font-normal my-4" href="/api/auth/logout" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Logout
                </a>
            </div>  
        </div>
        </>
    }
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-3xl font-semibold" href="/"><img className='h-20 w-full object-cover md:h-full md:w-20' src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/playing_cards.png'></img></a>
            </div>
            <div className="flex flex-col ml-4 text-center">
                <a className="text-2xl font-medium my-4" href="/AdminHome" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Store
                </a>
                <a className="text-2xl font-normal my-4" href="/api/auth/login" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Login
                </a>
            </div>  
        </div>
    )
}



/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
NAVBAR DISPLAY ON DESKTOP/TABLET
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const {user} = useUser();

    // THIS WILL SHOW UP IF YOU HAVE SIGN IN
    if(user){
        return <>
            <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center fixed w-full top-0">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="w-3/12 flex items-center">
                    <a className="text-4xl font-semibold" href="/"><img className='h-20 w-full object-cover md:h-full md:w-20' src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/playing_cards.png'></img></a>
                </div>
                <div className="w-9/12 flex justify-end items-center">
    
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
    
                    <div className="hidden md:flex text-3xl">
                        <NavLink to="/AdminHome">
                            Store
                        </NavLink>
                        <NavLink to="/api/auth/logout">
                            Logout
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    }

    // THIS WILL SHOW UP IF YOU DIDN'T SIGN IN

        return (
            <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center fixed w-full top-0">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="w-3/12 flex items-center">
                    <a className="text-4xl font-semibold" href="/"><img className='h-20 w-full object-cover md:h-full md:w-20' src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/playing_cards.png'></img></a>
                </div>
                <div className="w-9/12 flex justify-end items-center">
    
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
    
                    <div className="hidden md:flex text-3xl">
                        <NavLink to="/AdminHome">
                            Store
                        </NavLink>
                        <NavLink to="/api/auth/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
}