import './navStyle.css'
import logo from '../images/logo.jpg'

export function nav(){

    return (

        <div className= "container" >
            <div className= "nav">
                <img src={logo} alt="Logo" />
                <div className="nav-brand">ARCHITEC</div>
                <div className="nav-ul">
                    <ul><a href='#home'>HOME</a></ul>
                    <ul><a href='#about'>PRODUCT</a></ul>
                    <ul><a href='#project'>DOCS</a></ul>
                    <ul><a href='#contact' className='sign-in'>SIGN IN</a></ul>
                </div>
            </div>
        
        </div>
        
        )
}

export default nav