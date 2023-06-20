import React from 'react'
import EnrollmentChangeDropDown from './EnrollmentChangeDropDown';

export default function NameAndDropDownHandler({ uData }) {
    return (

        <div style={{ paddingLeft: 100 }}>
            <h3>
                {uData.enrollments.map((data, i) => {
                    if (data.is_current == true) {
                        return (
                            <>
                                <EnrollmentChangeDropDown
                                    data={data}
                                    i={i}
                                    uData={uData}
                                />
                            </>
                        );
                    }
                })}
            </h3>
            <div>
            <b>Hi, {uData.profile.full_name} 👋 </b>
            </div>
        </div>
    )
}
