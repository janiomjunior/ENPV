import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/lake_louise.JPG";
import heroImg02 from "../assets/images/magic_kingdom.JPG";
import heroImg03 from "../assets/images/lake_alberta.JPG";
import worldImage from "../assets/images/world.png"
import Subtitle from "../shared/Subtitle";
// import experienceImg from '../assets/images/experience.png'

// import SearchBar from "../shared/SearchBar";
// import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
// import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
// import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*========= hero section start===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Tenha Uma Experiencia Unica'}/>
                  <img src={worldImage} alt="" />
                </div>
                <h1>Viajar abre portas para criar <span 
                className="highlight"> memorias</span> </h1>
                <p>Viajar permite descobrir novos lugares, 
                  experimentar culturas distintas e criar memórias
                   inesquecíveis. Cada destino guarda histórias
                   únicas e momentos especiais. Ao explorar o
                   mundo, nos conectamos com pessoas, aprendemos
                   lições valiosas e vivemos experiências que
                   transformam nossas vidas. Seja admirando paisagens
                   deslumbrantes, saboreando culinárias diferentes ou
                   se perdendo em ruas históricas, viajar enriquece
                   a alma e amplia horizontes. Cada jornada é uma
                   oportunidade de viver o presente, sonhar com o futuro
                   e valorizar as lembranças que levaremos para sempre conosco.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <img src={heroImg03} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>

      {/*========= hero section end===========*/}
      {/* <section>
          <Container>
            <Row>
              <Col lg='3'>
                <h5 className="services__subtitle">Quais os nossos servicos</h5>
                <h2 className="services__title">Nos oferecemos nossos melhores servicos</h2>
              </Col>
              <ServiceList />
            </Row>
          </Container>
      </section> */}


      {/*============ featured tour section start ==============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Nossos descontos</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*============ featured tour section end ===========*/}
      
      {/*============ experience section start ===========*/}
      {/* <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br/>
                  Quas aliquam, hic tempora inventore suscipit unde.
                </p>  
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>

              </div>
            </Col>
            <Col lg="6">  
                <div className="experience__img">
                  <img src={experienceImg} alt=""></img>
                </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/*============ experience section end ===========*/}
      {/*============gallery section start===========*/}
      {/* <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Visit out customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/*============gallery section end===========*/}
      {/*============testimonial section start=========*/}
      {/* <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What our fans says about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section> */}
      {/*============testimonial section end===========*/}
      <Newsletter />
    </>
  );
};

export default Home;
