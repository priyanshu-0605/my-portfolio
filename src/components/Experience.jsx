import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Salary Estimation Project",
      tech: "KNN Algorithm, Machine Learning",
      description: "Developed a project using K-Nearest Neighbour (KNN) algorithm to estimate salaries based on experience, education, and job role. KNN predicts salary by averaging closest data points, ideal for small datasets.",
      link: "https://github.com/priyanshu-0605/Salary-estimation-using-KNN"
    },
    {
      title: "Flappy Bird Game",
      tech: "Python, Pygame",
      description: "Created interactive games including Flappy Bird and Snake. Built an illustrative application to visualize BFS algorithm in Data Structures using Python.",
      link: "https://github.com/priyanshu-0605/FlappyBird"
    }
  ];

  const certifications = [
    {
      title: "Edunet Foundation Course",
      org: "Code Unnati Program (SAP CSR)",
      period: "2024 - 2025",
      description: "Successfully completed training on Python Programming, Data Analysis with Python, Artificial Intelligence, and SAP Conversational AI Chatbot.",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:afb33ecb-cf23-49cb-911f-4e3f6e85dd3b"
    }
  ];

  return (
    <section id="experience" className="section-container" style={{ padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gradient"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '4rem', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 'bold' }}
      >
        Experience & Projects
      </motion.h2>

      <div style={{ width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(255, 0, 51, 0.15)' }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>{project.title}</h3>
              <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>{project.tech}</p>
              <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{project.description}</p>
            </div>

            <a href={project.link} target="_blank" rel="noreferrer" style={{
              marginTop: 'auto',
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-primary)',
              color: 'white',
              textAlign: 'center',
              borderRadius: '30px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              transition: 'all 0.3s'
            }}
              onMouseOver={(e) => { e.target.style.background = 'var(--color-primary)'; }}
              onMouseOut={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.05)'; }}
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{ padding: '40px', width: '100%', maxWidth: '1000px', borderLeft: '4px solid var(--color-primary)' }}
      >
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>Certifications</h3>
        {certifications.map((cert, index) => (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text)' }}>{cert.title}</h4>
              <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{cert.period}</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '0.5rem' }}>{cert.org}</p>
            <p style={{ color: 'var(--color-text-dim)', marginBottom: '1rem' }}>{cert.description}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" style={{
                display: 'inline-block',
                marginTop: '10px',
                color: 'var(--color-primary)',
                fontWeight: 'bold',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-primary)',
                paddingBottom: '2px',
                transition: 'opacity 0.2s'
              }}
                onMouseOver={(e) => e.target.style.opacity = '0.8'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                View Certificate &rarr;
              </a>
            )}
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Experience;
