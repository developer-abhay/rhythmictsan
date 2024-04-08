import jampad_img1 from "/assets/images/service_jampad1.jpg";
import jampad_img2 from "/assets/images/service_jampad2.jpg";
import ServiceItem from "./ServiceItem";
import "./Services.css";
import Banner from "../../components/Banner/Banner";

const Services = () => {
  return (
    <main className="services-page">
      <Banner title={"services"} />
      <section className="service container">
        <h2>Our Services</h2>
        <h5>We provide a variety of opportunities</h5>

        <ServiceItem
          cName="first-service-reverse"
          title="Studio Sessions"
          text="Step into our professional recording studio and bring your musical creations to life with our studio sessions. Equipped with state-of-the-art recording equipment and technology, our studio provides the perfect environment for musicians to unleash their creativity and produce high-quality recordings. Whether you're a solo artist, band, or ensemble, our experienced engineers will work closely with you to capture your unique sound and vision. From tracking to mixing and mastering, we offer comprehensive recording services tailored to your needs. Experience the thrill of the recording process and elevate your music to the next level with our studio sessions at Rhythmicstan."
          video="OjjjlAtjLBM?si=Bt3U8323yDA9RAql"
          // url="/"
        />

        <ServiceItem
          cName="first-service"
          title="Dance Workshops"
          text="Get ready to groove and move with our dynamic dance workshops! Led by experienced instructors, our workshops are designed to inspire and energize dancers of all levels. Whether you're a beginner looking to learn the basics or an experienced dancer seeking to refine your skills, our workshops offer something for everyone. From Bollywood to hip-hop, salsa to contemporary, we cover a variety of dance styles to keep you on your toes. Our choreography sessions provide the perfect opportunity to learn exciting routines and unleash your creativity on the dance floor. Join us for an exhilarating dance experience and let the rhythm guide your steps at Rhythmicstan."
          video="ZuiyBktSDIg?si=4SHPPwRIG-cWD9Ms"
          // url="/"
        />

        <ServiceItem
          cName="first-service-reverse"
          title="Jampad & Studios"
          text="Calling all musicians! Take your rehearsals and jam sessions to the next level with our jampad and studio facilities. Our spacious and acoustically treated rooms provide the perfect environment for bands, solo artists, and ensembles to practice and collaborate. Equipped with top-of-the-line instruments and professional-grade equipment, our studios offer everything you need to bring your musical ideas to fruition. Whether you're fine-tuning arrangements, preparing for gigs, or simply jamming with friends, our jampad and studio spaces are your ultimate destination for musical creativity. Experience the freedom to play, create, and explore your sound at Rhythmicstan Jampad."
          img1={jampad_img1}
          img2={jampad_img2}
          // url="/"
        />
      </section>
    </main>
  );
};

export default Services;
