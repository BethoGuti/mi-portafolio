export const Header = () => {
  return (
    <div className="relative isolate px-5 pt-1 lg:px-8 min-h-screen max-h-screen flex flex-wrap justify-normal content-center">
      <div className="mx-auto md:px-24 py-28 sm:py-48 lg:py-44">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="w-full lg:w-7/12 px-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-3xl lg:text-5xl text-gray-300 text-center">
              ¡Hola soy Alberto Gutierrez!
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-400 text-justify">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="w-5/12">
            <img src="/img-header.JPEG" className="mt-7 sm:w-96  block m-auto"/>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="/Alberto-Gutierrez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Alberto-Gutierrez.pdf"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
