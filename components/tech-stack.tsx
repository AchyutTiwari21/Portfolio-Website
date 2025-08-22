'use client';

import { motion } from 'framer-motion';

export default function TechStack() {
  const technologies = [
    { name: 'C++', color: 'bg-blue-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Java', color: 'bg-red-500' },
    { name: 'Python', color: 'bg-green-500' },
    { name: 'NodeJS', color: 'bg-green-600' },
    { name: 'ReactJS', color: 'bg-cyan-500' },
    { name: 'NextJS', color: 'bg-gray-900' },
    { name: 'ExpressJS', color: 'bg-gray-600' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'PostgreSQL', color: 'bg-blue-700' },
    { name: 'MySQL', color: 'bg-blue-600' },
    { name: 'TailwindCSS', color: 'bg-cyan-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Technologies I work with
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            className={`px-4 py-2 rounded-full text-white text-sm font-medium ${tech.color} hover:scale-105 transition-transform cursor-default`}
          >
            {tech.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}