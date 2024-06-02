import React from 'react';
import Project from './Project';

const Projects = () => {
  const projectList = [
    { title: 'Full Stack Ecommerce', description: 'Complete MERN ecommerce project with admin dashboard. Front-end with ReactJS, backend with ExpressJS, and database handled with MongoDB. ChartJS used in dashboard.', image: '/ecom.jpg', link: 'https://github.com/SYEDMUNEEEB/React-admin-dashboard.git' },
    { title: 'Human Resource Management System', description: 'Complete Human Resource Management System with admin dashboard. Admin assigns tasks, manages tasks, internees complete tasks, mark attendance, and trainers mark attendance and handle leave requests.', image: '/hr.png', link: 'https://github.com/SYEDMUNEEEB/HRM.git' },
    { title: 'Agriculture Management System', description: 'Complete Agriculture Management System with admin dashboard using the MERN stack.', image: '/ams.png', link: 'https://github.com/muneeb-syed/project3' },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h1 className="text-4xl text-center mb-12">Projects</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
