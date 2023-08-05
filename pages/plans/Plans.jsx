import React from 'react'
import './plans.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/big.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'

const Plans = () => {
  return (
    <>
      <Header title='Membership Plans' image={HeaderImage}>
        Investment in sport refers to the allocation of resources, such as time, money, and labor, towards the development and promotion of sports and physical activity. Investment in sport can take many forms, including funding for sports facilities and equipment, support for sports programs and events, and sponsorship of athletes and teams. Investment in sport can have numerous benefits, including improving access to sports and physical activity for all individuals, promoting the health and well-being of communities, and contributing to the economic development of a region through the hosting of sporting events and the development of sports-related businesses. Investment in sport can come from a variety of sources, including government agencies, private businesses, and philanthropic organizations.
      </Header>
      <section className='plans'>
        <div className='container plans_container'>

          {
            plans.map(({ id, name, desc, price, features }) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price}DH`}</h1><h2>/Month</h2>
                <h4>Features</h4>
                {
                  features.map(({ feature, available }, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            })
          }

        </div>
      </section>

    </>
  )
}

export default Plans
