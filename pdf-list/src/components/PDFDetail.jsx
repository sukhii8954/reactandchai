import React from 'react'

const PDFDetail = ({pdf , onBack}) => {
  return (
    <div className="bg-red-200 p-6 rounded-lg  shadow-lg min-h-screen">
      <button
        className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded mb-6 transition-all"
        onClick={onBack}
      >
       &larr;  Back to List
      </button>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{pdf.name.toUpperCase()}</h2>
      <p className="text-sm text-gray-700 mb-6 font-semibold">Author: {pdf.author}</p>
      <iframe
        src={pdf.link}
        title={pdf.name}
        className="w-full h-screen border rounded-lg"
      ></iframe>
    </div>
  )
}

export default PDFDetail
