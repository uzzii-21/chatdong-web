import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <header>
            <div className="flex items-center text-2xl">
                <img className="w-12 h-12" src={logo} alt="Photo Gallery" />
                <h1>Photo <span className=""> Gallery </span></h1>
            </div>

        </header>
    )
}

export default Navbar
