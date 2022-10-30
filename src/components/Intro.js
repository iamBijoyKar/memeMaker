import "./Intro.css";
// import Header from "./Header";
import rightArrow from '../media/right-arrow.png';
import memeImg from '../media/meme.png';
const Intro = () => {
  return (
    <section className="section section1">
      {/* <div className="custom-shape-divider-top-1667127807">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
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
        <button type="submit"  className="intro-btn">
            Get Started <img src={rightArrow} alt="" className="arrow-img" />
        </button>
      </div>
    </section>
  );
};
export default Intro;
