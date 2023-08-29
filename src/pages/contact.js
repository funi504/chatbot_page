import './contactStyle.css'

export default function conntact(){

    return(

        <div className='contact-container' id='contact'>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='contact-tag'>CONTACT</div>
        <br/>
        <div className='contact-sub-tag'>Feel free to Contact me by submitting the form below and 
        I will get back to you as soon as possible</div>

        <br/>
        <br/>
            <div className='form'>
                <form className='form-i'>
                    <div className='form-label'>Name</div>
                    <input type="text"  className='form-input'/>
                    <br/>
                    <div className='form-label'>Email</div>
                    <input type="text"  className='form-input' />
                    <br/>
                    <div className='form-label'>Message</div>
                    <input type="text" className='form-input-msg'/>
                    <br/>
                    <div className='submit'>
                        <input type="submit" className='submit-input' />
                    </div>
                    <br/>
                    <br/>
                </form>
            
            
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
        
        </div>
        
        
        )
}