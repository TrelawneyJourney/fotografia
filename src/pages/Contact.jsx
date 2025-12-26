export default function Contact() {
  return (
    <main
      className="h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}photos/gala/8.jpg)`,
      }}
    >
      <div className="mt-4 md:mt-6 shadow-lg shadow-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white bg-neutral-800/50 backdrop-blur-lg backdrop-opacity-60 p-4 md:p-6">
          {/* columna izquierda */}
          <div className="">
            <h2 className="text-2xl md:text-4xl font-pt tracking-wide mb-2 md:mb-4">
              Contactame
            </h2>
            <address className="not-italic space-y-1 md:space-y-2 text-sm md:text-base font-light tracking-widest">
              <p>📞22354646464</p>
              <p>📩email@galafotografia.com</p>
              <p>📍Mar del Plata</p>
            </address>
          </div>

          {/* columna derecha */}
          <form
            action=""
            method="post"
            className="flex flex-col justify-center gap-2 md:gap-4 mt-8 md:mt-0"
          >
            <div class="flex flex-col">
              <label for="name" className="font-light tracking-widest">
                Nombre
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="w-100 mt-1 md:mt-2 py-2 md:py-3 px-3 rounded-lg bg-white border border-neutral-400 text-neutral-800 font-semibold focus:border-white focus:outline-1"
              />
            </div>

            <div class="flex flex-col">
              <label for="email" className="font-light tracking-widest">
                Telefóno
              </label>
              <input
                type="tel"
                name="telefono"
                id="telefono"
                className="w-100 mt-1 md:mt-2 py-2 md:py-3 px-3 rounded-lg bg-white border border-neutral-400 text-neutral-800 font-semibold focus:border-white focus:outline-1"
              />
            </div>

            <div class="flex flex-col">
              <label for="message" class="font-light tracking-widest">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="w-100 mt-1 md:mt-2 py-2 md:py-3 px-3 rounded-lg bg-white border border-neutral-400 text-neutral-800 font-light focus:border-white focus:outline-1"
              ></textarea>
            </div>

            <button
              type="submit"
              className="self-start md:w-32 bg-neutral-900 text-white py-3 px-6 rounded-lg mt-3 hover:bg-neutral-500 transition ease-in-out duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
