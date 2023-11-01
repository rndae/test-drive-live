import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";

import { pdfjs } from 'react-pdf';
import Image from "next/image";

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

const Home: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>({ resolver });
  const onSubmit: SubmitHandler<ContactFormProps> = (data) =>
    console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
              <Image src="/logo/_TD_LOGO_FOR_WEB.png" alt="Logo" width={200} height={200} />
      <span className="text-gray-200">
        Production and Distribution Agreement
      </span>
      <div className="w-full max-w-4xl mt-8 p-4 bg-gray-800 rounded shadow-lg">

        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer
            fileUrl="/docs/contract.pdf"
            plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
      </div>
 
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl rounded-lg shadow-lg bg-gray-800 p-8"
      >
        <span className="text-gray-300"> In addition, please provide the primary and secondary contact form your organization for all onboarding and production matters.</span>
        <div className="flex">
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
        <div className="w-full max-w-4xl mt-8 p-4 bg-gray-800 rounded shadow-lg flex items-center">
            <input
            type="checkbox"
            id="consent"
            name="consent"
            className="bg-gray-700 text-white mr-2"
            />
            <label htmlFor="consent" className="text-gray-300">
            I have read and agree to the terms and conditions of this contract
            </label>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-8 px-4 py-2 text-lg font-mono font-bold text-red-500 bg-gray-800 rounded hover:bg-gray-700"
        />
      </form>
    </div>
  );
};

export default Home;
