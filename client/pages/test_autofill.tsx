import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { useForm, SubmitHandler} from "react-hook-form";


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

const Home: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>({ });
  const onSubmit: SubmitHandler<ContactFormProps> = (data) =>
    console.log(data);

  const [pdfData, setPdfData] = React.useState<ArrayBuffer | null>(null);

  const fillPdf = async () => {
    // Load the existing PDF file as an array buffer
    const existingPdfBytes = await fetch("/docs/contract.pdf").then((res) =>
      res.arrayBuffer()
    );

    // Create a new PDFDocument instance
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the form object of the document
    const form = pdfDoc.getForm();

    // Create a new text field for the name
    const nameField = form.createTextField("name");
    nameField.setText("John Doe"); // Set the text value
    nameField.addToPage(pdfDoc.getPage(0), { x: 100, y: 500 }); // Add it to the first page

    // Get an existing text field for the email
    const emailField = form.getTextField("email");
    emailField.setText("john.doe@example.com"); // Set the text value

    // Optionally, you can also use other methods of the pdfDoc instance
    // For example, draw some text on the first page
    const page = pdfDoc.getPage(0);
    const { width, height } = page.getSize();
    const fontSize = 30;
    page.drawText("This is a modified PDF document", {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0.95, 0.1, 0.1),
      //rotate: degrees(-45),
    });

    // Save the modified PDF document as an array buffer
    const pdfBytes = await pdfDoc.save();

    // Set the state with the array buffer
    setPdfData(pdfBytes);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <span className="text-gray-200">
        Fill PDF
      </span>
      <div className="w-full max-w-4xl mt-8 p-4 bg-gray-800 rounded shadow-lg">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
          <Viewer
              fileUrl="/docs/contract.pdf"
              plugins={[defaultLayoutPluginInstance]}
          />
         </Worker>
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mt-8 p-4 bg-gray-800 rounded shadow-lg"
      >
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
            {/* ... */}
          </div>
          {/* ... */}
        </div>
        {/* ... */}
      </form>
      <button
        onClick={fillPdf}
        className="mt-8 px-4 py-2 text-lg font-mono font-bold text-red-500 bg-gray-800 rounded hover:bg-gray-700"
      >
        Fill PDF
      </button>
      <Link href="/form">
        <button className="mt-8 px-4 py-2 text-lg font-mono font-bold text-red-500 bg-gray-800 rounded hover:bg-gray-700">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default Home;
