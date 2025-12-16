import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Ellenki College of Engineering and Technology",
      degree: "B.Tech CSE - AIML (3rd Year)",
      period: "07/2023 - Present",
      gpa: "Cumulative GPA: 8.93/10",
      detail: "General Secretary of Artificial Intelligence Club"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate",
      period: "06/2021 - 2023",
      gpa: "Cumulative GPA: 9.5/10",
      detail: "Vittalwadi, Hyderabad"
    },
    {
      institution: "St. Joseph's Public School (ICSE)",
      degree: "Schooling",
      period: "08/2017 - 2021",
      gpa: "Percentage: 92%",
      detail: "King Koti, Hyderabad"
    }
  ];

  return (
    <section id="about" className="section-container" style={{ padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Intro */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{ padding: '60px', maxWidth: '900px', width: '100%', position: 'relative', overflow: 'hidden', marginBottom: '4rem' }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '4px', height: '100%',
          background: 'linear-gradient(to bottom, var(--color-primary), transparent)'
        }}></div>

        <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem', fontFamily: 'var(--font-display)', fontWeight: 'bold' }}>
          About Me
        </h2>

        <div style={{ lineHeight: '2', fontSize: '1.15rem', color: '#eaeaea' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I am a passionate <strong>B.Tech</strong> student specializing in <strong>Artificial Intelligence and Machine Learning</strong>. I thrive on solving complex problems and building intelligent systems that make a difference.
          </p>
          <p>
            With a strong foundation in <strong>Python</strong> and <strong>Data Analysis</strong>, I am constantly exploring the frontiers of Generative AI. Beyond the code, I lead as the <strong>General Secretary of the AI Club</strong> at my college, fostering a community of learners and innovators.
          </p>
        </div>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '900px' }}
      >
        <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontFamily: 'var(--font-display)' }}>Education</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ padding: '30px', borderLeft: '4px solid var(--color-primary)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white' }}>{edu.institution}</h4>
                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{edu.period}</span>
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{edu.degree}</p>
              <p style={{ color: 'var(--color-text-dim)', marginBottom: '0.5rem' }}>{edu.gpa}</p>
              <p style={{ fontSize: '0.9rem', color: '#888' }}>{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default About;
