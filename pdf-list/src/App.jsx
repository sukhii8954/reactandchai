import { useEffect, useState } from 'react'
import PDFList from './components/PDFList'
import { fetchPDFs } from './utils/api'
import PDFDetail from './components/PDFDetail'

function App() {

const [Pdf, setPdf] = useState([]);
const [selectedPdf, setSelectedPdf] = useState(null);
const [searchQuery, setSearchQuery] = useState('');


useEffect(() => {
  const  renderPDFs = async ()=> {
       try {
        const content = await fetchPDFs();
        setPdf(content);
       } catch (error) {
        alert('Failed to load PDFs');
       }
  }
 
  renderPDFs();
  
}, []);


const choosePDFs = Pdf.filter((p)=>
     p.name.toLowerCase().includes(searchQuery.toLowerCase())
);





  return (
    <>
      <div className="min-h-screen bg-gray-700">
        <div className="flex flex-col items-center w-full p-4 bg-gray-300">
          <h1 className="text-3xl font-bold text-center mb-6">PDF Browser</h1>
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-2 mb-4 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="p-4">
          {!selectedPdf ? (
            <PDFList Pdf={choosePDFs} onSelectingPDF={setSelectedPdf} />
          ) : (
            <PDFDetail pdf={selectedPdf} onBack={() => setSelectedPdf(null)} />
          )}
        </div>
      </div>
       
    </>
  )
}

export default App
