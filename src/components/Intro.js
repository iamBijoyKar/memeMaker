import "./Intro.css";
import * as Scroll from 'react-scroll';
// import Header from "./Header";
import rightArrow from '../media/right-arrow.png';
import memeImg from '../media/meme.png';
const Intro = () => {
  return (
    <section className="section section1">
      <div className="intro-sec">
        <h1 className="intro-heading">
            <div className="jumps">W</div>
            <div className="jumps">e</div>
            <div className="jumps">l</div>
            <div className="jumps">c</div>
            <div className="jumps">o</div>
            <div className="jumps">m</div>
            <div className="jumps">e</div>
            <span > </span>
            <div className="jumps">t</div>
            <div className="jumps">o </div>
            <span > </span>
            <div className="jumps">M</div>
            <div className="jumps">e</div>
            <div className="jumps">m</div>
            <div className="jumps">e </div>
            <span > </span>
            <div className="jumps">H</div>
            <div className="jumps">o</div>
            <div className="jumps">s</div>
            <div className="jumps">p</div>
            <div className="jumps">i</div>
            <div className="jumps">t</div>
            <div className="jumps">a</div>
            <div className="jumps">l</div>
        </h1>
        <p className="intro-des">
            Meme Hospital is a Meme Maker Web App. Make your meme and download Free! Or download the most popular memes.... 
        </p>
        <img src={memeImg} alt="" className="meme-img"/>
        <Scroll.Link  type="submit" to="editor" spy={true} smooth={true} offset={50} duration={500}  className="intro-btn">
            Get Started <img src={rightArrow} alt="" className="arrow-img" />
        </Scroll.Link>
      </div>
    </section>
  );
};
export default Intro;
