// import React from "react";
// import { ChevronRight } from "lucide-react";

// function BankingPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-indigo-950 text-white py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-4xl font-bold">BCT Banking Solutions</h1>
//           <nav className="space-x-8">
//             <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
//               Home
//             </a>
//             <a href="#solutions" className="text-gray-300 hover:text-white transition-colors duration-300">
//               Solutions
//             </a>
//             <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
//               Contact
//             </a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-6xl font-bold text-indigo-950 mb-8">AI in Banking</h2>
//         <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//           Transform your banking operations with AI-powered solutions for fraud detection, customer experience, compliance, and digital payments.
//         </p>
//       </section>

//       {/* Solutions Grid */}
//       <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-5xl font-bold text-indigo-950 mb-12 text-center">Our Banking Solutions</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {/* Churn Prediction */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <h4 className="text-2xl font-bold mb-4">Churn Prediction</h4>
//               <p className="text-gray-600 mb-6">
//                 An AI-powered solution that identifies customers at risk of leaving the bank by analyzing transaction patterns, engagement behavior, and demographics. It enables proactive retention strategies through predictive insights and targeted interventions.
//               </p>
//               <a 
//                 href="http://localhost:5174/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="flex items-center text-indigo-950 font-semibold hover:underline"
//               >
//                 Explore <ChevronRight className="ml-2 w-5 h-5" />
//               </a>
//             </div>

//             {/* RAG Based Chatbot */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <h4 className="text-2xl font-bold mb-4">RAG Based Chatbot</h4>
//               <p className="text-gray-600 mb-6">
//                 An intelligent chatbot that retrieves accurate answers from banking documents using Retrieval-Augmented Generation. It delivers precise, context-aware responses to customer queries in real time, enhancing support efficiency and user experience.
//               </p>
//               <a 
//                 href="http://127.0.0.1:8503" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="flex items-center text-indigo-950 font-semibold hover:underline"
//               >
//                 Explore <ChevronRight className="ml-2 w-5 h-5" />
//               </a>
//             </div>

//             {/* Transaction Anomaly Detection */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <h4 className="text-2xl font-bold mb-4">Transaction Anomaly Detection</h4>
//               <p className="text-gray-600 mb-6">
//                 An AI-driven system that monitors banking transactions in real time to detect unusual or fraudulent activities. It leverages machine learning and statistical models to enhance security, compliance, and trust.
//               </p>
//               <a 
//                 href="http://localhost:8501" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="flex items-center text-indigo-950 font-semibold hover:underline"
//               >
//                 Explore <ChevronRight className="ml-2 w-5 h-5" />
//               </a>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-indigo-950 text-white py-12 text-center">
//         <p>© 2025 TransformX Banking. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default BankingPage;



import React, {useState} from "react";
import VerticalPage from "./VerticalPage";
import { Building2, Database, MessageSquare, Activity } from "lucide-react";


const BankingPage = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
  const vertical = {
    id: "banking",
    title: "AI in Banking",
    description:
      "Transform your banking operations with AI-powered solutions for fraud detection, customer experience, compliance, and digital payments.",
    image:
      "/src/public/bank.jpg",
    icon: <Building2 className="w-12 h-12" />,
    projects: [
      {
        id: "churn-prediction",
        name: "Churn Prediction",
        description:
          "An AI-powered solution that identifies customers at risk of leaving the bank by analyzing transaction patterns, engagement behavior, and demographics.",
        image: '/src/public/churn.jpg',
        integrationType: "iframe",
        appUrl: "https://ml-platform-train.onrender.com",
        status: "active",
      },
      {
        id: "voice-based-form-filling",
        name: "Voice Based form filling Bot",
        description:
          "A voice-based form-filling bot enables users to complete digital forms through speech input, improving accessibility, reducing manual typing, and ensuring faster, hands-free data entry with real-time validation and feedbac",
        image: '/src/public/chatbot.jpeg',
        integrationType: "iframe",
        appUrl: "https://voice-based-form-filling-1-jcwk.onrender.com",
        status: "active",
      },
      {
        id: "anomaly-detection",
        name: "Transaction Anomaly Detection",
        description:
          "An AI-driven system that monitors banking transactions in real time to detect unusual or fraudulent activities using machine learning and statistical models.",
        image: '/src/public/anamoly_bank.jpg',
        integrationType: "iframe",
        appUrl: "https://voice-based-form-filling-1-jcwk.onrender.com",
        status: "active",
      },
      {
        id: "intelligent-document-processing",
        name: "Intelligent Document Processing",
        description:
          "Intelligent Document Processing automates the understanding of unstructured documents using AI and machine learning, enabling smart data extraction, classification, and validation for faster, more accurate digital transformation.",
        image: '/src/public/anamoly_bank.jpg',
        integrationType: "iframe",
        appUrl: "https://voice-based-form-filling-1-jcwk.onrender.com",
        status: "active",
      },
      {
        id: "rag-chatbot",
        name: "RAG Based Chatbot",
        description:
          "An intelligent chatbot that retrieves accurate answers from documents using Retrieval-Augmented Generation for precise, context-aware responses.",
        image: '/src/public/chatbot.jpeg',
        integrationType: "iframe",
        appUrl: "http://localhost:3001/",
        status: "active",
      },
      {
        id: "document-qa",
        name: "Document Q&A System",
        description:
          "AI-powered document question-answering system that extracts insights from large document repositories with natural language queries.",
        image: '/src/public/churn.jpg',
        integrationType: "iframe",
        appUrl: "http://localhost:3000/",
        status: "active",
      },
    ],
  };

  
    const handleBack = () => {
    if (selectedProject) {
      setSelectedProject(null); // back to project list
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
        // ✅ Show iframe for selected project
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
          />
        </div>
      ) : (
        // ✅ Show the main vertical page when no project selected
        <VerticalPage
          vertical={vertical}
          onBack={handleBack}
          onProjectClick={handleProjectClick}
        />
      )}
    </div>
  );
};

export default BankingPage;
