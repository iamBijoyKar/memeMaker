import './Header.css';
import github from '../media/github.png';
import twitter from '../media/twitter.png';


function Header(){


    return(
        <header className='header'>
            <h2 className='heading'>
                Meme Hospital
            </h2>
            <div className='links'>
                <a href='https://github.com/iamBijoyKar'  className='link'>
                    <img src={github} className='link-img' alt=''/>
                </a>
                <a href='https://twitter.com/iamBijoyKar'  className='link'>
                    <img src={twitter} className='link-img' alt=''/>
                </a>
            </div>
        </header>
    )
}
export default Header ;
