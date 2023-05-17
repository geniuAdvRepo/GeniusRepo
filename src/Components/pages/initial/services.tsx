import { Button } from "@mui/material";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import DailogServices from "./dialogServices";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number => Math.min(Math.max(number, min), max);
type dataType = {
  title: string;
  subtitle: string;
  text: string;
  info: {
    text: string;
    topics: string[];
  };
};
export const Services = () => {
  const options: EmblaOptionsType = { loop: true, dragFree: true, containScroll: "trimSnaps" };
  const [open, setOpen] = useState(false);
  const [dataItem, setDataItem] = useState<dataType | undefined>();

  const handleClickOpen = (item: dataType) => {
    setDataItem(item);
    setOpen(true);
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      if (!emblaApi.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);
  return (
    <>
      <DailogServices open={open} setOpen={setOpen} item={dataItem} />
      <div className="embla">
        <div className="embla__viewport px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" ref={emblaRef}>
          <div className="embla__container grid grid-cols-2 gap-8 row-gap-5 lg:grid-cols-4">
            {dataCards.map((item, index) => (
              <div className="embla__slide" key={index}>
                <button
                  onClick={() => {
                    handleClickOpen(item);
                  }}
                  className=" cursor-pointer relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl cardMensured"
                >
                  <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-PrimaryLight  group-hover:scale-x-100" />
                  <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
                  <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0   group-hover:scale-x-100" />
                  <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0   group-hover:scale-y-100" />
                  <div className="relative p-5 h-full bg-white  rounded-sm">
                    <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full p-1 bg-Primary lg:mb-0">
                        <svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M200.99 814.55c-23.52-39.54-24.45-87.29-2.48-127.71l214.17-394.27h127.24l119.46 218.25 64.14-35.11-100.24-183.14h35.02v-73.14h-33.39l69.95-146.29H256l76.33 146.29h-39.76v73.14h36.84l-195.2 359.34c-34.39 63.34-32.93 138.11 3.91 200.04s101.86 98.91 173.91 98.91h89.3v-73.14h-89.3c-46-0.01-87.52-23.61-111.04-63.17z m175.68-668.26h202.14l-34.98 73.14H414.84l-38.17-73.14z"
                            fill="#0F1F3C"
                          />
                          <path
                            d="M914.29 731.43V548.57H475.44v109.71H402.3v182.86h73.14v109.71H914.29V768h-73.14v-36.57h73.14z m-73.14-109.72v36.57h-36.57v-36.57h36.57z m-292.57 0h182.86v36.57H548.58v-36.57z m-73.14 109.72H658.3V768H475.44v-36.57z m73.14 146.28v-36.57h182.85v36.57H548.58z m292.57 0h-36.57v-36.57h36.57v36.57zM731.44 768v-36.57h36.57V768h-36.57z"
                            fill="#0F1F3C"
                          />
                        </svg>
                      </div>
                      <h6 className="font-semibold leading-5">{item.title}</h6>
                    </div>
                    <h6 className=" text-black leading-10">{item.subtitle}</h6>
                    <p className="mb-2 text-sm text-gray-900">{item.text}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  );
};
type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};
export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props;

  return <button className={"embla__dot".concat(selected ? " embla__dot--selected" : "")} type="button" onClick={onClick} />;
};

type PrevNextButtonPropType = {
  enabled: boolean;
  onClick: () => void;
};

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button className="embla__button embla__button--prev" onClick={onClick} disabled={!enabled}>
      <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
        <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
      </svg>
    </button>
  );
};

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button className="embla__button embla__button--next" onClick={onClick} disabled={!enabled}>
      <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
        <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
      </svg>
    </button>
  );
};

const dataCards: dataType[] = [
  {
    title: "ASSESSORIA PREVENTIVA",
    subtitle: "Prevenção de Riscos",
    text: "Ambiente seguro e saudável é essencial para o bem-estar dos trabalhadores. Empresas devem proporcionar um ambiente livre de riscos com medidas preventivas, como treinamentos, EPIs e incentivar trabalhadores a reportar situações de risco. Investir em prevenção é garantir um ambiente de trabalho seguro e saudável.",
    info: {
      text: "A assessoria preventiva é uma medida fundamental para garantir a segurança e saúde dos trabalhadores em um ambiente de trabalho. Ela consiste em um conjunto de ações que visam identificar e prevenir os riscos presentes nas atividades laborais, por meio de treinamentos, uso adequado de equipamentos de proteção individual (EPIs) e incentivo para que os trabalhadores reportem situações de risco. Com a assessoria preventiva, é possível reduzir os acidentes de trabalho e doenças ocupacionais, proporcionando um ambiente de trabalho mais seguro e saudável.",
      topics: [
        "Identificação de riscos",
        "Treinamentos de segurança",
        "Uso adequado de EPIs",
        "Incentivo para reportar situações de risco",
        "Redução de acidentes de trabalho",
        "Prevenção de doenças ocupacionais",
      ],
    },
  },
  {
    title: "DIREITO PREVIDENCIÁRIO",
    subtitle: "Revisão de Benefícios Previdenciários",
    text: "A revisão de benefícios previdenciários é um direito dos segurados do INSS quando acreditam que houve erro no cálculo ou na concessão do benefício. Pode ser solicitada a qualquer momento e é necessário apresentar documentos comprovando as inconsistências. A revisão pode aumentar ou diminuir o valor do benefício, e é importante contar com o auxílio de um advogado previdenciário para orientação e acompanhamento do processo.",
    info: {
      text: "A revisão de benefícios previdenciários é um direito garantido aos segurados do INSS que acreditam ter havido erro no cálculo ou na concessão do benefício. Para solicitar a revisão, é necessário apresentar documentos que comprovem as inconsistências no benefício. A revisão pode resultar em um aumento ou diminuição do valor do benefício, dependendo do caso. É importante contar com o auxílio de um advogado previdenciário para orientação e acompanhamento do processo de revisão de benefícios previdenciários.",
      topics: [
        "Direitos dos segurados do INSS",
        "Solicitação de revisão de benefícios previdenciários",
        "Documentos necessários para comprovar inconsistências",
        "Aumento ou diminuição do valor do benefício",
        "Auxílio de um advogado previdenciário",
      ],
    },
  },
  {
    title: "AÇÕES DE RECLAMAÇÃO TRABALHISTA",
    subtitle: "Defesa dos Direitos Trabalhistas",
    text: "As ações de reclamação trabalhista são um mecanismo legal utilizado por trabalhadores para exigir o cumprimento de seus direitos trabalhistas e garantias. Quando o empregado considera que a empresa ou empregador agiu de forma irregular ou ilegal, como por exemplo, não pagar salários, férias ou outros benefícios, pode apresentar uma reclamação trabalhista para obter uma reparação ou compensação financeira. Essa ação é movida perante a Justiça do Trabalho e pode resultar em uma decisão judicial para resolver o conflito.",
    info: {
      text: "As ações de reclamação trabalhista são um mecanismo legal utilizado pelos trabalhadores para exigir o cumprimento de seus direitos trabalhistas e garantias. Essa ação pode ser movida perante a Justiça do Trabalho quando o empregado considera que a empresa ou empregador agiu de forma irregular ou ilegal, como por exemplo, não pagar salários, férias ou outros benefícios. O objetivo da ação é obter uma reparação ou compensação financeira. É importante contar com o auxílio de um advogado trabalhista para orientação e acompanhamento do processo.",
      topics: ["direitos trabalhistas", "reparação financeira", "advogado trabalhista"],
    },
  },
  {
    title: "REFORMAS TRABALHISTAS",
    subtitle: "Modernização das Relações Trabalhistas",
    text: "As reformas trabalhistas são alterações nas leis trabalhistas do país, que visam modernizar e adequar as relações entre empregadores e empregados. Geralmente, as reformas trabalhistas são propostas pelo governo e debatidas com sindicatos, trabalhadores e empresários para chegar a um consenso sobre as mudanças necessárias. Essas reformas podem incluir alterações na jornada de trabalho, salário mínimo, direitos e deveres de empregados e empregadores, entre outros.",
    info: {
      text: "As reformas trabalhistas são alterações nas leis trabalhistas do país, que visam modernizar e adequar as relações entre empregadores e empregados. Geralmente, as reformas trabalhistas são propostas pelo governo e debatidas com sindicatos, trabalhadores e empresários para chegar a um consenso sobre as mudanças necessárias. Essas reformas podem incluir alterações na jornada de trabalho, salário mínimo, direitos e deveres de empregados e empregadores, entre outros.",
      topics: ["leis trabalhistas", "relações entre empregadores e empregados", "reformas propostas pelo governo"],
    },
  },
  {
    title: "DIREITO DE FAMÍLIA",
    subtitle: "Proteção dos Interesses Familiares",
    text: " O direito de família é um ramo do direito que regula as relações familiares e as questões relacionadas ao casamento, divórcio, guarda de filhos, pensão alimentícia, adoção, entre outras. O objetivo do direito de família é proteger os interesses dos membros da família e garantir que as relações familiares sejam estabelecidas e mantidas de forma justa e equilibrada. Advogados especializados em direito de família podem ajudar a orientar e aconselhar as pessoas sobre seus direitos e deveres em questões familiares e a tomar as medidas legais necessárias para proteger seus interesses.",
    info: {
      text: "O Direito de Família é o ramo do direito que lida com as relações familiares e as questões jurídicas decorrentes dessas relações. Isso inclui casamento, divórcio, guarda de crianças, pensão alimentícia, adoção e proteção de vítimas de violência doméstica. O objetivo do Direito de Família é ajudar as famílias a lidar com as questões legais e proteger os interesses das partes envolvidas. Um advogado especializado em Direito de Família pode ajudar a orientar e aconselhar as partes envolvidas em questões familiares e ajudá-las a tomar as medidas legais necessárias para proteger seus interesses e resolver disputas de forma justa e equilibrada.",
      topics: ["Casamento", "Divórcio", "Guarda de crianças", "Pensão alimentícia", "Adoção", "Proteção de vítimas de violência doméstica"],
    },
  },
  {
    title: "DIREITO DO CONSUMIDOR",
    subtitle: "Definição e Objetivo",
    text: "O Direito do Consumidor é um conjunto de leis que tem como objetivo proteger os consumidores em suas relações com fornecedores de produtos ou serviços, garantindo informações claras, regras para publicidade e promoções, além de permitir a troca ou devolução de produtos defeituosos ou inadequados. Em caso de violação desses direitos, o consumidor pode buscar orientação jurídica ou recorrer ao Procon para tomar as medidas necessárias.",
    info: {
      text: "O Direito do Consumidor é o conjunto de leis e regulamentos que visam proteger os consumidores em suas relações com fornecedores de bens e serviços. O objetivo principal do Direito do Consumidor é garantir que os consumidores tenham acesso a informações claras sobre produtos e serviços e estejam protegidos contra práticas comerciais desonestas. Os consumidores têm direito a produtos e serviços de qualidade, seguros e que atendam às suas expectativas. Se um consumidor sentir que seus direitos foram violados, ele pode buscar orientação jurídica e tomar medidas legais para resolver o problema.",
      topics: ["Direitos do consumidor", "Responsabilidade dos fornecedores", "Publicidade e promoções", "Troca e devolução de produtos", "Defesa do consumidor"],
    },
  },
];
