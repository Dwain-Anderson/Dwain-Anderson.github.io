import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// ── Coursework Data ───────────────────────────────────────────────────────────
const SEMESTERS = [
  {
    label: 'Spring 2025 · Junior (Anticipated)',
    courses: [
      'CS 4820 · Introduction to Analysis of Algorithms',
      'CS 3410 · Computer System Organization and Programming',
      'STSCI 4520 · Statistical Computing',
      'MATH 4720 · Statistics',
      'ECON 3140 · Econometrics',
    ],
  },
  {
    label: 'Fall 2024 · Sophomore',
    courses: [
      'CS 4320 · Introduction to Database Systems',
      'CS 3780 · Introduction to Machine Learning',
      'CS 3110 · Data Structures & Functional Programming',
      'STSCI 4060 · Python Programming and its Applications in Statistics',
    ],
  },
  {
    label: 'Spring 2024 · Freshman',
    courses: [
      'CS 1998 · Introduction to Backend Development',
      'CS 2110 · Object-Oriented Programming & Data Structures',
      'CS 2800 · Discrete Structures',
      'INFO 1260 · Choices and Consequences in Computing',
      'INFO 2300 · Intermediate Web Programming',
      'MATH 4710 · Basic Probability',
    ],
  },
  {
    label: 'Fall 2023 · Freshman',
    courses: [
      'CS 1110 · Introduction to Computing',
      'CS 1998 · Introduction to iOS Development',
      'INFO 1300 · Introduction to Web Design & Development',
      'MATH 2940 · Linear Algebra for Engineers',
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
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