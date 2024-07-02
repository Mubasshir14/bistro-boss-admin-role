

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mt-20 md:w-[424px] mx-auto">
            <p className="text-[#D99904] text-sm mb-4 border-b-4 pb-4  text-center border-b-[#E8E8E8]">{subHeading}</p>
            {/* <hr className="text-[#E8E8E8] h-[4px]" /> */}
            <p className="mt-5 text-2xl md:text-4xl font-normal uppercase pb-4 border-b-4  text-center border-b-[#E8E8E8]">{heading}</p>
            {/* <hr className="text-[#bda3a3] h-[4px]" /> */}
        </div>
    );
};

export default SectionTitle;