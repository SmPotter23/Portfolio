import './home.css';
import NavbarDesktop from "../../components/navbarDesktop/navbarDesktop";
import MyProjects from '../MyProjects/myProjects';
import Skills from '../Skills/skills';
import AboutMe from '../AboutMe/aboutMe';
import ContactMe from '../ContactMe/contactMe';
import { useEffect, useState } from 'react';

export default function Home(){
    const [myProjects, setMyProjectsVisible] = useState(false);
    const [skills, setSkillsVisible] = useState(false);
    const [aboutMe, setAboutMeVisible] = useState(false);
    const [contactMe, setContactMeVisible] = useState(false);

    useEffect(()=>{ 
        const listItemMyProjects = document.getElementById("navbar-my-projects");
        const listItemSkills = document.getElementById("navbar-skills");
        const listItemAboutMe = document.getElementById("navbar-about-me");
        const listItemContactMe= document.getElementById("navbar-contact-me");

        listItemMyProjects.addEventListener("click", ()=>{
            changeTabs("myProjectsTab");
        });
        listItemSkills.addEventListener("click", ()=>{
            changeTabs("skillsTab");
        });
        listItemAboutMe.addEventListener("click", ()=>{
            changeTabs("aboutMeTab");
        });
        listItemContactMe.addEventListener("click", ()=>{
            changeTabs("contactMeTab");
        });
    });

    function hideTabs(){
        setMyProjectsVisible(false);
        setSkillsVisible(false);
        setAboutMeVisible(false);
        setContactMeVisible(false);
    }
    function changeTabs(tabVisible){
        hideTabs();
        switch(tabVisible){
            case "myProjectsTab":
                setMyProjectsVisible(true);
            case "skillsTab":
                setSkillsVisible(true);
            case "aboutMeTab":
                setAboutMeVisible(true);
            case "contactMeTab":
                setContactMeVisible(true);
        }
    }
    function showTabs(){
        if(myProjects){
            return <MyProjects />;
        }
        if(skills){
            return <Skills />
        }
        if(aboutMe){
            return <AboutMe />
        }
        if(contactMe){
            return <ContactMe />
        }
    }
    return(
        <>
            <NavbarDesktop />
            <section className="container-section-view" id="container-section-view">
                { showTabs() }
            </section>
        </>
    );
}