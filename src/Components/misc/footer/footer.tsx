export const Footer = () => {
  return (
    <div
      className="relative  bg-deep-purple-accent-400 bg-gradient-to-b
                from-blue-900 
                to-slate-800 
                via-indigo-900 text-white"
    >
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-3">
            <a
              className="flex justify-center  gap-2 h-16 no-underline text-grey-darkest  hover:text-black"
              href="#"
            >
              <img
                src="./images/lgi.png"
                alt=""
                className=" h-full flex object-contain"
              />
              <img
                src="./images/txlg.png"
                alt=""
                className=" h-full flex object-contain p-2"
              />
            </a>

            <div className="mt-4 ">
              <p className="text-sm text-deep-purple-50">
                Nosso entendimento é que o direito é uma ciencia social que visa
                resolver e estabelecer uma harmonia igualitária entre as
                pessoas, através de regras de convivência assegurando direitos e
                obrigações por meio de leis e afins.
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                Um dos meios eficazes da pessoa evitar o prejuízo financeiro; o
                mal social e psicológico é buscando o aconselhamento de um
                advogado(a) antes de qualquer iniciativa (comprar, vender,
                alugar, consignar, afiançar, permutar, contratar, divorciar,
                conviver, etc); evitando, assim, grandes prejuízos financeiros,
                afetivos e morais.
              </p>
            </div>
          </div>
          <div className=" gap-5  lg:col-span-3 md:grid-cols-4">
            <div className="flex gap-2">
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Email:
              </p>

              <a href="mailto:geniusadv@outlook.com"> geniusadv@outlook.com</a>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Celular:
              </p>

              <a href="">+55 11 91288-2728</a>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Telefone:
              </p>

              <a href="">+55 11 4438-7535</a>
            </div>
            <div className="flex gap-2">
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Endereço:
              </p>

              <a href="">
                R. General Glicério, 926 - sala 22 <br /> Centro Santo André -
                SP, 09015-191
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2023 Genius Advocacia. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://instagram.com/genius.adv?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090955177071&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
