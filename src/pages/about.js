import "./aboutStyle.css"
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiWechatLogoThin } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";

export function About(){

    return(
        <div className="about-container" id='about'>
            <div className="about-header">
                <h1 className='about-header-tag'>Elevating Support Services to Unprecedented Excellence</h1>
                <p className='about-header-slogan'>
                    Accelerate the achievement of your team and customers' objectives with our assistance
                </p>
            </div>
            <div className="about-product-cards">
                <div className='card'>
                    <div className='card-icon'>
                        <RiCustomerService2Fill size={150} color={'rgb(14, 192, 247)'}/>
                    </div>
                    <h2 className='card-tag'>Support Services 24/7</h2>
                    <p className='card-info'>
                    Experience hassle-free issue resolution and instant query responses,
                    tailored to your schedule. Elevate your support experience with our
                    always-available chatbot service.
                    </p>
                
                </div>

                <div className='card'>
                    <div className='card-icon'>
                        <PiWechatLogoThin size={150} color={'rgb(14, 192, 247)'}/>
                    </div>
                    <h2 className='card-tag'>Enriched customer interaction</h2>
                    <p className='card-info'>
                    Effortlessly integrate email and WhatsApp into our bot for seamless 
                    cross-platform communication.
                    providing customers with a streamlined interaction experience.
                    </p>
                </div>

                <div className='card'>
                    <div className='card-icon'>
                        <BsGraphUpArrow size={150} color={'rgb(14, 192, 247)'} />
                    </div>
                    <h2 className='card-tag'>Boost team productivity</h2>
                    <p className='card-info'>
                    Automate answering repetitive questions to free up 
                    your team's bandwidth for tackling more complex cases, 
                    optimizing productivity and customer satisfaction.
                    </p>
            
                </div>
            
            </div>
        </div>
        
        )
}

export default About