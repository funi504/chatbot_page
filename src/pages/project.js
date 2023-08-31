import './projectStyle.css'
import image1 from '../images/12345.jpg'
import image2 from '../images/blogApp.jpg'
import image3 from '../images/phoneApp.jpg'


export function project(){

    return(

        <div className= 'project-container' id='project'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='project-tag'>PROJECTS</div>
            <div className='project'>
            <div className='project-picture'>
                <img src={image1} alt="project" className='project-img'/>
            
            </div>
            <div className='project-info'>
                <div className='project-header'>DEEP FAKE 0</div>
                <br/>
                <br/>
                <div className='project-desc'>The app uses artificial neural networks to detect deep fake images. 
                    By analyzing the image's features and patterns, the app can determine 
                    whether or not it is authentic
                </div>
                <br/>
                <br/>
                <div className='codeButton'>View</div>
            </div>
            </div>

            <div className='project'>
            <div className='project-picture'>
                <img src={image2} alt="project" className='project-img'/>
            
            </div>
            <div className='project-info'>
                <div className='project-header'>WRITERS CORNER</div>
                <br/>
                <br/>
                <div className='project-desc'>a versatile app designed for both reading articles and writing on-the-go
                users can also write their own pieces directly within the app
                </div>
                <br/>
                <br/>
                <div className='codeButton'>View</div>
            </div>
            </div>


            <div className='project'>
            <div className='project-picture'>
                <img src={image3} alt="project" className='project-img'/>
            
            </div>
            <div className='project-info'>
                <div className='project-header'>COMSIDY</div>
                <br/>
                <br/>
                <div className='project-desc'> a life-saving app designed to quickly 
                connect users with emergency medical services. With Emergency Call,
                 users can request an ambulance with just a few taps on their phone screen.
                </div>
                <br/>
                <br/>
                <div className='codeButton'>View</div>
                <br/>
                <br/>
            </div>
            </div>
        </div>
        )

}

export default project