import logo from '../images/logo.svg';

export default function Header(props) {
    const {theme, handleToggle} = props;

    return (
        <header className={`header hero ${theme}`}>
            <img className="logo" src={logo} alt="React logo"/>
            <h3 className="hero">ReactFacts</h3>
            
            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={handleToggle}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>

        </header>
    )
}