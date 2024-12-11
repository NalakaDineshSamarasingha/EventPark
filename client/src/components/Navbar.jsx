import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className='flex justify-between items-center py-8 px-8 bg-white text-black fixed z-10 w-full opacity-100 border-b-2 border-emerald-200'>
            <div className='left'>
                <p className='text-xl'>Events<span className='text-emerald-600 font-black text-xl'>Park</span></p>
            </div>
            <div className='right flex gap-8 items-center tracking-widest uppercase text-sm text-slate-700'>
                <Link href='/'>Home</Link>
                <Link href='/events'>Upcomming Event</Link>
                <Link>About Us</Link>
                <Link>Contact Us</Link>
                <Link className='py-2 px-4 bg-emerald-600 text-white'>Login</Link>
                <Link  className='py-2 px-4 bg-emerald-600 text-white'>Sign Up</Link>
            </div>
        </div>
    );
}
