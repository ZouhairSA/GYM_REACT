import React from 'react'
import './galery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'


const Galery = () => {
  const gallerylenght = 15;
  const images = []

  for(let i=1; i <= gallerylenght; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    Musculation is a type of physical exercise that focuses on building muscle mass and strength through the use of weights, resistance machines, and other equipment. It is a popular form of exercise for those looking to improve their physical appearance, increase their strength and power, and enhance their overall health and fitness. Musculation typically involves performing a variety of exercises that target specific muscle groups, such as squats, bench press, and bicep curls, and may be done as part of a structured workout program or as part of a more general fitness routine. Musculation can be performed by people of all ages and fitness levels, and can be modified to suit individual needs and goals.
    </Header>
    <section className='gallery'>
      <div className='container gallery_container'>
        {
          images.map((image, index) =>{
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />

            </article>
          })
        }
      </div>

    </section>
    </>
  )
}

export default Galery
