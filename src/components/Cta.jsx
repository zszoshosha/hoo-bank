import styles from "../style";
import Button from "./Button";

const CTA = () => (
<section className={`${styles.flexCenter} ${styles.marginX} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={`flex-1 flex-col flex`} >
        <h2 className={`${styles.heading2}`}>lets try our services now!</h2>
        <p className={`${styles.paragraph} max-w[470px]`}> every thing you need to accept card payments and your business anywhere on the planet</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
    </div>
</section>
);

export default CTA;
