const placeholder = '/images/question-mark.png';
const projects = {
    1: {
        projectTitle: 'Cornell University: Prelim Planner',
        projectDescription: 'A Python Django web app for students to find and add their exams to Google Calendar.',
        projectImageUrl: placeholder,
        hasProjectLink: true,
        projectLink: 'project1link'
    },
    2: {
        projectTitle: 'Sound Waves Analysis with Fourier Transforms',
        projectDescription: 'Web app enabling users to upload audio files, apply filters, and view plots. Built with React, Next.js, Flask, SciPy, and NumPy.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    3: {
        projectTitle: 'Image Selection Processor',
        projectDescription: 'Java Swing app for image selection with Dijkstra’s algorithm, min-heaps, and multi-threading. GUI features live wire contouring and edge detection.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    4: {
        projectTitle: 'Cornell AppDev Hackathon: Bookkeeper',
        projectDescription: 'SQL database with user login/logout, password hashing, and sessions. Implemented K-Nearest Neighbors recommendation algorithm. Developed RESTful API with Flask.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    5: {
        projectTitle: 'Connect-N',
        projectDescription: 'Python game using MVC pattern and PyGame for GUI. AI player logic with iterative backtracking algorithms and memoization approaches.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    6: {
        projectTitle: 'Spreadsheet Formula Evaluation',
        projectDescription: 'Java batch app to evaluate CSV spreadsheets with interactive calculator and formula evaluator. Utilized tree data structures.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    },
    7: {
        projectTitle: 'Merging Spreadsheets',
        projectDescription: 'Java batch app to perform Left Inner Join on CSV files. Implemented linked-list data structure and binary search tree.',
        projectImageUrl: placeholder,
        hasProjectLink: false,
        projectLink: ''
    }
};


function PortfolioDeckOfCards() {
    return (
        <>
            {Object.keys(projects).map((key) => {
                const project = projects[parseInt(key, 10)]; 
                return (
                    <div className="project-card" key={key}>
                        <img className="project-image" src={project.projectImageUrl} alt={project.projectTitle} />
                        <h3 className="project-title">{project.projectTitle}</h3>
                        <p className="project-desc">{project.projectDescription}</p>
                        {project.hasProjectLink && project.projectLink && <a href={project.projectLink}>Link to Repo</a>}
                    </div>
                );
            })}
        </>
    );
}

export default PortfolioDeckOfCards;
