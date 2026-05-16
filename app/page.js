const featuredSystems = [
  {
    name: "Identity Access Mesh",
    summary:
      "Policy-driven authorization layer for service-to-service and human access requests.",
    stack: "OPA · Terraform · AWS IAM",
    impact: "Reduced privileged access review time by 42%.",
  },
  {
    name: "Cloud Baseline Factory",
    summary:
      "Reusable infrastructure templates for secure networking, observability, and secrets.",
    stack: "Terraform · GitHub Actions · Azure",
    impact: "Standardized provisioning across 12 environments.",
  },
  {
    name: "Zero Trust Access Gateway",
    summary:
      "Context-aware gateway enforcing workload identity and least privilege boundaries.",
    stack: "Kubernetes · SPIFFE · NGINX",
    impact: "Improved auditability and reduced manual firewall requests.",
  },
];

const experiences = [
  {
    role: "Infrastructure Engineer Intern",
    company: "CloudEdge Systems",
    period: "2025 — Present",
    details:
      "Built IAM automation for onboarding, role mapping, and access attestation workflows.",
  },
  {
    role: "IT Support Specialist",
    company: "California Public Utilities Commission",
    period: "2023 — 2025",
    details:
      "Supported enterprise endpoints and identity operations across Linux and Windows fleets.",
  },
  {
    role: "Platform Engineering Fellow",
    company: "CodePath Labs",
    period: "2024 — 2025",
    details:
      "Shipped internal tooling for deployment diagnostics and cloud environment consistency.",
  },
];

const techStack = [
  "AWS",
  "Azure",
  "Terraform",
  "Kubernetes",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "GitHub Actions",
  "Open Policy Agent",
  "Linux",
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="shell-line" />

      <section className="hero">
        <p className="eyebrow">Infrastructure · IAM · Cloud Engineering</p>
        <h1>Davis Oduor</h1>
        <p className="hero-copy">
          I design and ship secure cloud systems with a focus on identity, policy
          automation, and resilient platform foundations.
        </p>
        <div className="hero-actions">
          <a href="#featured-systems" className="button button-primary">
            View Systems
          </a>
          <a href="#contact" className="button button-secondary">
            Contact
          </a>
        </div>
      </section>

      <section id="featured-systems" className="section">
        <h2>Featured Systems</h2>
        <div className="grid cards">
          {featuredSystems.map((system) => (
            <article key={system.name} className="card">
              <h3>{system.name}</h3>
              <p>{system.summary}</p>
              <p className="muted">{system.stack}</p>
              <p className="impact">{system.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((entry) => (
            <article
              key={`${entry.company}-${entry.role}-${entry.period}`}
              className="timeline-item"
            >
              <p className="period">{entry.period}</p>
              <h3>
                {entry.role} · {entry.company}
              </h3>
              <p>{entry.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tech-stack" className="section">
        <h2>Tech Stack</h2>
        <ul className="tag-list">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Open to infrastructure, IAM, and cloud platform engineering opportunities.</p>
        <a href="mailto:davisoduor65@gmail.com" className="terminal-link">
          <span>$</span> davisoduor65@gmail.com
        </a>
      </section>
    </main>
  );
}
