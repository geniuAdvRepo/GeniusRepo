import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  description: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          subject: "Novo contato",
          ...data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        throw new Error(error);
      }

      setSuccess(true);
    } catch (error) {
      // setError(error.message);
    }
  };
  return (
    <div className="" id="message">
      <div className="flex flex-col max-w-screen-overflow-hidden   border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Envie a sua Mensagem!
          </h5>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nome:
              </label>
              <input
                {...register("name", { required: "Campo obrigatório" })}
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-PrimaryLight focus:border-PrimaryLight block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-600 dark:text-black dark:focus:ring-PrimaryLight dark:focus:border-PrimaryLight dark:shadow-sm-light"
                placeholder="Nome"
                required
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email:
              </label>
              <input
                {...register("email", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Email inválido",
                  },
                })}
                type="email"
                id="email"
                placeholder="jose@email.com"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-PrimaryLight focus:border-PrimaryLight block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-600 dark:text-black dark:focus:ring-PrimaryLight dark:focus:border-PrimaryLight dark:shadow-sm-light"
                required
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Dúvida ou Problema:
              </label>
              <textarea
                {...register("description", { required: "Campo obrigatório" })}
                id=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-PrimaryLight focus:border-PrimaryLight block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-600 dark:text-black dark:focus:ring-PrimaryLight dark:focus:border-PrimaryLight dark:shadow-sm-light"
                required
              />
              {errors.description && <span>{errors.description.message}</span>}
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="text-white bg-Primary
 hover:bg-PrimaryDark focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-PrimaryDark dark:hover:bg-Primary
 dark:focus:ring-PrimaryDark"
              >
                Enviar{" "}
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
