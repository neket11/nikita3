import { Link } from 'react-router-dom'

export function Header() {
    return (
        <>
            <nav className="deep-purple accent-1">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/' className='brand-logo'>
                            SPA React Project
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
