import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Hand Gesture Game Controller',
    desc: 'A Hand Gesture Game Controller that lets you play games using your webcam. It tracks your finger movement and turns it into arrow key controls. No keyboard or mouse needed for control.',
    ss: '/game.png',
    tech: ['OpenCV', 'Mediapipe', 'Pyautogui', 'Python'],
    // live: '#',
    code: 'https://github.com/Subramanyam2411/Hand_Gesture_Game_Controller'
  },
  {
    title: 'Food Image Recognition ',
    desc: 'GastroVision is a food image classification system built with MobileNetV2. It can recognize 31 types of food from images. The model is lightweight and fast, making it suitable for mobile apps and real-time food recognition.',
    ss: '/food.jpg',
    tech: ['Django', 'Numpy', 'Pillow', 'TensorFlow'],
    // live: 'https:',
    code: 'https://github.com/Subramanyam2411/Deep-Learning-Based-Food-Image-Recognition-Using-MobileNetV2'
  },
  {
    title: 'Smoke & Fire Detection with alert Notification Using Deep Learning',
    desc: 'Real-Time Smoke & Fire Detection system using YOLOv11, Designed to monitor Images, Videos, and Live Camera feeds and trigger instant alerts when fire or smoke is detected.',
    ss: '/S&F.jpeg',
    tech: ['Mediapipe', 'TensorFlow', 'React', 'Flask'],
    // live: '#',
    // code: 'https://github.com/'
  },
  // {
  //   title: '💼 Portfolio Website',
  //   desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  //   ss: '/portfolio.jpg',
  //   tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  //   live: '#',
  //   code: 'https://github.com/kunj2803/Kunj-Portfolio'
  // },
  {
    title: 'Human Action Recognition Using Deep Learning Model',
    desc: 'Built a real-time action recognition system using ResNet-34 and transfer learning.Trained the model on the Kinetics- 400 dataset to recognize actions from images, videos, and live streams with high accuracy.',
    ss: '/HAR.png',
    tech: ['Tensorflow', 'PyTorch', 'OpenCV', 'Keras', 'Scikit-Learn', 'SQL', 'Django', 'Python'],
    // live: 'https:///',
    // code: 'https://github.com/'
  },
  {
    title: 'E-Commerce Recommendation System Model Based on Cloud Computing',
    desc: 'Built a scalable cloud-based solution using data mining and machine learning to deliver personalized product recommendations and enhance user experience.',
    ss: '/E-commerce.jpeg',
    tech: ['Matplotlib', 'Pandas', 'Seaborn', 'keras', 'nltk', 'numpy'],
    // live: 'https:///',
    // code: 'https://github.com/'
  },

]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
