import '../navbarDesktop/navbarDesktop.css';

export default function NavbarDesktop(){
    return(
       <section className="navbar">
            <div className="navbar__container-image">
                <img src="" className="container-image__image" />
            </div>
            <ul className="navbar__list">
                <li className="list-item" id='navbar-my-projects'>My Projects</li>
                <li className="list-item" id='navbar-skills'>Skills</li>
                <li className="list-item" id='navbar-about-me'>About Me</li>
                <li className="list-item" id='navbar-contact-me'>Contact Me</li>
            </ul>
       </section>
    );
}
