import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'Python', level: 'Advanced', color: '#ff0033' },
    { name: 'SQL & MySQL', level: 'Intermediate', color: '#ff3355' },
    { name: 'Java', level: 'Intermediate', color: '#ff6677' },
    { name: 'C Language', level: 'Intermediate', color: '#ff8899' },
    { name: 'Data Analysis', level: 'Advanced', color: '#ff4d6d' },
    { name: 'Generative AI', level: 'Advanced', color: '#ff0033' },
  ];

  const tools = [
    'Visual Studio Code', 'PyCharm', 'GitHub', 'Microsoft SQL Server'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-container" style={{ padding: '80px 20px' }}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gradient"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 'bold' }}
      >
        My Skills
      </motion.h2>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="glass-panel"
            style={{
              padding: '30px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255, 0, 51, 0.2)' }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%', right: '-50%',
              width: '100%', height: '100%',
              background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(20px)'
            }}></div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '600', position: 'relative', zIndex: 1 }}>{skill.name}</h3>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '10px' }}>
              <div style={{
                width: skill.level === 'Advanced' ? '90%' : '60%',
                height: '100%',
                background: skill.color,
                borderRadius: '2px',
                boxShadow: `0 0 10px ${skill.color}`
              }}></div>
            </div>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginTop: '10px' }}>{skill.level}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="glass-panel"
        style={{ padding: '40px', textAlign: 'center' }}
      >
        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Tools & Technologies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {tools.map(tool => (
            <span key={tool} style={{
              padding: '10px 20px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              background: 'rgba(255,255,255,0.03)',
              fontSize: '1.1rem'
            }}>
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
