const SectionHeader = ({ number, title }: { title?: string; number?: string }) => (
  <div className="flex flex-row items-center mb-10">
    <h2 className="flex-none text-3xl relative mx-0 flex items-center font-mono text-[clamp(26px,5vw,32px)] font-semibold text-textBase">
      <span className="mr-1 font-normal text-secondary">{number}.</span>
      {title}
    </h2>
    <div className="flex-grow ml-4 border border-[#112240] h-0"></div>
  </div>
);

export default SectionHeader;