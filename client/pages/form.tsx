import React from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";

type ContactFormProps = {
  primaryName: string;
  primaryEmail: string;
  primaryPhone: string;
  secondaryName: string;
  secondaryEmail: string;
  secondaryPhone: string;
};

const resolver: Resolver<ContactFormProps> = async (values) => {
  return {
    values: values.primaryName && values.secondaryName ? values : {},
    errors: {
      ...(values.primaryName
        ? {}
        : {
            primaryName: {
              type: "required",
              message: "Primary name is required.",
            },
          }),
      ...(values.secondaryName
        ? {}
        : {
            secondaryName: {
              type: "required",
              message: "Secondary name is required.",
            },
          }),
    },
  };
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>({ resolver });
  const onSubmit: SubmitHandler<ContactFormProps> = (data) =>
    console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl rounded-lg shadow-lg bg-gray-800 p-8"
      >

        <div className="border-2 border-gray-700 rounded-lg m-4 flex">
          <div className="w-1/2 p-4">
            <h3 className="text-lg font-bold text-white">Primary Contact</h3>
            <label htmlFor="primaryName" className="text-gray-300">
              Name
            </label>
            <input
              id="primaryName"
              name="primaryName"
              type="text"
              {...register("primaryName")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.primaryName && (
              <span className="text-red-500">{errors.primaryName.message}</span>
            )}
            <label htmlFor="primaryEmail" className="text-gray-300">
              Email
            </label>
            <input
              id="primaryEmail"
              name="primaryEmail"
              type="email"
              {...register("primaryEmail")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.primaryEmail && (
              <span className="text-red-500">Email is invalid</span>
            )}
            <label htmlFor="primaryPhone" className="text-gray-300">
              Phone
            </label>
            <input
              id="primaryPhone"
              name="primaryPhone"
              type="tel"
              {...register("primaryPhone")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.primaryPhone && (
              <span className="text-red-500">Phone is invalid</span>
            )}
          </div>
          <div className="w-1/2 p-4">
            <h3 className="text-lg font-bold text-white">Secondary Contact</h3>
            <label htmlFor="secondaryName" className="text-gray-300">
              Name
            </label>
            <input
              id="secondaryName"
              name="secondaryName"
              type="text"
              {...register("secondaryName")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.secondaryName && (
              <span className="text-red-500">
                {errors.secondaryName.message}
              </span>
            )}
            <label htmlFor="secondaryEmail" className="text-gray-300">
              Email
            </label>
            <input
              id="secondaryEmail"
              name="secondaryEmail"
              type="email"
              {...register("secondaryEmail")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.secondaryEmail && (
              <span className="text-red-500">Email is invalid</span>
            )}
            <label htmlFor="secondaryPhone" className="text-gray-300">
              Phone
            </label>
            <input
              id="secondaryPhone"
              name="secondaryPhone"
              type="tel"
              {...register("secondaryPhone")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.secondaryPhone && (
              <span className="text-red-500">Phone is invalid</span>
            )}
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-8 px-4 py-2 text-lg font-mono font-bold text-red-500 bg-gray-800 rounded hover:bg-gray-700"
        />
      </form>
    </div>
  );
}
