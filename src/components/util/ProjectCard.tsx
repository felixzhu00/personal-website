interface ProjectCardProps {
  image: string
  title: string
  description: string
  tags: string[]
  className?: string
}

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col rounded-lg bg-secondary shadow-md ${className}`}
    >
      {/* Image Section */}
      <div className="w-full h-3/5">
        <img src={image} className="h-full w-full rounded-lg object-cover" />
      </div>

      {/* Tags Section */}

      {/* Meta Data Section */}
      <div className="w-full p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-500 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-textAccent">{description}</p>
      </div>

      <button className=" text-sm bg-textAccent text-white py-2 px-4 mb-4 rounded-lg shadow-md hover:bg-primaryDark w-1/2 self-center">
        Learn More
      </button>
    </div>
  )
}

export default ProjectCard
