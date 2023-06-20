import React from 'react'

export default function HandlePageChangerArrow({numPages, pageNumber, handlePageChange }) {

  return (
    <div>
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
    </div>
  )
}
