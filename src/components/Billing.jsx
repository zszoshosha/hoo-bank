import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

// Billing section: reversed layout - image on left, info on right (stacks on mobile)
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Image container with decorative gradient blurs */}
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &amp;
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      {/* App store download buttons */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple-store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
        />
        <img
          src={google}
          alt="google-play"
          className="w-[128px] h-[42px] object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
        />
      </div>
    </div>
  </section>
);

export default Billing;
