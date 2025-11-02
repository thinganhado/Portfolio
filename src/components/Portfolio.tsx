import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Award, Code2, Database, Palette, Server, Smartphone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
const profileImage = "https://drive.google.com/uc?export=view&id=1WC9XZFKnGp0JvPkXHUdbe8FCEvDgGk2o";
const classForgeImage = "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MTk3ODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
import gaFlowchartImage from "figma:asset/b42b1eb95b7be63ba5f9e741f9d5f754962e18f7.png";

// Temporary placeholder images - will be replaced with actual assets
const mlModelsTable = "https://images.unsplash.com/photo-1585656297773-dcd8c7a7c2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBtb2RlbHMlMjB0YWJsZSUyMGNoYXJ0fGVufDF8fHx8MTc1OTQ5Nzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const performanceEvalImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMG1ldHJpY3MlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzU5NDk3ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const workExperience = [
    {
      title: "AI/ML Research Intern",
      company: "CSIRO's Data61",
      companyUrl: "https://www.csiro.au/",
      period: "Aug 2025 – Current",
      location: "Melbourne, Australia",
      description: "Research Topic: Analysis and Detection of Voice Clone Attacks in Audio Deepfake Systems. Supervised by Dr. Sharif Abuadbba, Dr. Kristen Moore & Dr. Tina Wu.",
      details: [
        "Implemented and evaluated state-of-the-art classification pipelines (ViT, AASIST), building frontends to process both 1D waveforms and 2D spectrograms for model input",
        "Applied baseline XAI methods (GradientSHAP, DeepSHAP, AttnLRP) and advanced techniques (diffusion-based XAI, concept-based XAI) to interpret deepfake detection models",
        "Designed workflows to incorporate LLMs for explanation, analysing regions and model decisions to provide human-readable insights",
        "Collaborated closely with supervisors, delivering weekly progress updates and aligning research direction",
        "Contributed to research publication writing and organized a public GitHub repository"
      ],
      skills: ["Python", "PyTorch", "Computer Vision", "ViT", "AASIST", "XAI", "LLMs", "Research", "GitHub"]
    },
    {
      title: "Data Analyst Intern",
      company: "SW Education",
      companyUrl: "https://www.sweducation.com.au/",
      period: "July 2024 – Oct 2024",
      location: "Melbourne, Australia",
      description: "Led data migration and analytics initiatives, built automated ETL pipelines, and developed customer service solutions using AI/ML technologies.",
      details: [
        "Migrated in-house RDBMS to AWS RDS (MySQL), added a CSV upload portal and Lambda ETL for automated preprocessing, reducing manual effort by 80% and shrinking report prep from multi-day to minutes",
        "Built two Power BI dashboards (Sales, Marketing), live-connected to RDS with IAM permissions and monthly auto-refresh, now used in recurring team meetings for actionable insights",
        "Designed and implemented an event data intake platform using Jotform that validates inputs, preprocesses data on receipt, and loads to the analytics store for immediate use",
        "Integrated Zoho Desk API and built a customer service chatbot, ingested product and service knowledge into RAG pipeline with intent classification and FAQ matching, reducing average wait time from 1 hour to 5 minutes",
        "Led a team of four interns, delegating tasks and coordinating regularly with Managing Director"
      ],
      skills: ["AWS", "MySQL", "Power BI", "Python", "ETL", "Lambda", "Jotform", "Zoho API", "RAG", "Team Leadership"]
    }
  ];

  const projects = [
    {
      title: "ClassForge: AI-Powered Classroom Allocation System",
      year: "2025",
      description: "Built an end-to-end allocation pipeline using NetworkX, PyTorch Geometric, R-GCN, R-GAT, and NSGA II, optimizing class assignments by balancing multiple objectives with custom fitness function, allocation recompute within 2 minutes, MAE 2.35, and 90% recall.",
      details: [
        "Implemented hybrid modular-layered architecture with algorithmic processing, visualization, and customization modules",
        "Deployed on AWS and Oracle Cloud Infrastructure with automated CI/CD pipeline from GitHub",
        "Created constraint repair mechanism to enforce feasibility in evolutionary optimization process"
      ],
      fullDescription: "ClassForge is an AI-powered classroom allocation system that optimizes student groupings by combining academic performance, well-being data, and social network analysis. The system addresses five key concerns: academic performance balance, student wellbeing support, bullying prevention, social influence regulation, and friendship connection maximization.",
      keyFeatures: [
        "Machine Learning Pipeline: Five specialized models including R-GCN for influence/isolation classification, R-GAT for GPA regression, clustering for wellbeing classification, community detection for bullying identification, and link prediction for friendship modeling",
        "Advanced Optimization: Genetic Algorithm with tournament selection, crossover, and mutation operations, plus constraint repair mechanism ensuring class size limits (max 30 students, max 5 student difference between classes)",
        "Multi-Objective Fitness Function: Balances GPA variance minimization, wellbeing distribution, bully-victim separation, influential student distribution, and friendship density maximization",
        "Interactive Visualizations: Power BI dashboards with live AWS database connection and Cytoscape.js network visualizations with filtering, class-based selection, and interactive highlighting",
        "Customization Interface: 'Set Priorities' UI for adjusting constraint weights via JSON configuration and 'Specifications' functionality for manual student reassignments",
        "NLP Integration: Hybrid chatbot with TF-IDF vectorization and Random Forest intent classifier (86% accuracy) providing constraint adjustment guidance and optimization recommendations"
      ],

      technologies: ["Python", "NetworkX", "PyTorch Geometric", "R-GCN", "R-GAT", "NSGA II", "Power BI", "Cytoscape.js", "NLP", "Random Forest", "AWS", "Oracle Cloud", "TF-IDF"],
      link: "https://github.com/thinganhado/TIRP_ClassForge/",
      status: "Completed",
      image: classForgeImage
    },
    {
      title: "Sentiment Classification of Reviews",
      year: "2025",
      description: "Built and tuned a scikit learn sentiment classifier on Sentiment Labelled Sentences dataset, engineered TF IDF features, trained LinearSVC with GridSearchCV, achieved 84% accuracy with balanced confusion matrices.",
      fullDescription: "A comprehensive sentiment analysis project that implements machine learning techniques to classify customer reviews and feedback. The project demonstrates expertise in feature engineering, model selection, and performance optimization for text classification tasks.",
      keyFeatures: [
        "Feature Engineering: Advanced TF-IDF vectorization with custom preprocessing pipeline for optimal text representation",
        "Model Optimization: Systematic hyperparameter tuning using GridSearchCV for optimal LinearSVC configuration",
        "Performance Metrics: Achieved 84% classification accuracy with balanced confusion matrices across sentiment classes",
        "Data Pipeline: Robust preprocessing workflow handling text normalization, tokenization, and feature extraction",
        "Cross-validation: Comprehensive model validation ensuring generalization across different review domains"
      ],
      challenges: [
        "Handling imbalanced sentiment classes in the dataset",
        "Optimizing feature extraction for short and long review texts",
        "Preventing overfitting while maximizing classification accuracy",
        "Ensuring model interpretability for business applications"
      ],
      technologies: ["Python", "scikit-learn", "TF-IDF", "LinearSVC", "GridSearchCV", "Data Science"],
      link: "https://github.com/username/sentiment-classification",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1711526601858-8186703f7895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW50aW1lbnQlMjBhbmFseXNpcyUyMHRleHQlMjBjbGFzc2lmaWNhdGlvbnxlbnwxfHx8fDE3NTk0OTUwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Action Recognition on UCF101",
      year: "2025",
      description: "Implemented a deep learning pipeline in PyTorch with torchvision and OpenCV, using a CNN/LSTM architecture for spatiotemporal modeling, achieved 80% accuracy and about 80% F1.",
      details: [
        "Built machine learning baselines with STIP, HOG, HOF, Bag of Visual Words, and PCA, trained SVM classifiers in scikit learn, achieved 53% accuracy for STIP + BoVW + SVM and about 38% accuracy for global HOG + HOF + SVM"
      ],
      fullDescription: "A comprehensive computer vision project implementing state-of-the-art action recognition techniques on the challenging UCF101 dataset. The project demonstrates expertise in both deep learning and traditional computer vision approaches for video analysis.",
      keyFeatures: [
        "Deep Learning Pipeline: End-to-end CNN/LSTM architecture using PyTorch for spatiotemporal feature learning and sequence modeling",
        "High Performance: Achieved 80% accuracy and 80% F1-score on UCF101 dataset, demonstrating robust action classification",
        "Traditional CV Baselines: Comprehensive comparison with classical methods including STIP, HOG, HOF features with Bag of Visual Words",
        "Multiple Architectures: Implemented and compared various approaches from handcrafted features to deep neural networks",
        "Video Processing: Advanced video preprocessing pipeline using OpenCV for frame extraction and augmentation"
      ],
      challenges: [
        "Managing computational complexity of video data processing",
        "Handling temporal dependencies in action sequences",
        "Optimizing memory usage for large video datasets",
        "Balancing model complexity with training time and accuracy"
      ],
      technologies: ["PyTorch", "OpenCV", "CNN", "LSTM", "Computer Vision", "SVM", "scikit-learn", "HOG", "HOF"],
      link: "https://github.com/username/action-recognition",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1678329885908-85eb768aa61b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjByZWNvZ25pdGlvbiUyMHZpZGVvJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzU5NDk1MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Drive2: A Tripsharing Platform for Urban Mobility",
      year: "2024",
      description: "A tripsharing platform for urban commuters, pairing drivers and riders by route and schedule, built with a FlutterFlow frontend, a FastAPI backend, and Supabase for authentication and data storage.",
      details: [
        "Features: Vehicle verification by scraping VicRoads and fuel use and CO2 from government sources via a custom API. Address validation with DBSCAN on user GPS to infer home and work, proximity checks against stored coordinates",
        "Matching engine uses Google Maps API for routing, quadkey path indexing, and candidate ranking. Social matching with cosine similarity over user ratings"
      ],
      fullDescription: "Drive2 is a comprehensive tripsharing platform designed to revolutionize urban mobility by connecting drivers and riders through intelligent matching algorithms. The platform combines modern mobile development with sophisticated backend systems to create a seamless user experience.",
      keyFeatures: [
        "Smart Matching Engine: Advanced algorithm using Google Maps API for optimal route matching with quadkey path indexing for efficient spatial queries",
        "Vehicle Verification: Automated verification system scraping VicRoads database with fuel consumption and CO2 emission data from government sources",
        "Location Intelligence: DBSCAN clustering algorithm for GPS data analysis to infer user home and work locations with proximity validation",
        "Social Matching: Cosine similarity-based recommendation system using user ratings and preferences for compatible trip partners",
        "Full-Stack Architecture: FlutterFlow frontend with FastAPI backend and Supabase for secure authentication and real-time data management",
        "Environmental Impact: CO2 tracking and reporting features to promote sustainable transportation choices"
      ],
      challenges: [
        "Implementing real-time matching algorithms for dynamic trip requests",
        "Ensuring user privacy while providing location-based services",
        "Scaling the platform to handle large numbers of concurrent users",
        "Integrating multiple external APIs and data sources reliably"
      ],
      technologies: ["FlutterFlow", "FastAPI", "Supabase", "Python", "DBSCAN", "Google Maps API", "Machine Learning"],
      link: "https://github.com/username/drive2",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1631009630535-4c13cc6215f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWRlJTIwc2hhcmluZyUyMG1vYmlsZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTk0OTUwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/thinganhado",
      handle: "@thinganhado"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/donganha11/",
      handle: "/in/donganha11"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:do.nganha11@gmail.com",
      handle: "do.nganha11@gmail.com"
    }
  ];

  const skillCategories = [
    {
      name: "AI & Machine Learning",
      icon: Code2,
      skills: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "XAI", "LLMs", "RAG", "NLP", "Research", "Data Science"]
    },
    {
      name: "Data & Analytics",
      icon: Database,
      skills: ["MySQL", "AWS RDS", "Power BI", "ETL Pipelines", "Data Migration", "AWS Lambda", "Data Visualization", "SQL"]
    },
    {
      name: "Cloud & DevOps",
      icon: Server,
      skills: ["AWS", "Lambda Functions", "IAM", "Git", "GitHub", "Docker", "API Integration", "Automation", "CI/CD"]
    },
    {
      name: "Full-Stack Development",
      icon: Palette,
      skills: ["React", "TypeScript", "JavaScript", "Node.js", "REST APIs", "Frontend Development", "Backend Development"]
    },
    {
      name: "Leadership & Communication",
      icon: Smartphone,
      skills: ["Team Leadership", "Project Management", "Research Writing", "Technical Documentation", "Stakeholder Communication"]
    }
  ];

  const certifications = [
    {
      name: "Business Intelligence Analyst Certificate",
      issuer: "MindX Technology School",
      date: "Feb. 2024",
      description: "Comprehensive training in business intelligence tools, data analysis, and dashboard creation for enterprise decision-making."
    },
    {
      name: "Swinburne University of Technology Postgraduate Scholarship",
      issuer: "Swinburne University of Technology",
      date: "Jan. 2024",
      description: "Academic merit scholarship awarded for outstanding performance in postgraduate studies."
    },
    {
      name: "Chartered Financial Analyst (CFA) Level 1",
      issuer: "CFA Institute",
      date: "Jan. 2024",
      description: "Professional certification covering investment tools, asset valuation, portfolio management, and ethical and professional standards."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Menu Bar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Ngan Ha Do
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-foreground">
                Skills
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-foreground">
                Experience
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('certifications')} className="text-muted-foreground hover:text-foreground">
                Certifications
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground">
                Projects
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50/50 border-b border-amber-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent opacity-40"></div>
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-3">
                <div className="inline-block">
                  <p className="text-2xl text-foreground/80 tracking-wide">Hi, I am</p>
                </div>
                <h1 className="text-5xl lg:text-6xl text-foreground mb-4 tracking-tight">Ngan Ha Do</h1>
                <p className="text-2xl lg:text-3xl">
                  I am an{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    AI/ML Engineer
                  </span>
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Graduate researcher in Artificial Intelligence and Machine Learning. Currently focused on deepfake 
                  speech detection and diffusion-based XAI, highly interested in building explainable and transparent 
                  AI models for community safety.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground text-lg">Melbourne, Victoria</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl transform rotate-3 blur-sm"></div>
                <ImageWithFallback
                  src={profileImage}
                  alt="Profile picture"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Social Links - Redesigned */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-foreground inline-block relative">
              Connect with me
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{social.name}</span>
                  <span className="text-muted-foreground text-sm">{social.handle}</span>
                </Button>
              </a>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Skills - Enhanced Cards */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-foreground inline-block relative mb-3">
              Skills & Technologies
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>
            <p className="text-muted-foreground mt-4">A comprehensive toolkit for modern software development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-foreground">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Work Experience - Enhanced */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-foreground inline-block relative mb-3">
              Work Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>
            <p className="text-muted-foreground mt-4">Professional journey in AI, ML, and data analytics</p>
          </div>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-gradient-to-br from-white to-amber-50/30">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-foreground">{job.title}</CardTitle>
                      <CardDescription className="text-primary mt-1">
                        {job.companyUrl ? (
                          <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-3 h-3" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  {job.details && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 text-sm">
                      {job.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Awards & Certifications - 3 per row */}
        <section id="certifications" className="mb-16 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-foreground inline-block relative mb-3">
              Awards & Certifications
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>
            <p className="text-muted-foreground mt-4">Recognition and professional achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {cert.date}
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="text-foreground leading-tight">{cert.name}</CardTitle>
                      <CardDescription className="text-primary mt-1">{cert.issuer}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Projects - Enhanced */}
        <section id="projects" className="mb-16 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-foreground inline-block relative mb-3">
              Personal Projects
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>
            <p className="text-muted-foreground mt-4">Innovative solutions showcasing technical expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Dialog key={index} open={selectedProject === index} onOpenChange={(open) => setSelectedProject(open ? index : null)}>
                <Card className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary/50 group">
                  <div className="aspect-[4/3] relative bg-muted rounded-t-lg overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <Badge 
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className="shadow-lg"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-primary">{project.year}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2 items-center">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2">
                            <ExternalLink className="w-3 h-3" />
                            View Code
                          </Button>
                        </a>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground group/btn">
                            View Details
                            <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </DialogTrigger>
                      </div>
                    </CardContent>
                  </div>
                </Card>
                
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-foreground">{project.title}</DialogTitle>
                    <DialogDescription className="text-primary">{project.year}</DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Project Image */}
                    <div className="aspect-[16/10] relative bg-muted rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Project Description */}
                    <div>
                      <h3 className="text-foreground mb-3">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>
                    
                    {/* Key Features */}
                    {project.keyFeatures && (
                      <div>
                        <h3 className="text-foreground mb-3">Key Features</h3>
                        <ul className="space-y-2">
                          {project.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* ClassForge Specific Content */}
                    {project.title.includes("ClassForge") && (
                      <>
                        <div>
                          <h3 className="text-foreground mb-3">ML Models Summary</h3>
                          <div className="aspect-[16/10] relative bg-muted rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={mlModelsTable}
                              alt="ML Models Summary Table"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-foreground mb-3">Performance Evaluation</h3>
                          <div className="aspect-[16/10] relative bg-muted rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={performanceEvalImage}
                              alt="Performance Evaluation Charts"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-foreground mb-3">Genetic Algorithm Workflow</h3>
                          <div className="aspect-[16/10] relative bg-muted rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={gaFlowchartImage}
                              alt="Genetic Algorithm Flowchart"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Challenges */}
                    {project.challenges && (
                      <div>
                        <h3 className="text-foreground mb-3">Challenges & Solutions</h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Technologies */}
                    <div>
                      <h3 className="text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Links */}
                    <div className="pt-4 border-t">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full flex items-center gap-2 justify-center">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </div>

      {/* Simple Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col items-center space-y-6">
            {/* Name */}
            <h3 className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Ngan Ha Do
            </h3>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="mailto:do.nganha11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/thinganhado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/donganha11/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © 2025 Ngan Ha Do. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
