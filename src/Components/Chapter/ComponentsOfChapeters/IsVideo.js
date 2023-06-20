import React from 'react'

export default function IsVideo( {data}) {
    return (
        <div>
            <img
                src={data.content_data.content_info.thumbnail}
                className="img-fluid"
                alt=""
            />
            {data.display_name}

            {console.log(
                "data",
                data.content_data.content_info.thumbnail
            )}
        </div>
    )
}
