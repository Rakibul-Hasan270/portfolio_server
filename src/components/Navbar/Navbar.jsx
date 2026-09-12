
import { Link } from 'react-scroll';
import img from '../../assets/logo.png';

const Navbar = () => {


    return (
        <div className="flex justify-between">
            <Link to='navbar' className="flex items-center cursor-pointer">
                <img className='w-8 h-12' src={img} alt="" />
                <p className='text-3xl'>akib</p>
            </Link>
            <div>
                <Link smooth={true} spy={true} to='contact'>
                    <button className='bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white px-4 py-2 rounded-lg'>Let&apos;s Talk</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;