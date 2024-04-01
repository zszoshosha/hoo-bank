import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
<div className="flex px-10 py-12 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card justify-between flex-col">
<img src={quotes} alt={name}  className="w-[24px] h-[27px] object-contain"/>
<p className="font-normal font-poppins leading-[23px] text-[18px] text-white my-10">{content}</p>
<div className="flex flex-row ">
<img src={img} className="rounded-full w-[48px] h-[48px]" />
<div className="flex flex-col ml-4">
<h4 className="font-semibold font-poppins leading-[23px] text-[20px] text-white">{name}</h4>
<p className="font-normal font-poppins leading-[24px] text-[16px] text-dimWhite">{title}</p>
</div>
</div>

</div>
);


export default FeedbackCard;
