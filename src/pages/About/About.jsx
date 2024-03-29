import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";
import "./About.css";
//Banner photos
import img1 from "/assets/images/about page/about1.jpg";
import img2 from "/assets/images/about page/about2.jpg";
import img3 from "/assets/images/about page/about3.jpg";
import img4 from "/assets/images/about page/about4.jpg";
import img5 from "/assets/images/about page/about5.jpg";
import img6 from "/assets/images/about page/about6.jpg";
import img7 from "/assets/images/about page/about7.jpg";
import img8 from "/assets/images/about page/about8.jpg";
import img9 from "/assets/images/about page/about9.jpg";
//Events Photos
import festamania1 from "/assets/images/about page/events_festamania1.png";
import festive1 from "/assets/images/about page/events_festival1.jpg";
import openMic from "/assets/images/about page/events_openMic.jpg";
import festamania2 from "/assets/images/about page/events_festamania2.jpg";
// Collab Photos
import rockSchool from "/assets/images/about page/collab_rock.jpg";
import dseu from "/assets/images/about page/collab_dseu.jpg";
import aiims from "/assets/images/about page/collab_aiims.jpg";
import Banner from "../../components/Banner/Banner";

const About = () => {
  return (
    <main className="about-page ">
      <Banner title="About" />
      {/* Our Mission */}
      <div className="our-mission container">
        <div className="mission-img-1">
          <img src={img1} alt="" />
        </div>
        <div className="mission-img-2">
          <img src={img2} alt="" />
        </div>
        <div className="mission-img-3">
          <img src={img3} alt="" />
        </div>
        <div className="mission-img-4">
          <img src={img4} alt="" />
        </div>
        <div className="mission-img-5">
          <img src={img5} alt="" />
        </div>
        <div className="mission-img-6">
          <img src={img6} alt="" />
        </div>
        <div className="mission-img-7">
          <img src={img7} alt="" />
        </div>
        <div className="mission-img-8">
          <img src={img8} alt="" />
        </div>
        <div className="mission-img-9">
          <img src={img9} alt="" />
        </div>

        <span className="mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to share our love for music and help people all over
            India discover it's joy. Since 2015, we've been dedicated to
            teaching music in a fun and supportive way. We want to help our
            students not only learn how to play instruments but also understand
            and appreciate music deeply. Whether someone dreams of becoming a
            professional musician or just wants to play for fun, we're here to
            support them in every step of the way. We believe in giving our
            students plenty of chances to perform and learn the theory behind
            music, so they become well-rounded musicians. We also encourage them
            to take exams like Rockschool, Trinity College London, and ABRSM,
            which are recognized worldwide.
          </p>
        </span>
      </div>

      {/* Events */}
      <section className="events">
        <h5>Our Organized</h5>
        <h2>Events</h2>
        <div className="events-container container">
          <WhyUsCard
            title2="Festamania 1.0"
            text="'Festamania' was an electrifying celebration of music and talent, where students of Rhythmicstan took center stage to showcase their musical prowess. Held in a grand auditorium, the event drew an enthusiastic audience of over 400, including proud parents, esteemed guests, and music enthusiasts alike. We were honored to have the Education Director of Delhi as our chief guest, bringing a wealth of experience and insight to the event.The atmosphere buzzed with excitement and anticipation as each performer prepared to share their musical gifts with the world."
            btnClass="display-none"
            img={festamania1}
          />
          <WhyUsCard
            title2="Open Mics"
            text="Step into the spotlight and share your talent at Rhythmicstan's Open Mics! Whether you're into poetry, singing, rapping, stand-up comedy, Hindi shayaris, or storytelling, everyone is welcome to take the stage and showcase their skills. These inclusive and free events provide a platform for performers of all backgrounds to express themselves and inspire others. With over 15 successful Open Mics in the past two years, join us for a day of unforgettable entertainment and celebration of creativity!"
            btnClass="display-none"
            img={openMic}
          />
          <WhyUsCard
            title2="Festive Specials"
            text="We believe in the power of music to bring people together, and what better way to celebrate than by coming together with our students and their families to mark special occasions? From the vibrant colors of Holi to the sparkling lights of Diwali and the festive cheer of Christmas, we embrace every festival with open arms and joyful hearts. Our festival celebrations are more than just parties—they're opportunities to create lasting memories, strengthen bonds, and share in the universal language of music."
            btnClass="display-none"
            img={festive1}
          />
          <WhyUsCard
            title2="Festamania 2.0"
            text="Festimania 2.0 was the grandest event to date at Rhythmicstan, setting the stage on fire with its electrifying energy and unparalleled excitement. With an awe-inspiring audience of over 700 attendees, including students, families, and music enthusiasts, the atmosphere was nothing short of magical. The highlight of the evening was the esteemed presence of Mr. Shaileash Gaikwad, the President of NTNI and ISNR 2022-23, who graced the occasion as our chief guest and Boishali Sinha, a renowned production designer and art director in the Hindi film industry. Boishali's illustrious career includes work on blockbuster films like 'Gabbar is Back'.As the curtains closed on this unforgettable evening, it was clear that Festimania 2.0 had set a new standard for musical events across all music schools, leaving everyone eagerly awaiting the next chapter."
            btnClass="display-none"
            img={festamania2}
          />
        </div>
      </section>

      {/* Collaborations */}
      <section className="collab">
        <h5>We have worked with</h5>
        <h2>Collaborations and Associations</h2>
        <div className="collab-container container">
          <WhyUsCard
            title2="Rock School London"
            text="At Rhythmicstan, we are proud to be the exclusive official exam center of RSL in South Delhi. We are committed to delivering internationally recognized music education and certifications. Rockschool's innovative approach to music exams aligns perfectly with our mission to provide high-quality music education to our students. As a pioneer in contemporary music education, Rockschool offers graded music exams across various instruments and genres, empowering students to develop their skills and pursue their passion for music with confidence. Our affiliation with Rockschool London ensures that our students receive industry-standard certifications that are globally recognized, opening doors to diverse opportunities in the music industry."
            btnClass="display-none"
            img={rockSchool}
          />
          <WhyUsCard
            title2="Aiims Delhi"
            text="Our collaboration with AIIMS Delhi (All India Institute of Medical Sciences) demonstrates our dedication to promoting the importance of music in healthcare and education. We have conducted workshops in partnership with AIIMS Delhi, focusing on the therapeutic benefits of music and its profound impact on physical and mental well-being. Additionally, we are honored to have served on the judging panel for Pulse, South Asia's largest medical fest organized by AIIMS Delhi. Through these collaborative efforts, we aim to advocate for the integration of music into healthcare practices, promote interdisciplinary collaboration, and raise awareness about the healing power of music."
            btnClass="display-none"
            img={aiims}
          />
          <WhyUsCard
            title2="Delhi Skill and Entrepreneurship University"
            text="Our partnership with DSEU (Delhi Skill and Entrepreneurship University) reflects our commitment to spreading awareness of music and its benefits beyond traditional educational settings. We have conducted workshops in collaboration with DSEU, aimed at raising awareness of the therapeutic benefits of music and its profound impact on physical, emotional, and cognitive well-being. Through these initiatives, we strive to promote the integration of music into educational and healthcare practices, fostering holistic approaches to learning and wellness."
            btnClass="display-none"
            img={dseu}
          />
        </div>
      </section>
    </main>
  );
};

export default About;
