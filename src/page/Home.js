import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Header from '../components/header/Header'
import BookForm from '../components/main/BookForm';

function Home() {
    return (
        <>
            <Header></Header>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img src="img/main/mBanner1.jpg" width="100%"/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src="img/main/mBanner2.jpg" width="100%"/>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="img/main/mBanner3.jpg" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="img/main/mBanner4.jpg" width="100%"/>
                </Carousel.Item>
            </Carousel>
            <BookForm/>
        </>
    )
}

export default Home
