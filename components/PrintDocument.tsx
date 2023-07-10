"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import QRCode from "react-qr-code";

function PrintDocument() {
  const ref = useRef(null);

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
  return (
    <>
      <div ref={ref} className=" w-3/4  mx-auto">
        <div className="bg-teal-700 mx-20  px-5 py-2">
          <h2 className=" text-center py-5 text-3xl font-bold text-white">
            New Company
          </h2>
          <div className="flex justify-between py-2 items-end">
            <div>
              <h2 className="text-white">Account No: 20158166494</h2>
              <h2 className="text-white">Name: Md Rajib</h2>
            </div>
            <div className="p-2 bg-white">
              <QRCode value="Kajol roy" size={100} />
            </div>
          </div>
          <table className="border-collapse w-full">
            <thead>
              <tr className="border">
                <th className="border p-2 text-gray-200">Id</th>
                <th className="border p-2 text-gray-200">Name</th>
                <th className="border p-2 text-gray-200">Roll</th>
                <th className="border p-2 text-gray-200">District</th>
                <th className="border p-2 text-gray-200">Country</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border p-2 text-gray-200">22</td>
                <td className="border p-2 text-gray-200">Jasim</td>
                <td className="border p-2 text-gray-200">254</td>
                <td className="border p-2 text-gray-200">Dhaka</td>
                <td className="border p-2 text-gray-200">Bangladesh</td>
              </tr>
              <tr className="border">
                <td className="border p-2 text-gray-200">22</td>
                <td className="border p-2 text-gray-200">Jasim</td>
                <td className="border p-2 text-gray-200">254</td>
                <td className="border p-2 text-gray-200">Dhaka</td>
                <td className="border p-2 text-gray-200">Bangladesh</td>
              </tr>
              <tr className="border">
                <td className="border p-2 text-gray-200">22</td>
                <td className="border p-2 text-gray-200">Jasim</td>
                <td className="border p-2 text-gray-200">254</td>
                <td className="border p-2 text-gray-200">Dhaka</td>
                <td className="border p-2 text-gray-200">Bangladesh</td>
              </tr>
              <tr className="border">
                <td className="border p-2 text-gray-200">22</td>
                <td className="border p-2 text-gray-200">Jasim</td>
                <td className="border p-2 text-gray-200">254</td>
                <td className="border p-2 text-gray-200">Dhaka</td>
                <td className="border p-2 text-gray-200">Bangladesh</td>
              </tr>
              <tr className="border">
                <td className="border p-2 text-gray-200">22</td>
                <td className="border p-2 text-gray-200">Jasim</td>
                <td className="border p-2 text-gray-200">254</td>
                <td className="border p-2 text-gray-200">Dhaka</td>
                <td className="border p-2 text-gray-200">Bangladesh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <button onClick={downloadPdf} className="bg-orange-600  text-white p-2">
          Download
        </button>
      </div>
    </>
  );
}

export default PrintDocument;
