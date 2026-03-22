// ── Project Data ──────────────────────────────────────────────────────────────
// Add/edit projects here. Set hasProjectLink: false if no public repo yet.
const PROJECTS = [
  {
    title: 'CourseSphere',
    description:
      "'Retrieval-Augmented Generation system providing tailored course recommendations based on a student's history and preferences.'",
    tags: ['Python', 'RAG', 'NLP'],
    link: 'https://github.com/LambdaAK/CourseSphere',
  },
  {
    title: 'VectorSpace',
    description:
      'Web crawler that builds a search engine on top of vector similarity — indexes pages and ranks results by semantic closeness.',
    tags: ['Python', 'Search', 'Vectors'],
    link: 'https://github.com/Dwain-Anderson/VectorSpace/tree/main',
  },
  {
    title: 'CU-Prelim Planner',
    description:
      'Exam scheduler for Cornell students — web-scrapes exam data and persists it with SQL for conflict detection.',
    tags: ['Python', 'SQL', 'Web Scraping'],
    link: 'https://github.com/Dwain-Anderson/cu-prelim-planner',
  },
  {
    title: 'Soundwave Analysis with Fourier Transform',
    description:
      'Takes an audio file and outputs filtered and transformed variants — visualizing frequency decomposition in real time.',
    tags: ['Python', 'DSP', 'NumPy'],
    link: 'https://github.com/Dwain-Anderson/Sound-Wave-Analysis-with-Fourier-Transform',
  },
  {
    title: 'Image Selection Processor',
    description:
      "Java Swing GUI for interactive image selection using Dijkstra's algorithm, min-heaps, and multi-threading — with live wire contouring and edge detection.'",
    tags: ['Java', 'Algorithms', 'Swing'],
    link: null,
  },
  {
    title: 'Bookkeeper — Cornell AppDev Hackathon',
    description:
      'Full-stack app with user auth (password hashing, sessions), a K-NN recommendation engine, and a RESTful Flask API backed by SQL.',
    tags: ['Python', 'Flask', 'SQL', 'KNN'],
    link: null,
  },
  {
    title: 'Connect-N',
    description:
      'PyGame Connect-N with MVC architecture and an AI player driven by iterative backtracking with memoization.',
    tags: ['Python', 'PyGame', 'AI'],
    link: null,
  },
  {
    title: 'Spreadsheet Formula Evaluator',
    description:
      'Java batch app that evaluates CSV spreadsheets with an interactive calculator — parses formulas into expression trees.',
    tags: ['Java', 'Trees', 'Parsing'],
    link: null,
  },
  {
    title: 'Merging Spreadsheets',
    description:
      'Java batch app performing Left Inner Join on CSV files using a custom linked-list and binary search tree implementation.',
    tags: ['Java', 'Data Structures'],
    link: null,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
function PortfolioDeckOfCards() {
  return (
    <ul className="project-gallery" aria-label="Project list">
      {PROJECTS.map((project, index) => {
        const inner = (
          <>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            {project.tags?.length > 0 && (
              <ul className="project-tags" aria-label="Technologies used">
                {project.tags.map(tag => (
                  <li key={tag} className="project-tag">{tag}</li>
                ))}
              </ul>
            )}
            {project.link && (
              <span className="project-link-label" aria-hidden="true">
                View on GitHub →
              </span>
            )}
          </>
        );

        return (
          <li className="project-item" key={index}>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — opens GitHub`}
              >
                {inner}
              </a>
            ) : (
              <div>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default PortfolioDeckOfCards;