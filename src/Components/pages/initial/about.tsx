export const About = () => {
  // const stats = [
  //   { name: "Advogados competentes", value: "12" },

  //   { name: "Horas por dia", value: "24" },
  // ];
  return (
    <div
      className="relative  isolate overflow-hidden bg-gradient-to-t 
    from-white to-gray-200
 pt-2 pb-12"
      id="about"
    >
      <div className="relative isolate overflow-hidden   py-4 sm:py-2 lg:overflow-visible lg:px-0">
        <div
          className="relative isolate overflow-hidden bg-gradient-to-t 
    from-white to-gray-200  py-24 sm:py-32 lg:overflow-visible lg:px-0"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
        </div>
        <div className=" px-6 bg-white mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Sobre nós
                </h1>
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex -ml-12 font-xs  -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gradient-to-r   to-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/fundo genius.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl  leading-7 font-xs  text-gray-700 lg:max-w-lg">
                <p className="mt-4  text-black text-justify">
                  Criada para que você evite problemas futuros com o judiciário,
                  ou, quando já criado, possa te oferecer o mais amplo e eficaz
                  quadro da advocacia moderna, voltada a garantir toda a defesa
                  de nossos clientes.
                </p>

                <p className="mt-4 text-black text-justify">
                  A Assessoria Jurídica Administrativa da GENIUS pode orientar e
                  ajudar você a não cair nas garras dos Tribunais, onde as ações
                  de alongam por muitos anos.
                </p>
                <p className="mt-4 text-black text-justify">
                  Os profissionais estarão à sua disposição, em uma consulta por
                  videoconferência, com a duração de até 40 minutos, todas
                  individualizadas.
                </p>
                <p className="mt-4  text-black text-justify">
                  Você terá tempo para tirar todas as suas dúvidas que
                  atrapalham o seu desenvolvimento profissional e emocional,
                  pois temos a plena consciência das muitas dificuldades em
                  entender as várias faces do Direito.
                </p>
                <p className="mt-4  text-black text-justify">
                  Nosso entendimento é que o direito é uma ciencia social que
                  visa resolver e estabelecer uma harmonia igualitária entre as
                  pessoas, através de regras de convivência assegurando direitos
                  e obrigações por meio de leis e afins.
                </p>
                <p className="mt-4 text-black text-justify">
                  Um dos meios eficazes da pessoa evitar o prejuízo financeiro;
                  o mal social e psicológico é buscando o aconselhamento de um
                  advogado(a) antes de qualquer iniciativa (comprar, vender,
                  alugar, consignar, afiançar, permutar, contratar, divorciar,
                  conviver, etc); evitando, assim, grandes prejuízos
                  financeiros, afetivos e morais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
