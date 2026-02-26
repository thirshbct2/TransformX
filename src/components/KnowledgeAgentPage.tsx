import React, { useState } from "react";
import VerticalPage from "./VerticalPage";
import { Brain, FileSearch, MessageSquareText, BookOpen } from "lucide-react";

const KnowledgeAgentPage = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const vertical = {
    id: "knowledge-agent",
    title: "Knowledge Agent Solutions",
    description:
      "Intelligent knowledge management and retrieval systems powered by AI to transform how you access, process, and utilize information.",
    image: "/knowledge_agent.jpg",
    icon: <Brain className="w-12 h-12" />,
    projects: [
      {
        id: "rag-chatbot",
        name: "RAG Based Chatbot",
        description:
          "An intelligent chatbot that retrieves accurate answers from documents using Retrieval-Augmented Generation for precise, context-aware responses.",
        image: '/chatbot.jpeg',
        integrationType: "iframe",
        appUrl: "http://127.0.0.1:8503",
        status: "active",
      },
      {
        id: "document-qa",
        name: "Document Q&A System",
        description:
          "AI-powered document question-answering system that extracts insights from large document repositories with natural language queries.",
        image: '/document_qa.jpg',
        integrationType: "iframe",
        appUrl: "http://localhost:8504",
        status: "active",
      },
      {
        id: "knowledge-base",
        name: "Knowledge Base Assistant",
        description:
          "Intelligent assistant that helps users navigate and extract information from complex knowledge bases and documentation.",
        image: '/knowledge_base.jpg',
        integrationType: "iframe",
        appUrl: "http://localhost:8505",
        status: "active",
      },
    ],
  };

  const handleBack = () => {
    if (selectedProject) {
      setSelectedProject(null);
    } else {
      window.location.href = "/";
    }
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-white">
      {selectedProject ? (
        <div className="flex flex-col h-screen">
          <div className="bg-indigo-950 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">{selectedProject.name}</h1>
            <button
              onClick={handleBack}
              className="bg-white text-indigo-950 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              ← Back
            </button>
          </div>

          <iframe
            src={selectedProject.appUrl}
            className="flex-grow w-full"
            title={selectedProject.name}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-top-navigation-by-user-activation"
            allow="fullscreen; clipboard-read; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <VerticalPage
          vertical={vertical}
          onBack={handleBack}
          onProjectClick={handleProjectClick}
        />
      )}
    </div>
  );
};

export default KnowledgeAgentPage;
