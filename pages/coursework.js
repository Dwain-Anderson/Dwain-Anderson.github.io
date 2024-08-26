import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


function Coursework() {
    const backgroundImage = '/assets/winter-6.jpg';
    return (
        <div className='main-coursework'>
            <Header />
            <main className='coursework-section' style={{backgroundImage: `url(${backgroundImage})`}}>
                <h2 className='coursework-h2'>Relevant Coursework</h2> 
                <div className='coursework-container'>
                    <h3>Spring 2024 Anticipated (Sophomore)</h3>
                    <ul className="coursework-list">
                        <li className='coursework-text'>CS 4820: Intro to Analysis of Algorithms</li>
                        <li className='coursework-text'>CS 3410: Computer System Organization and Programming</li>
                        <li className='coursework-text'>STSCI 4520: Statistical Computing</li>
                        <li className='coursework-text'>MATH 4720: Statistics</li>
                        <li className='coursework-text'>ECON 3140: Econometrics</li>
                    </ul>
                </div>
                <div className='coursework-container'>
                    <h3>Fall 2024 (Sophomore)</h3>
                    <ul className="coursework-list">
                        <li className='coursework-text'>CS 4320: Intro to Database Systems</li>
                        <li className='coursework-text'>CS 3780: Intro to Machine Learning</li>
                        <li className='coursework-text'>CS 3110: Data Structures & Functional Programming</li>
                        <li className='coursework-text'>STSCI 4060: Python Programming and its Applications in Statistics</li>
                    </ul>
                </div>
                <div className='coursework-container'>  
                    <h3>Spring 2024 (Freshmen)   :(  </h3>
                    <ul className="coursework-list">
                        <li className='coursework-text'>CS 1998: Intro to Backend Development</li>
                        <li className='coursework-text'>CS 2110: Object-Oriented Programming & Data Structures</li>
                        <li className='coursework-text'>CS 2800: Discrete Structures</li>
                        <li className='coursework-text'>INFO 1260: Choices and Consequences in Computing</li>
                        <li className='coursework-text'>INFO 2300: Intermediate Web Programming</li>
                        <li className='coursework-text'>MATH 4710: Basic Probability</li>
                    </ul>
                </div>
                <div className='coursework-container'>
                    <h3>Fall 2023 (Freshmen)</h3>
                    <ul className="coursework-list">
                        <li className='coursework-text'>CS 1110: Intro to Computing: A Design & Development Perspective</li>
                        <li className='coursework-text'>CS 1998: Intro to iOS Development</li>
                        <li className='coursework-text'>INFO 1300: Intro to Web Design & Development</li>
                        <li className='coursework-text'>MATH 2940: Linear Algebra for Engineers</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Coursework;
