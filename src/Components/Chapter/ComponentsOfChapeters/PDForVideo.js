import React from 'react'
import IsPDF from './IsPDF'
import IsVideo from './IsVideo'

export default function PDForVideo({ data }) {
    return (
        <div>

            <div>
                {
                    data.content_data.content_type == "PDF" ?

                        <IsPDF content_info={data.content_data.content_info} />

                        : (
                            <IsVideo data={data} />
                        )}
            </div>

        </div>
    )
}
