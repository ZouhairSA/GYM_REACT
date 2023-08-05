import React from 'react'
import SectionHeader from './SectionHeader'
import { faqs } from '../data'
import { FaQuestion } from 'react-icons/fa'
import FAQ from './FAQ'



const FAQs = () => {
    return (
        // git pull origin   
        <section className='faqs'>
            <div className='container faqs_container'>
                <SectionHeader icon={<FaQuestion />} title="FAQ-S" />
                <div className='faqs_wrapper'>
                    {
                        faqs.map(({ id, question, answer }) => {
                            return <FAQ key={id} question={question} answer={answer} />
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default FAQs
