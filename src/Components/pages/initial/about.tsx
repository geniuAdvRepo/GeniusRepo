export const About = () => {
  const stats = [
    { name: "Advogados competentes", value: "12" },
    { name: "Casos resolvidos", value: "+300" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];
  return (
    <div
      className="relative isolate overflow-hidden bg-gradient-to-t
    from-white
 pt-2 pb-12"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Sobre nós</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <p className="mt-4 text-lg leading-8 text-black">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <p className="mt-4 text-lg leading-8 text-black">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-black">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
