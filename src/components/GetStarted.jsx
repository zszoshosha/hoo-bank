import styles from "../style";
import { arrowUp } from "../assets";

// Circular "Get Started" button with bounce animation that pauses on hover
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[100px] h-[100px] ss:w-[140px] ss:h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full animate-bounce hover:animate-none`}
    >
      <div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[14px] ss:text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[18px] h-[18px] ss:w-[23px] ss:h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[14px] ss:text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
