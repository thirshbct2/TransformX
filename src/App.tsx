import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './components/HomePage';
import VerticalPage from './components/VerticalPage';
import BankingPage from './components/BankingPage';
import KnowledgeAgentPage from './components/KnowledgeAgentPage';
import { ProjectLoader } from './components/ProjectLoader';
import { Project, Vertical } from './types/Project';
import {
  ChevronRight,
  Code,
  Activity,
  Building,
  ShoppingCart,
  Banknote,
  Users,
  Server,
} from 'lucide-react';

const verticals: Vertical[] = [
  {
    id: 'rai-hub',
    title: 'Responsible AI',
    icon: <Building className="w-8 h-8" />,
    description: 'From outputs to insights, Responsible AI made measurable.',
    image: 'responsible.jpg',
    projects: [
      {
        id: 'rai-hub-legacy',
        name: 'Responsible AI (RAI) Hub',
        description: 'AI-powered interface design and development assistant',
        image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
        appUrl: ' http://localhost:5173/',
        integrationType: 'iframe',
        status: 'active',
        tags: ['responsible-ai', 'legacy'],
      },
      // {
      //   id: 'rai-ai-assurance',
      //   name: 'AI Assurance',
      //   description: 'AI-powered interface for RAG evaluation.',
      //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      //   appUrl: 'http://127.0.0.1:8503',
      //   integrationType: 'iframe',
      //   status: 'active',
      //   tags: ['responsible-ai', 'legacy'],
      // },
    ],
  },
  {
    id: 'ai-sdlc',
    title: 'AI at SDLC',
    icon: <Code className="w-8 h-8" />,
    description: 'Accelerate software development with AI-powered tools',
    image: '/ai@sdlc.jpg',
    projects: [
      {
        id: 'ui-code-assistant',
        name: 'UI Code Generator',
        description: 'AI-powered interface design and development assistant',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
        appUrl: 'https://ui-code-generator-7jmj.onrender.com/',
        integrationType: 'iframe',
        status: 'active',
        tags: ['ui', 'development'],
      },
      {
        id: 'ui-assistant',
        name: 'UI Code Refactorer',
        description: 'AI-powered interface design and development assistant',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
        appUrl: 'https://ui-code-refact.onrender.com',
        integrationType: 'iframe',
        status: 'active',
        tags: ['ui', 'development'],
      },
      {
        id: 'api-code-assistant',
        name: 'API Code Assistant',
        description: 'Intelligent API development and integration support',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
        appUrl: 'https://api-code-gen-azo4.onrender.com/',
        integrationType: 'iframe',
        status: 'active',
        tags: ['api'],
      },
    ],
  },
  {
    id: 'local_modlel',
    title: 'BCT AI Studio',
    icon: <Server className="w-8 h-8" />,
    description: 'Enabling AI innovation with secure, offline and local execution.',
    image: '/on_prem.png',
    projects: [
      {
        id: 'model',
        name: 'On-Premise LLM Service',
        description: 'Run and manage AI models locally with full control and privacy',
        image: '/src/public/ai_studio.jpg',
        appUrl: 'http://localhost:5176/',
        integrationType: 'iframe',
        status: 'active',
        tags: ['AI-studio', 'legacy'],
      },
    ],
  },
  {
    id: 'ml-flow',
    title: 'BCT ML Studio',
    icon: <Server className="w-8 h-8" />,
    description: 'Build. Train. Experiment. Export.',
    image: '/ml_studio.jpg',
    projects: [
      {
        id: 'ML-FLOW',
        name: 'ML Platform',
        description: 'From data to model—ready for your use',
        image: '/src/public/ml_studio.jpg',
        appUrl: 'https://ml-platform-train.onrender.com',
        integrationType: 'iframe',
        status: 'active',
        tags: ['ML-studio', 'legacy'],
      },
      {
        id: 'anamoly',
        name: 'Anamoly Detection',
        description: 'Track. Analyze. Optimize performance.',
        image: '/anamoly.jpg',
        appUrl: 'https://anomaly-detection-pyto.onrender.com/',
        integrationType: 'iframe',
        status: 'active',
        tags: ['ML-studio', 'legacy'],
      },
      {
        id: 'truck_congestion',
        name: 'Truck Congestion Predictor',
        description: 'Predicting truck congestion',
        image: '/truck_congestion.jpg',
        appUrl: 'https://truck-congestion.onrender.com/',
        integrationType: 'iframe',
        status: 'active',
        tags: ['ML-studio', 'legacy'],
      },
    ],
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedVertical, setSelectedVertical] = useState<Vertical | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleVerticalClick = (vertical: Vertical) => {
    setSelectedVertical(vertical);
    setCurrentPage('vertical');
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedVertical(null);
    setSelectedProject(null);
  };

  const handleBackToVertical = () => {
    setCurrentPage('vertical');
    setSelectedProject(null);
  };

  const renderCurrentPage = () => {
    if (currentPage === 'project' && selectedProject) {
      return (
        <ProjectLoader
          project={selectedProject}
          onBack={selectedVertical ? handleBackToVertical : handleBackToHome}
        />
      );
    }

    if (currentPage === 'vertical' && selectedVertical) {
      return (
        <VerticalPage
          vertical={selectedVertical}
          onBack={handleBackToHome}
          onProjectClick={handleProjectClick}
        />
      );
    }

    return <HomePage verticals={verticals} onVerticalClick={handleVerticalClick} />;
  };

  return (
    <Router>
      <Routes>
        {/* Existing home + state navigation */}
        <Route path="/" element={renderCurrentPage()} />

        {/* Industry Solutions routes */}
        <Route path="/banking" element={<BankingPage />} />
        <Route path="/knowledge-agent" element={<KnowledgeAgentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
