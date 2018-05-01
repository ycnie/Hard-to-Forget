import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './JoinUs.css';
import img1 from './Photo_by_Brooke_Cagle_on_Unsplash.jpg';
import img2 from './Photo_by_Nastuh_Abootalebi_on_Unsplash.jpg';
import img3 from './Photo_by_Sean_Pollock_on_Unsplash.jpg';


class JoinUs extends Component {



    render() {
        return (
            <div className='carousel-container'>
                <Carousel>
                    <Carousel.Item>
                        <img width={1000} height={600} alt="900x500" src={img1} />
                        <Carousel.Caption>
                            <h3 className='font-indie f1'>Welcome to our meeting.</h3>
                            <p className='font-indie f4'><i>Photo by Brooke Cagle on Unsplash.</i></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1000} height={600} alt="900x500" src={img2} />
                        <Carousel.Caption>
                            <h3 className='font-indie f1'>Enjoy your working environment.</h3>
                            <p className='font-indie f4'><i>Photo by Nastuh Abootalebi on Unsplash</i></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1000} height={600} alt="900x500" src={img3} />
                        <Carousel.Caption>
                            <h3 className='font-indie f1'>Enjoy the view of the night.</h3>
                            <p className='font-indie f4'><i>Photo by Sean Pollock on Unsplash</i></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default JoinUs;