import { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-3xl font-semibold" href="/"><img className='h-20 w-full object-cover md:h-full md:w-20' src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/playing_cards.png'></img></a>
            </div>
            <div className="flex flex-col ml-4 text-center">
                <a className="text-2xl font-medium my-4" href="/Login" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Login
                </a>
                <a className="text-2xl font-normal my-4" href="/Register" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Register
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
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
                        <NavLink to="/Login">
                            Login
                        </NavLink>
                        <NavLink to="/Register">
                            Register
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
}


// import {Transition} from "@headlessui/react";  //for smooth transition between tabs
// import Link from "react-scroll"; // alternate for a tag. In Next js we use link for href

// function Navbar() {
//   return (
//     <div>
//         {/* For main Nav container */}
//         <nav className='shadow-sm fixed w-full z-10'>
//             <div className='w-full'>
//                 <div className='flex items-counter h-20 w-full'>
//                     {/* first block section Outer part */}
//                     <div className='flex items items-counter mx-20 justify-between w-full'>
//                         <div className='flex justify-counter items-counter flex-shrink-0'>
//                             <h1 className='font-bold text-xl cursor-pointer'>
//                                 Card<span className='text-red-500'>Master</span>
//                             </h1>
//                         </div>
//                         {/* for small screen we do not show tabs that's Y written hidden and on meduim device i.e md
//                         we want them as block */}
//                         <div className='hidden md:block'>
//                             <div className='ml-10 flex items-baseline space-x-4'>
//                                 <Link 
//                                     activeClass='Home'
//                                     to='about'
//                                     smooth={true}
//                                     offset={500}
//                                     duration={500}
//                                     className='cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:fontblack'>
//                                     Home
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar