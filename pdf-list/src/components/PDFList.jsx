import React from "react";

const PDFList = ({ Pdf, onSelectingPDF }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Pdf.map((pdf) => (
        <div
          key={pdf.id}
          className="bg-[#88163011] bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          onClick={() => onSelectingPDF(pdf)}
        >
          <img
            src={pdf.thumbnail || '/images/Thumbnail.png'}
            alt={pdf.name}
            className="w-full pt-5 h-40 object-cover cursor-pointer"
          />
           <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 truncate hover:cursor-pointer">{pdf.name}</h2>
          <p className=" font-medium text-gray-600 mt-1">Author:{pdf.author}</p>
           </div>
        </div>
      ))}
    </div>
  );
};

export default PDFList;
