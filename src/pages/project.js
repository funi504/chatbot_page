import './projectStyle.css'
import image1 from '../images/12345.jpg'



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

            <div className='project-tag'></div>
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
        </div>
        )

}

export default project