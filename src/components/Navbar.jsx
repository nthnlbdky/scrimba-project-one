import logo from '../images/react_logo.png';

const Navbar = () => {
    return(
        <nav>
            <img src={logo} className="nav--logo"/>
            <h1 className='nav--logo_text'>ReactFacts</h1>
            <h2 className='nav--title'>React Course-Project 1</h2>
        </nav>
        
        
    )
}

export default Navbar