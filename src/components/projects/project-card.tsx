interface ProjectCard {
  title?: string;
  description?: string;
  image?: string;
  stacks?: string[];
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  stacks,
  link
}: ProjectCard) => {
  return (
    <div className="card-project w-full md:min-w-[500px] mr-10 group h-full mx-0">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-[300px] overflow-hidden border-b-4 border-black bg-neutral-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-black mb-3 text-black uppercase tracking-tight border-b-2 border-black pb-2">
            {title}
          </h3>
          <p className="text-neutral-700 text-sm leading-relaxed mb-4 font-medium min-h-20">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {stacks?.map((stack, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 cursor-default"
              >
                {stack}
              </span>
            ))}
          </div>

          <a
            href={link}
            className="inline-block w-full text-center px-6 py-3 bg-yellow-300 border-4 border-black font-black uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5"
          >
            View Project →
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;