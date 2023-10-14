import React from 'react'
import testi3 from '../images/test3.jpg'
import testi2 from '../images/test2.jpg'
import testi4 from '../images/test4.jpg'
import testi5 from '../images/test5.jpg'
import testi6 from '../images/test6.jpg'
import testi1 from '../images/rona-after.jpeg'
import quotes from '../images/icons8-quote-100.png'
import star from '../images/icons8-star-30.png'
import trans1B from '../images/transformations/bf1before.png'
import trans1A from '../images/transformations/bf1after.png'
import trans2B from '../images/transformations/bf2before.png'
import trans2A from '../images/transformations/bf2after.png'
import trans3B from '../images/transformations/bf3before.png'
import trans3A from '../images/transformations/bf3after.png'
import trans4B from '../images/transformations/bf4before.png'
import trans4A from '../images/transformations/bf4after.png'
import trans5B from '../images/transformations/bf5before.png'
import trans5A from '../images/transformations/bf5after.png'
import trans6B from '../images/transformations/bf6before.png'
import trans6A from '../images/transformations/bf6after.png'


import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='homePage'>


      <section id='serviceSec'>
        <h1 className='text-center h1 theme-blue-color mb-24 pt-32 lg: max-lg:pt-12 max-lg:mb-12'>Our Services</h1>
        <div className='container pb-36 max-md:pb-12'>
          <div id='treatments' className='grid grid-cols-3 gap-2 max-sm:grid-cols-1'>
            <Link to="/book-service">
              <div className='service   service1  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 1</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/book-service">
              <div className='service   service2  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8'>Service 2</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/book-service">
              <div className='service   service3  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8'>Service 3</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service4  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 xl:mt-3 mb-6 max-xl:mt-8'>Service 4</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service5  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 5</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service6  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 6</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service7  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 7</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service8  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 8</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service9  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 9</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service10  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 10</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service11  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 11</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/book-service">
              <div className='service   service12  duration-300'>
                <div className='relative mainTextDiv'>
                  <h6 className='text-white text-center h2 !mt-3 mb-6'>Service 12</h6>
                  <div className='text-white text-center textDiv '>
                    <h6 className='h4 mb-4'>Service description</h6>
                    <p className='text-center h-36 px-14 mt-2 text-lg'>
                      lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum  lorep ipsum
                    </p>
                    <button className='mt-4  py-2 mb-4 font-semibold text-[#656B6F] relative hover:text-[#336cd7] duration-300'>
                      BOOK SERVICE
                    </button>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section id="aboutSec" className=' bg-[#f3f3f3]  h-96'>
        <h1 className='text-center h1 text-black pt-10 mb-10'>About Us</h1>
        <div className='container'>
          <div className='row'>
            <p className=''>lorem ipsum lorem ipsum lorem ipsumvlorem ipsum lorem ipsum lorem ipsumv v lorem ipsum v lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsum lorem ipsumv lorem ipsum lorem ipsum v v</p>
          </div>
        </div>

      </section>

      <section id="whatwedoSec" className='bg-[#3043b8] h-96'>
        <h1 className='text-center h1 text-white pt-10 mb-10'>What We Do</h1>
        <div className='container pb-10'>
          <div className='row'>
            <p className='text-white'>lorem ipsum lorem ipsum lorem ipsumvlorem ipsum lorem ipsum lorem ipsumv v lorem ipsum v lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsum lorem ipsumv lorem ipsum lorem ipsum v v</p>
          </div>
        </div>
      </section>

      <section id="qualitySec" className=' h-96'>
        <h1 className='text-center h1 theme-blue-color pt-10 mb-10'>Quality</h1>
        <div className='container pb-10'>
          <div className='row'>
            <p className=''>lorem ipsum lorem ipsum lorem ipsumvlorem ipsum lorem ipsum lorem ipsumv v lorem ipsum v lorem ipsum lorem ipsum lorem ipsumv lorem ipsum lorem ipsumlorem ipsum lorem ipsumv lorem ipsum lorem ipsum v v</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home