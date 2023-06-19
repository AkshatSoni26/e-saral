import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useLocation } from "react-router-dom";

// Configure pdfjs worker path
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
  const location = useLocation();

  console.log("pdfInfo", location.state.pdf_password);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const password = location.state.pdf_password;

  const pdfURL =
    password.length > 2
      ? location.state.encrypted_file_url
      : location.state.original_file_url;

  useEffect(() => {
    // Load the PDF document and get the total number of pages
    const loadPDF = async () => {
      try {
        const loadingTask = pdfjs.getDocument({
          url: pdfURL,
          password: password,
        });
        const pdf = await loadingTask.promise;
        setNumPages(pdf.numPages);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPDF();
  }, [pdfURL, password]);

  const handlePageChange = (newPageNumber) => {
    if (newPageNumber < 1) {
      setPageNumber(1);
    } else if (newPageNumber > numPages) {
      setPageNumber(numPages);
    } else {
      setPageNumber(newPageNumber);
    }
  };

  return password.length > 2 ? (
    <div className="text-center ">
      <div className="d-flex justify-content-center bg-dark text-light">
        <div className="d-flex justify-content-center">
          <a
            disabled={pageNumber <= 1}
            onClick={() => handlePageChange(pageNumber - 1)}
          >
            &larr;
          </a>
          &ensp;
          <p className="text-center">
            Page {pageNumber} / {numPages}
          </p>{" "}
          &ensp; &ensp; &ensp;
          <a
            disabled={pageNumber >= numPages}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            &rarr;
          </a>
        </div>
      </div>

      <div className="bg-dark">
        <Document
          file={pdfURL}
          onPassword={(callback) => {
            callback(password);
          }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  ) : (
    <div>
      <div className="overlay"></div>
      <div className="content">
        <Document file={pdfURL}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p className="text-center">
          Page {pageNumber} / {numPages}
        </p>

        <div className="d-flex justify-content-center">
          <button
            className=" btn btn-primary"
            disabled={pageNumber <= 1}
            onClick={() => handlePageChange(pageNumber - 1)}
          >
            &larr; Previous Page
          </button>
          &ensp;
          <button
            className=" btn btn-primary"
            disabled={pageNumber >= numPages}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            Next Page &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
