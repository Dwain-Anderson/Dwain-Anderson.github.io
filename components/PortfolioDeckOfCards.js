const placeholder = '/images/question-mark.png';
const projects = [
     {
        projectTitle: 'CourseSphere',
        projectDescription: 'A Retrieval Augmented Generation system designed to provide tailored course recommendations to students based on their course history and preferences',
        projectImageUrl: placeholder,
        hasProjectLink: true,
        projectLink: 'https://github.com/LambdaAK/CourseSphere'
    },
    {
        projectTitle: 'VectorSpace',
        projectDescription: 'A web-crawler project used to build a search engine built on vector similiarities',
        projectImageUrl: placeholder,
        hasProjectLink: true,
        projectLink: 'https://github.com/Dwain-Anderson/VectorSpace/tree/main'
    },
    {
        projectTitle: 'CU-Prelim Planner',
        projectDescription: 'A simple exam-scheduler project, utilizing web-scraping and SQL to retrieve exam data.',
        projectImageUrl: placeholder,
        hasProjectLink: true,
        projectLink: ''
    },
    {
        projectTitle: 'Soundwave Analysis with Fourier Transform',
        projectDescription: 'A python program that can take in a audio file and output different filtered and transformed versions of it. ',
        projectImageUrl: placeholder,
        hasProjectLink: true,
        projectLink: 'https://github.com/Dwain-Anderson/Sound-Wave-Analysis-with-Fourier-Transform'
    },
    {
        projectTitle: 'Image Selection Processor',
        projectDescription: 'Java Swing app for image selection with Dijkstra’s algorithm, min-heaps, and multi-threading. GUI features live wire contouring and edge detection.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    {
        projectTitle: 'Cornell AppDev Hackathon: Bookkeeper',
        projectDescription: 'SQL database with user login/logout, password hashing, and sessions. Implemented K-Nearest Neighbors recommendation algorithm. Developed RESTful API with Flask.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    {
        projectTitle: 'Connect-N',
        projectDescription: 'Python game using MVC pattern and PyGame for GUI. AI player logic with iterative backtracking algorithms and memoization approaches.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    {
        projectTitle: 'Spreadsheet Formula Evaluation',
        projectDescription: 'Java batch app to evaluate CSV spreadsheets with interactive calculator and formula evaluator. Utilized tree data structures.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    {
        projectTitle: 'Merging Spreadsheets',
        projectDescription: 'Java batch app to perform Left Inner Join on CSV files. Implemented linked-list data structure and binary search tree.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    }
];


function PortfolioDeckOfCards() {
    return (
        <ul className="project-gallery">
            {projects.map((project,index) => (
                <li className="project-item" key={index}>
                    <a href={project.hasProjectLink && project.projectLink ? project.projectLink : "#"} target="_blank" rel="noopener noreferrer">
                        <h3 className="project-title">{project.projectTitle}</h3>
                        <p className="project-desc">{project.projectDescription}</p>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default PortfolioDeckOfCards;
