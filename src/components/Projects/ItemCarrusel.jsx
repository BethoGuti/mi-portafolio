export const ItemCarrusel = ({project}) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full px-3">
        <div className="w-full basis-1/2">
          <img
            className="object-contain rounded-t-lg md:rounded-none md:rounded-s-lg w-full  shadow-lg"
            src={project.img}
            alt="Administrador de reportes"
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal basis-1/2">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
          <p className="mb-3 text-sm lg:text-base font-normal text-gray-700 text-justify dark:text-gray-400">
            {project.description}
          </p>
          <div>
            <h6 className="text-mb font-bold my-2">Tecnologías:</h6>
            <div className="flex flex-row mt-1 content-center">
              {
                project.technologies.map( technologie => technologie )
              }
            </div>
          </div>
          <a className="m-auto" href={project.linkProject} target="_blank">
            <img src="/browser-svgrepo-com.svg" className="w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};
