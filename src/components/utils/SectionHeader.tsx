const SectionHeader = ({ title }: { title?: string; number?: string }) => (
  <div className="mb-10 flex flex-row items-center">
    <h2 className="heading relative mx-0 flex flex-none items-center">{title}</h2>
    <div className="ml-6 h-0 flex-grow border border-secondary-200"></div>
  </div>
)

export default SectionHeader
