import "./aboutStyle.css"

export function About(){

    return(
        <div className="about-container" id='about'>
            <br/>
            <br/>
            <br/>
            <div className="about-tag"> ABOUT ME</div>
            <br/>
            <div className= "short-desc">Here you will find more information about me,
                 what I do, and my current skills mostly in terms of programming and technology
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="about-info">

                <div >

                    <div className= 'about-info-header'>Get to know me!</div>
                    <br/>
                    <div className= 'about-info-tag'>
                    As a web and mobile developer with a keen interest in AI and data science,
                     I have experience in developing innovative solutions that harness the power
                      of these technologies to create impactful and data-driven applications.
                       
                    </div>
                    <br/>
                    <div className= 'about-info-tag'>
                    My portfolio showcases my skills and expertise in developing web and mobile
                    applications that are intuitive, user-friendly, and highly functional.
                    
                    </div>
                    <br/>
                    <div className= 'about-info-tag'>
                    One of my most recent projects involved the development 
                    of a mobile app that uses machine learning algorithms to 
                    detect deep fake images.
                    </div>
                
                </div>

                <br/>

                <div>
                <div className= 'about-info-header-skills'>My Skills</div>
                
                <br/>
                <div className="skills-style">
                    <div className='skills'>REACT</div>
                    <div className='skills'>REACT NATIVE</div>
                    <div className='skills'>PYTORCH</div>
                    
                </div>
                
                <div className="skills-style">
                    <div className='skills'>GIT</div>
                    <div className='skills'>GITHUB</div>
                    
                </div>
                <div className="skills-style">
                    <div className='skills'>JAVASCRIPT</div>
                    <div className='skills'>PYTHON</div>
                </div>
                </div>
            </div>
           
        </div>
        
        )
}

export default About