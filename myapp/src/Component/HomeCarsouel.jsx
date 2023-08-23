import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const HomeCarsouel = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img style={{width: '100vw'}} src="https://wp.salesforce.com/news/wp-content/uploads/sites/3/2023/04/NaturePositive.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: '100vw'}} src="https://images.unsplash.com/photo-1589281989103-83191ddc328e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlZWtpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt=""  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: '100vw'}} src="https://images.unsplash.com/photo-1643468924717-fcf7e3ec3427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default HomeCarsouel
