import '../MyProjects/myProjects.css';
import JsIcon from '../../assets/js-icon.png';
import HtmlIcon from '../../assets/html-icon.png';
import CssIcon from '../../assets/css-icon.png';
import CsharpIcon from '../../assets/csharp-icon.png';
import { useEffect } from 'react';

export default function MyProjects(){
    return(
        <>  
            <div className="container-text">
                <h1 className="container-text__title">Samuel Arredondo</h1>
                <h2 className="container-text__subtitle">Junior Web Developer</h2>
            </div>
           
            <div className="container-images">
                <div className="container-images__images">
                    <img src={JsIcon} alt="" className="images-image" />
                </div>
                <div className="container-images__images">
                    <img src={HtmlIcon} alt="" className="images-image" />
                </div>
                <div className="container-images__images">
                    <img src={CssIcon} alt="" className="images-image" />
                </div>
                <div className="container-images__images">
                    <img src={CsharpIcon} alt="" className="images-image" />
                </div>
            </div>

            <div className="container-subsection">
                <h2 className="container-subsection__text">My Projects</h2>
            </div>

            <div className="cards">
                <div className="cards__card" id="card-project">
                    <div className="card__text-top">
                        <h3>Project Name</h3>
                    </div>
                    <div className="card__text-bottom">
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit.  sagittis suscipit e 
                            aptent viverra Lo.
                        </p>
                    </div>
                </div>
                <div className="cards__card" id="card-project">
                    <div className="card__text-top">
                        <h3>Project Name</h3>
                    </div>
                    <div className="card__text-bottom">
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit.  sagittis suscipit e 
                            aptent viverra Lo.
                        </p>
                    </div>
                </div>
                <div className="cards__card" id="card-project">
                    <div className="card__text-top">
                        <h3>Project Name</h3>
                    </div>
                    <div className="card__text-bottom">
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit.  sagittis suscipit e 
                            aptent viverra Lo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}