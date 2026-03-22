import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../styles/global.css';

const SEMESTERS = [
  {
    label: 'Spring 2026 · Junior (In Progress)',
    courses: [
      'STSCI 3200 · Statistics II',
      'STSCI 4520 · Statistical Computing',
      'STSCI 5065 · Big Data Management and Analysis',
    ],
  },
  {
    label: 'Fall 2025 · Junior',
    courses: [
      'CS 4414 · Systems Programming',
      'STSCI 4030 · Linear Models with Matrices',
      'STSCI 4090 · Theory of Statistics',
    ],
  },
  {
    label: 'Spring 2025 · Sophomore',
    courses: [
      'CS 3410 · Computer System Organization',
      'CS 4300 · Language and Information',
      'CS 4740 · Natural Language Processing',
      'CS 4820 · Introduction to Analysis of Algorithms',
      'ENGRG 3400 · Digital Tech & Innovation (Project Teams)',
    ],
  },
  {
    label: 'Fall 2024 · Sophomore',
    courses: [
      'CS 3110 · Data Structures & Functional Programming',
      'CS 3780 · Introduction to Machine Learning',
      'CS 4320 · Introduction to Database Systems',
      'ENGRG 1400 · Project Team Onboarding',
      'STSCI 4060 · Python Programming & Applications in Statistics',
    ],
  },
  {
    label: 'Spring 2024 · Freshman',
    courses: [
      'CS 1998 · First-Year Team Projects',
      'CS 2110 · Object-Oriented Programming & Data Structures',
      'CS 2800 · Discrete Structures',
      'INFO 1260 · Choices and Consequences in Computing',
      'INFO 2300 · Intermediate Web Design & Programming',
      'MATH 4710 · Basic Probability',
    ],
  },
  {
    label: 'Fall 2023 · Freshman',
    courses: [
      'CS 1110 · Introduction to Computing: Design & Development',
      'CS 1998 · First-Year Team Projects',
      'INFO 1300 · Introduction to Web Design & Development',
      'MATH 2940 · Linear Algebra for Engineers',
    ],
  },
];
function Coursework() {
  return (
    <div className="main-coursework">
      <Header />

      <main
        className="coursework-section"
        style={{ backgroundImage: 'url(/assets/winter-6.jpg)' }}
        aria-label="Coursework"
      >
        <h2 className="coursework-h2">Relevant Coursework</h2>

        <div className="coursework-grid">
          {SEMESTERS.map(({ label, courses }) => (
            <div className="coursework-container" key={label}>
              <h3 className="coursework-semester">{label}</h3>
              <ul className="coursework-list">
                {courses.map(course => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Coursework;