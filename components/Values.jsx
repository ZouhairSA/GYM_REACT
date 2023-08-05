import React from 'react'
import Imtt from '../images/values.jpg'
// import Imtt from '../images/a7.jpg'
import SectionHeader from './SectionHeader'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
      <div className='container values_container'>
        <div className="values_left">
          <div className="values_image">
            <img src={Imtt} alt="Values Image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHeader icon={<GiCutDiamond />} title="Values :"></SectionHeader>
          <p>
            A gym is a place where people can go to exercise and improve their physical fitness. It typically has a variety of equipment and facilities for activities such as weight lifting, cardio exercise, and group fitness classes. Gyms may also offer amenities like saunas, swimming pools, and showers.
          </p>
          <div className="values_wrapper">
            {
              values.map(({ id, icon, title, desc }) => {
                return <Card key={id} className='values_value'>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              })
            }
          </div>
        </div>
      </div>




    </section>
  )
}

export default Values
