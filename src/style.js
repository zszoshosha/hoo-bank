// Reusable style constants for consistent spacing, typography, and layout across all components
const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  // Responsive heading: scales down on mobile (40px) and up on larger screens (48px)
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  // Body text style with slightly muted white for readability
  paragraph:
    "font-poppins font-normal text-dimWhite text-[16px] xs:text-[18px] leading-[28px] xs:leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  // Responsive horizontal padding: tighter on mobile (px-4), wider on tablet+ (px-16)
  paddingX: "sm:px-16 px-4 xs:px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-4 xs:px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-4 xs:mx-6",
  marginY: "sm:my-16 my-6",
};

// Layout presets for two-column sections that stack vertically on mobile
export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
