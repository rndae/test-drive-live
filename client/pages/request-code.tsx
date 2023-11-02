import React from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";

type ContactFormProps = {
  primaryName: string;
  primaryEmail: string;
  primaryPhone: string;
  yourProduct: string;
};

const resolver: Resolver<ContactFormProps> = async (values) => {
  return {
    values: values.primaryName && values.primaryEmail ? values : {},
    errors: {
      ...(values.primaryName
        ? {}
        : {
            primaryName: {
              type: "required",
              message: "Name is required.",
            },
          }),
      ...(values.primaryEmail
        ? {}
        : {
            primaryEmail: {
              type: "required",
              message: "Email address is required.",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-40% from-gray-900 to-pink-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl rounded-lg shadow-lg bg-gray-800 p-8"
      >
        <div className="flex">
          <div className="w-1/2 p-4">
            <h1 className="text-gray-400 hover:text-gray-600">Submit your product</h1>
            <h3 className="text-lg font-bold text-white"><br></br> Your contact information</h3>
            <label htmlFor="primaryName" className="text-gray-300">
              Name
            </label>
            <input
              id="primaryName"
              
              type="text"
              {...register("primaryName")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.primaryName && (
              <span className="text-red-500">{errors.primaryName.message} <br></br></span>
            )}
            <label htmlFor="primaryEmail" className="text-gray-300">
              Email
            </label>
            <input
              id="primaryEmail"
              
              type="email"
              {...register("primaryEmail")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.primaryEmail && (
              <span className="text-red-500">Email is invalid.<br></br></span> 
            )}
            <label htmlFor="primaryPhone" className="text-gray-300">
              Phone
            </label>
            <input
              id="primaryPhone"
              
              type="tel"
              {...register("primaryPhone")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.primaryPhone && (
              <span className="text-red-500">Phone is invalid <br></br></span>
            )}

            <label htmlFor="yourProduct" className="text-gray-300">
              Your Product
            </label>
            <input
              id="yourProduct"
              
              type="tel"
              {...register("yourProduct")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />

            <label htmlFor="yourProduct" className="text-gray-300">
              Company name
            </label>
            <input
              id="yourProduct"
              
              type="tel"
              {...register("yourProduct")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
          </div>
          
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-8 px-4 py-2 text-lg font-mono font-bold text-pink-700 bg-gray-700 rounded hover:bg-gray-700"
        />
      </form>
    </div>
  );
}
