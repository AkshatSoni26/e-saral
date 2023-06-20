import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PDFImgURL } from '../../URLS/Urls';

export default function IsPDF( {content_info} ) {

    const navigate= useNavigate();
    return (
        <div>
            (
            <a
                onClick={() =>
                    navigate("/pdf", {
                        state: content_info,
                    })
                }
            >
                <img
                    src={PDFImgURL}
                    alt={content_info.name}
                />
            </a>
            )
        </div>
    )
}
