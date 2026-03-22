const PROJECTS = [
  {
    title: 'CourseSphere',
    description:
      'Retrieval-Augmented Generation system providing tailored course recommendations based on a student\'s history and preferences.',
    tags: ['Python', 'RAG', 'NLP'],
    link: 'https://github.com/LambdaAK/CourseSphere',
    featured: true,
  },
  {
    title: 'VectorSpace',
    description:
      'Web crawler that builds a search engine on top of vector similarity — indexes pages and ranks results by semantic closeness.',
    tags: ['Python', 'Search', 'IR'],
    link: 'https://github.com/Dwain-Anderson/VectorSpace/tree/main',
    featured: true,
  },
  {
    title: 'Image Selection Processor',
    description:
      "Java Swing GUI for interactive image selection using Dijkstra's algorithm, min-heaps, and multi-threading — with live wire contouring and edge detection.",
    tags: ['Java', 'Algorithms', 'Swing'],
    link: null,
    isSchoolProject: true,
  },
  {
    title: 'Connect-N',
    description:
      'PyGame Connect-N with MVC architecture and an AI player driven by iterative backtracking with memoization.',
    tags: ['Python'],
    link: null,
    isSchoolProject: true,
  },
  {
    title: 'Spreadsheet Formula Evaluator',
    description:
      'Java batch app that evaluates CSV spreadsheets with an interactive calculator — parses formulas into expression trees.',
    tags: ['Java', 'Trees', 'Parsing'],
    link: null,
    isSchoolProject: true,
  },
  {
    title: 'Merging Spreadsheets',
    description:
      'Java batch app performing Left Inner Join on CSV files using a custom linked-list and binary search tree implementation.',
    tags: ['Java', 'Data Structures'],
    link: null,
    isSchoolProject: true,
  },
];

function ProjectCard({ project }) {
  const content = (
    <>
      {/* Top meta row */}
      <div className="card-meta-row">
        {project.isSchoolProject && (
          <span className="school-badge">School Project</span>
        )}
        {project.featured && (
          <span className="featured-badge">Featured</span>
        )}
      </div>

      {/* Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Description */}
      <p className="project-desc">{project.description}</p>

      {/* Footer: tags + link */}
      <div className="card-footer">
        {project.tags?.length > 0 && (
          <div className="card-tags" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
        {project.link && (
          <span className="project-link-label" aria-hidden="true">
            View on GitHub →
          </span>
        )}
      </div>
    </>
  );

  const cls = [
    'project-item',
    project.featured ? 'project-item--featured' : '',
    project.link ? 'project-item--linked' : '',
  ].filter(Boolean).join(' ');

  return (
    <li className={cls}>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — opens GitHub`}
        >
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </li>
  );
}

function PortfolioDeckOfCards() {
  const featured = PROJECTS.filter(p => p.featured);
  const rest     = PROJECTS.filter(p => !p.featured);

  return (
    <>
      {/* Featured row — 2 cols, larger cards */}
      <ul className="project-gallery project-gallery--featured" aria-label="Featured projects">
        {featured.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>

      {/* Divider */}
      <div className="gallery-divider">
        <span className="gallery-divider-label">School Projects</span>
      </div>

      {/* School projects — tighter 2-col grid */}
      <ul className="project-gallery project-gallery--school" aria-label="School projects">
        {rest.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </>
  );
}

export default PortfolioDeckOfCards;