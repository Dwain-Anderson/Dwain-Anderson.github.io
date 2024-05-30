const placeholder = '/images/question-mark.png';
const projects = {
    1: {
        projectTitle: 'Cornell University: Prelim Planner',
        projectDescription: 'A Python Flask + React web app for students to find and add their exams to Google Calendar.',
        projectImageUrl: placeholder,
        hasProjectLink: true,
        projectLink: 'project1link'
    },
    2: {
        projectTitle: 'Project 2 Title',
        projectDescription: 'Project 2 Description',
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
