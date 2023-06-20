import React from 'react'

export default function TestCompStart({item_2}) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h3 className="text-dark">{item_2.display_name}</h3>
                    </div>

                    <div className="col-md-2">
                        <button className="btn btn-primary text-right">
                            Start Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
