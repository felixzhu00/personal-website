const SectionHeader = ({ number, title }: {title?:string, number?:string}) => (
  <h2 className="relative mx-0 mb-[40px] mt-[10px] flex w-full items-center font-mono text-[clamp(26px,5vw,32px);] font-semibold text-textBase">
    <span className="mr-[5px] font-normal text-secondary">{number}.</span>
    {title}
    <div className="mr-[20px] border top-[-5px] left-[20px] w-[300px] h-[1px] border-[#112240]"></div>
  </h2>
);

export default SectionHeader;
