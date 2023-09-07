import './footerStyle.css'

export default function footer(){

    return(

        <div className='footer-container'>
        
            <div className='footer-section'>
            
                <div className='left'>
                    <div className='left-name'>FUNANANI NEKHUNGUNI</div>

                    <br/>
                    <br/>
                    <div className='left-desc'> 
                        A web and mobile developer with a keen interest in AI and data science
                    </div>
                    <div className='left-desc'></div>
            
                </div>
                
                <div className='right'>
                    <div className='left-name'>SOCIAL</div>

                
                
                </div>
            
            </div>
          
            <hr className='line'/>
            <div className="date">
            
            © Copyright  {new Date().getFullYear()} FUNANANI NEKHUNGUNI
            </div>
            <br/>
        
        
        </div>
    )
}