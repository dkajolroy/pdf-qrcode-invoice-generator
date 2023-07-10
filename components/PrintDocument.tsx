"use client";

import { fetcher } from "@/lib/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import QRCode from "react-qr-code";
import useSWR from "swr";
import { Icon124Spinner2 } from "./IconFile";
import DocHeader from "./document/docHeader";

function PrintDocument({ document_id }: { document_id: string }) {
  const ref = useRef(null);
  const { data, error, isLoading } = useSWR<
    Document | undefined,
    boolean,
    string | undefined
  >(`/api/document/${document_id}`, fetcher);
  // console.log(error, data, isLoading);

  if (isLoading) {
    return (
      <div className="flex h-[50vh] justify-center items-center">
        <span className="animate-spin text-6xl mr-3 ">
          <Icon124Spinner2 />
        </span>
      </div>
    );
  }
  if (!data && error) {
    return (
      <div className="flex h-[50vh] justify-center items-center">
        <h2 className="text-3xl">Document not found</h2>
      </div>
    );
  }
  function downloadPdf() {
    const input = ref.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/webp");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(
          imgData,
          "png",
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );
        pdf.save("invoice.pdf");
      });
    }
  }

  if (data) {
    return (
      <>
        <div ref={ref} className=" w-3/4 border-x mx-auto">
          <div className="  mx-20  px-5 py-2">
            <div className=" bg-white  ">
              <div className="mx-5">
                <DocHeader data={data} />
                <div className="w-full h-0.5 bg-indigo-500"></div>
                <div className="grid grid-cols-3 ">
                  <div>
                    <h6 className="font-bold">
                      Issue Date :{" "}
                      <span className="text-sm font-medium">
                        {" "}
                        {
                          new Date(data.created_at)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </span>
                    </h6>
                    <h6 className="font-bold">
                      Issue ID :{" "}
                      <span className="text-sm font-medium">
                        {" "}
                        {data.accountNo}
                      </span>
                    </h6>
                  </div>
                  <div className="">
                    <address className="text-sm flex-col flex">
                      <span className="font-bold">
                        {" "}
                        Billed To : {data.name}
                      </span>
                      <span className="font-bold"> Phone : {data.phone}</span>
                      <span className="font-bold"> email : {data.email}</span>
                    </address>
                  </div>
                  <div className="w-40">
                    <address className="text-sm">
                      <span className="font-bold">Ship To : </span>
                      {data.address}
                    </address>
                  </div>
                </div>
                <div>
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-xs text-gray-500 ">#</th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Product Name
                        </th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Quantity
                        </th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Rate
                        </th>
                        <th className="px-4 py-2 text-xs text-gray-500 ">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">1</td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            Amazon Brand - Symactive Mens Regular Fit T-Shirt
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">4</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">$20</td>
                        <td className="px-6 py-4">$30</td>
                      </tr>
                      <tr className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">2</td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            Amazon Brand - Symactive Mens Regular Fit T-Shirt
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">2</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">$60</td>
                        <td className="px-6 py-4">$12</td>
                      </tr>
                      <tr className=" whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">3</td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            Amazon Brand - Symactive Mens Regular Fit T-Shirt
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">1</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">$10</td>
                        <td className="px-6 py-4">$13</td>
                      </tr>
                      <tr className="">
                        <td colSpan={3}></td>
                        <td className="text-sm font-bold">Sub Total</td>
                        <td className="text-sm font-bold tracking-wider">
                          <b>$950</b>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={3}></th>
                        <td className="text-sm font-bold">
                          <b>Tax Rate</b>
                        </td>
                        <td className="text-sm font-bold">
                          <b>$1.50%</b>
                        </td>
                      </tr>
                      <tr className="text-white bg-gray-800">
                        <th colSpan={3}></th>
                        <td className="text-sm font-bold">
                          <b>Total</b>
                        </td>
                        <td className="text-sm font-bold">
                          <b>$999.0</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between p-4">
                  <div>
                    <h3 className="text-xl">Terms And Condition :</h3>
                    <ul className="text-xs list-disc list-inside">
                      <li>
                        All accounts are to be paid within 7 days from receipt
                        of invoice.
                      </li>
                      <li>
                        To be paid by cheque or credit card or direct payment
                        online.
                      </li>
                      <li>
                        If account is not paid within 7 days the credits details
                        supplied.
                      </li>
                    </ul>
                  </div>
                  <div className="flex  h-full">
                    <QRCode value="gg" size={100} />
                  </div>
                  <div>
                    <h3 className="mt-16">Signature</h3>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-indigo-500"></div>

                <div className="p-4">
                  <div className="flex items-center justify-center">
                    Thank you very much for doing business with us.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <div className="flex items-end justify-end space-x-3">
            {/* <button className="px-4 py-2 text-sm text-green-600 bg-green-100">
                      Print
                    </button> */}
            <button
              onClick={downloadPdf}
              className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
            >
              Save
            </button>
            <button className="px-4 py-2 text-sm text-red-600 bg-red-100">
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default PrintDocument;
