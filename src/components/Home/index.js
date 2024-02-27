/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-extraneous-dependencies */
import Slider from 'react-slick'
import Header from '../Header'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const Home = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Header />

      <div className="about-container">
        <h1 className="heading">Hi! Thushal</h1>

        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-item">
              <div className="inner-container">
                <p className="paragraph">
                  They have thorough knowledge about processes and have
                  constantle reminded me of various legal deadlines{' '}
                </p>
              </div>
            </div>
            <div className="slider-item">
              <div className="inner-container">
                <p className="paragraph">
                  They have thorough knowledge about processes and have
                  constantle reminded me of various legal deadlines{' '}
                </p>
              </div>
            </div>
            <div className="slider-item">
              <div className="inner-container">
                <p className="paragraph">
                  They have thorough knowledge about processes and have
                  constantle reminded me of various legal deadlines{' '}
                </p>
              </div>
            </div>
            <div className="slider-item">
              <div className="inner-container">
                <p className="paragraph">
                  They have thorough knowledge about processes and have
                  constantle reminded me of various legal deadlines{' '}
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="inner-container">
          <img
            src="https://media.istockphoto.com/id/1320882544/photo/glowing-light-bulb-and-book-or-text-book-with-futuristic-icon-self-learning-or-education.jpg?s=612x612&w=0&k=20&c=1fCGnLilpVhM1rw2DKgtTcujYezmelfPFYPB4dyhuuk="
            className="img1"
          />
        </div>

        <h1 className="heading">What do you want to learn Thushal today!</h1>
      </div>
    </>
  )
}

export default Home
