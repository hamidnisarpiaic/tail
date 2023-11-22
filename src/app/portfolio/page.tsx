// pages/portfolio.tsx

import Head from 'next/head';
import Link from 'next/link';
 
 interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
}

const projects: Project[] = [
  // Your projects here
];

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your Full Stack Web Developer Portfolio" />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>

        {projects.map((project, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-800 mb-2">Tech Stack: {project.techStack.join(', ')}</p>

            <div className="flex space-x-4 mb-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Live Demo
              </a>
            </div>

            <div className="flex space-x-4">
              <img
                src={`/img7.jpg`}
                alt={`Project ${index + 1} Image`}
                className="w-32 h-32 object-cover rounded-full cursor-pointer transform transition-transform hover:scale-110"
              />
              {/* Add more images or customize based on your needs */}
            </div>
          </div>
        ))}

<div className="flex-shrink-0 mt-8">
  <Link href="/h1.png">
    <a className="text-blue-500 hover:underline">
      <img
        src="path/to/your-image.png"
        alt="Back to Home"
        className="w-8 h-8 object-contain"
      />
    </a>
  </Link>
</div>
      </div>
    </div>
  );
};

export default Portfolio;
