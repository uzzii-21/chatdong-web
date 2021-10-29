import logo from '../assets/logo.png';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4">
            <div className="flex items-center text-2xl">
                <img className="w-12 h-12" src={logo} alt="Photo Gallery" />
                <h1 className="ml-2">Photo <span className="font-semibold"> Gallery </span></h1>
            </div>
            <div className="flex">
                <a href="/" className="text-center mx-2">
                    <img className="w-6 h-6 mx-auto" src={githubLogo} alt="Photo Gallery" />
                    <span className="text-sm font-semibold">Github</span>
                </a>
                <a href="/" className="text-center mx-2">
                    <img className="w-6 h-6 mx-auto" src={linkedinLogo} alt="Photo Gallery" />
                    <span className="text-sm font-semibold">LinkedIn</span>
                </a>
            </div>
        </header>
    )
}

export default Navbar
