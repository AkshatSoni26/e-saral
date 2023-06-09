import React, { createContext, useContext } from 'react'
import RevisePractiseButton from './RevisePractiseButton'

import { context_data_2 } from '../SubjectData.js'

import ChapterSlider from './Chapter Data Dependience/Learn Depen/ChapterSlider'
import LearnPortionHeader from './Chapter Data Dependience/Learn Depen/LearnPortionHeader'


const ChapterData_1 = createContext();


export default function ChapterData() {

    const response = useContext(context_data_2);


    console.log('id', response.id)
    console.log('ChapterData',response)

    // console.log('practics-button',response.response.content.practise )

    return (
        <>

            <section id={`chapter-${response.id}`}>

                <ChapterData_1.Provider value={response.response} >

                    <LearnPortionHeader />

                    <ChapterSlider  />

                    <RevisePractiseButton /> 

                </ChapterData_1.Provider>

            </section>
        </>
    )

}

export { ChapterData_1 }