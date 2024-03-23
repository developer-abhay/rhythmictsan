import "./CourseDetail.css";

const CourseDetail = ({ img, detail }) => {
  return (
    <main className="course-details container">
      <h1>Acoustic Guitar Mastery Course</h1>
      <div className="overview">
        <div>
          <h3>Overview</h3>
          <p>
            Embark on a journey to master the acoustic guitar with our
            comprehensive course, meticulously crafted to follow the official
            curriculums of Rock School London and Trinity College of London.
            Designed for students of all levels, from absolute beginners to
            advanced players, this course is divided into three parts: Beginner
            (grades 0-2), Intermediate (grades 3-5), and Advanced (grades 6-8).
            Students will explore a vast array of techniques and styles,
            covering everything from basic chords and strumming patterns to
            complex fingerpicking, melodic soloing, and advanced rhythmic
            techniques.
          </p>
        </div>
        <div className="overview-img">
          <img src={img} alt="" />
        </div>
      </div>

      <h3>Course Curriculum</h3>
      <p>
        We have different curriculum for different levels of experiences.
        Following are some of the important things that you'll learn during the
        course duration:
      </p>
      <div>
        <h5>Beginner Level </h5>
        <ul>
          <li>Introduction to basic chords (major, minor, dominant 7th)</li>
          <li>Essential strumming patterns and rhythm techniques</li>
          <li>Introduction to fingerpicking and basic arpeggios</li>
          <li>Basic music theory and notation</li>
          <li>
            Introduction to popular acoustic guitar styles (folk, pop, blues)
          </li>
        </ul>
      </div>
      <div>
        <h5>Intermediate Level </h5>
        <ul>
          <li>Advanced chord voicings and inversions</li>
          <li>Complex fingerpicking patterns and techniques</li>
          <li>Introduction to improvisation and soloing</li>
          <li>Introduction to music theory concepts (scales, modes)</li>
          <li>
            Exploring diverse acoustic guitar styles (fingerstyle, classical,
            jazz)
          </li>
        </ul>
      </div>
      <div>
        <h5>Advanced Level</h5>
        <ul>
          <li>Advanced soloing techniques and improvisation concepts</li>
          <li>Mastery of complex rhythmic patterns and syncopation</li>
          <li>
            Advanced music theory application (harmony, chord substitutions)
          </li>
          <li>
            Stylistic exploration of world music influences (flamenco, bossa
            nova)
          </li>
          <li>Performance preparation and repertoire development</li>
        </ul>
      </div>

      <h3>Instructor Details</h3>
      <p>
        Our experienced instructors are certified by Rock School London and
        Trinity College of London, bringing a wealth of knowledge and expertise
        to each lesson. They are passionate about nurturing students' talents
        and guiding them towards mastery of the acoustic guitar.
      </p>

      <h3>Course Features</h3>
      <p>
        Experience a comprehensive learning journey with our Acoustic Guitar
        Mastery course, tailored to suit your individual needs and aspirations.
        Enjoy the flexibility of class schedules, featuring two engaging
        sessions per week. Delve into our extensive library of lesson materials,
        including immersive video tutorials, interactive exercises, and
        downloadable resources. Benefit from regular assessments and progress
        tracking to monitor your development and ensure steady improvement.
        Plus, access supplementary materials and resources to reinforce learning
        and enhance your skill set beyond the classroom.
      </p>

      <h3>Course Format</h3>
      <p>
        Our Acoustic Guitar Mastery course offers flexible enrollment options,
        allowing you to choose between 3-month, 6-month, or 1-year durations.
        With two flexible classes per week, you can balance your learning
        seamlessly with other commitments. Embrace a self-paced learning
        environment, supported by structured lesson plans tailored to your skill
        level and musical goals. Whether you're a novice or a seasoned player,
        our course format ensures a rewarding and enriching learning experience
        at your own pace.
      </p>

      <h3>Prerequisites</h3>
      <p>
        No prior experience is required for beginners. Intermediate and advanced
        levels require proficiency corresponding to the respective grade levels.
      </p>

      <h3>Enrollment Information</h3>
      <p>
        Choose from our three plans: 3 months, 6 months, or 1 year. Enroll now
        to start your journey towards mastering the acoustic guitar and unlock
        your full musical potential.
      </p>
    </main>
  );
};

export default CourseDetail;
