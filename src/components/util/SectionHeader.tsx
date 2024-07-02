const SectionHeader = ({ number, title }: { title?: string; number?: string }) => (
  <div className="mb-10 flex flex-row items-center">
    <h2 className="relative mx-0 flex flex-none items-center font-mono text-3xl text-[clamp(26px,5vw,32px)] font-semibold text-textBase">
      <span className="mr-1 font-normal text-secondary">{number}.</span>
      {title}
    </h2>
    <div className="ml-4 h-0 flex-grow border border-tri"></div>
  </div>
)

export default SectionHeader
