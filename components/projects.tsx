'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Filter } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Agri-Connect',
      description: 'A full-stack web application connecting farmers with buyers, product listings, and secure transactions.',
      image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg',
      technologies: ['NextJS', 'PostgreSQL', 'Prisma ORM', 'TailwindCSS', 'Razorpay'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/AchyutTiwari21/Agri-Connect',
      liveUrl: 'https://agri-connect-eight-wheat.vercel.app/'
    },
    {
      id: 2,
      title: 'VideoTube-API',
      description: 'A Video Tube API for managing and uploading vidoes on the backend system. Authentication and Authorization of the users through JWT and cookies.',
      image: 'https://images.pexels.com/photos/4064830/pexels-photo-4064830.jpeg',
      technologies: ['NodeJS', 'ExpressJS', 'MongoDB'],
      category: 'Backend',
      githubUrl: 'http://github.com/AchyutTiwari21/VideoTube-API',
      liveUrl: 'http://github.com/AchyutTiwari21/VideoTube-API',
    },
    {
      id: 3,
      title: 'Children Application',
      description: 'A modern, responsive children application built with React, TypeScript and TailwindCSS featuring nursery rhymes, alphabets, games on mathematical operations and animations.',
      image: 'https://images.pexels.com/photos/1720188/pexels-photo-1720188.jpeg',
      technologies: ['ReactJS', 'TS', 'TailwindCSS', 'Framer Motion'],
      category: 'Frontend',
      githubUrl: 'https://github.com/AchyutTiwari21/Bright-Beans',
      liveUrl: 'https://bright-beans.vercel.app/',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and TailwindCSS featuring dark mode and animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['NextJS', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      category: 'Frontend',
      githubUrl: 'https://github.com/AchyutTiwari21/Portfolio-Website',
      liveUrl: '#',
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedFilter === category ? "default" : "outline"}
              onClick={() => setSelectedFilter(category)}
              className="px-6 py-2 rounded-full transition-all duration-300"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}