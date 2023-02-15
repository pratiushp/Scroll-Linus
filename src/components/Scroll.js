import SFD from "../image/logo.png";
import classes from "./Scroll.module.css";

const Scroll = () => {
  return (
    <>
      <div className={classes.content}>
        <div className={classes.main}>
          <img src={SFD} alt="studio dark room" />
          <h1 className={classes.head}> SMOOTH SCROLL</h1>
        </div>
        <div className={classes.last}>
          <span>© 2023 STUDIO FREIGHT</span>
        </div>

        <div className={classes.right}>
          <div className={classes.scroll}>
            <span>SCROLL</span>
            <span> TO EXPLORE</span>
          </div>

          <div className={classes.new}>
            <span>A NEW SMOOTH SCROLL LIBRARY </span>
            <span>FRESH OUT OF THE</span>
            <span> STUDIO FREIGHT DARKROOM</span>
          </div>
          <div>
            <button>Check it out on GitHub</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scroll;
