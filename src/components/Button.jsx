const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-full
      hover:opacity-90 hover:scale-105 transition-all duration-300 ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
