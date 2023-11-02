import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";

import { pdfjs } from 'react-pdf';


type ContactFormProps = {
    signature: string;
    fullName: string;
    title: string;
    date: string;
    company: string;
    name: string;
    address: string;
    primaryName: string;
    primaryEmail: string;
    primaryPhone: string;
    secondaryName: string;
    secondaryEmail: string;
    secondaryPhone: string;
  };

const resolver: Resolver<ContactFormProps> = async (values) => {
    return {
      values: values.signature && values.fullName && values.date && values.primaryName && values.secondaryName && values.company && values.name && values.address  ? values : {},
      errors: {
        ...(values.signature
            ? {}
            : {
                signature: {
                  type: "required",
                  message: "Signature is required.",
                },
              }),
          ...(values.fullName
            ? {}
            : {
                fullName: {
                  type: "required",
                  message: "Full legal name is required.",
                },
              }),
          ...(values.date
            ? {}
            : {
                date: {
                  type: "required",
                  message: "Date is required.",
                },
              }),
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
        ...(values.company
            ? {}
            : {
                company: {
                    type: "required",
                    message: "Company is required.",
                },
                }),
            ...(values.name
            ? {}
            : {
                name: {
                    type: "required",
                    message: "Name is required.",
                },
                }),
            ...(values.address
            ? {}
            : {
                address: {
                    type: "required",
                    message: "Address is required.",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-40% from-gray-900 to-pink-900">
      <span className="text-gray-300 font-bold">
        Only users with a code can see this page
      </span>
      <div className="w-full max-w-4xl mt-8 p-4 bg-gray-800 rounded shadow-lg">

        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <div style={{ height: '500px', overflow: 'auto' }}>
            <Viewer
                    fileUrl="/docs/contract.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                />
        </div>
         </Worker>
      </div>
 
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl rounded-lg shadow-lg bg-gray-800 p-8"
      >
        <span className="text-gray-300">Sign instructions or some oher text here or no</span>

        <div className="flex">
          <div className="w-1/2 p-4">
            <label htmlFor="signature" className="text-gray-300 mt-2">
              Signature
            </label>
            <input
              id="signature"
              
              type="text"
              {...register("signature")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.signature && (
              <span className="text-red-500">{errors.signature.message}</span>
            )}
          </div>
          <div className="w-1/2 p-4">
            <label htmlFor="fullName" className="text-gray-300 mt-2">
              Full Legal Name
            </label>
            <input
              id="fullName"
              
              type="text"
              {...register("fullName")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.fullName && (
              <span className="text-red-500">{errors.fullName.message}</span>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-4">
            <label htmlFor="title" className="text-gray-300 mt-2">
              Title
            </label>
            <select
              id="title"
              
              {...register("title")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            >
              <option value="">Select a title</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
            </select>
          </div>
          <div className="w-1/2 p-4">
            <label htmlFor="date" className="text-gray-300 mt-2">
              Date
            </label>
            <input
              id="date"
              
              type="date"
              {...register("date")}
              className="bg-gray-700 text-white rounded p-2 w-full"
            />
            {errors?.date && (
              <span className="text-red-500">{errors.date.message}</span>
            )}
          </div>
        </div>
        <div className="">
            <span className="text-gray-300 overflow-hidden whitespace-nowrap w-full text-ellipsis">Your company information:</span>
            <div className="flex">
            <div className="w-1/2 p-4">
                <label htmlFor="company" className="text-gray-300 mt-2">
                Company Name
                </label>
                <input
                    id="company"
                   
                    type="text"
                    {...register("company")}
                    className="bg-gray-700 text-white rounded p-2 w-full"
                    />
                    {errors?.company && (
                    <span className="text-red-500">{errors.company.message}</span>
                    )}
            </div>
            <div className="w-1/2 p-4">
                <label htmlFor="name" className="text-gray-300 mt-2">
                Name
                </label>
                <input
                id="name"
                
                type="text"
                {...register("name")}
                className="bg-gray-700 text-white rounded p-2 w-full"
                />
                {errors?.name && (
                <span className="text-red-500">{errors.name.message}</span>
                )}
            </div>
            </div>
            <div className="flex">
            <div className="w-full p-4">
                <label htmlFor="address" className="text-gray-300 mt-2">
                Address
                </label>
                <input
                id="address"
                
                type="text"
                {...register("address")}
                className="bg-gray-700 text-white rounded p-2 w-full"
                />
                {errors?.address && (
                <span className="text-red-500">{errors.address.message}</span>
                )}
            </div>
            </div>
        </div>
        <span className="text-gray-300"> In addition, please provide the primary and secondary contact form your organization for all onboarding and production matters:</span>

        <div className="flex">
          <div className="w-1/2 p-4">
            <h3 className="text-lg font-bold text-white">Primary Contact</h3>
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
              <span className="text-red-500">{errors.primaryName.message}</span>
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
              <span className="text-red-500">Email is invalid</span>
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
          className="mt-8 px-4 py-2 text-lg font-mono font-bold text-gray-200 bg-gray-700 rounded hover:bg-gray-700"
        />
      </form>
    </div>
  );
};

export default Home;
