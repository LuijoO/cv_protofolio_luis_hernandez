import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink, 
  ChevronDown, 
  Terminal,
  Globe,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// ==========================================
// 📝 DATOS DEL CV (¡Edita todo esto con tu info!)
// ==========================================
const CV_DATA = {
  en: {
    personal: {
      name: "Luis Jose Hernández",
      role: "Frontend Web Developer",
      location: "Valencia, Spain",
      email: "luijohm@gmail.com",
      github: "https://github.com/LuijoO/cv_protofolio_luis_hernandez",
      linkedin: "https://www.linkedin.com/in/luis-jose-hernandez-meneses/",
      about: "Frontend web developer with over 10 years of experience creating, managing, and maintaining websites and web applications. Specialized in React, JavaScript, and AEM (Adobe Experience Manager) environments. Passionate about clean code, agile methodologies (Scrum/Kanban), and building efficient interfaces. B1/C1 English level and strong complex problem-solving skills."
    },
    skills: [
      "HTML5 / CSS", "JavaScript", "React (Hooks, Router)", "AEM", 
      "Node.js", "Sass / Bootstrap", "Git / GitHub / SVN", "Scrum & Kanban", 
      "Jira / Confluence / Trello", "Postman", "Workbench / SQL", "JSON"
    ],
    experience: [
      {
        id: 1,
        role: "Frontend Web Developer",
        company: "Indegene (Spain)",
        period: "07/2024 - Present",
        description: "Website and project management in AEM environment, content creation and modification, and web maintenance. Manual testing and work under Scrum and Kanban methodologies."
      },
      {
        id: 2,
        role: "Frontend Web Developer",
        company: "Inired (Valencia, Spain)",
        period: "11/2022 - 07/2024",
        description: "Creation of components and functionality in React. Use of Postman and execution of manual tests under Scrum methodology."
      },
      {
        id: 3,
        role: "Frontend Web Developer",
        company: "MRM (Buenos Aires, Argentina)",
        period: "08/2021 - 05/2022",
        description: "Content administration and management in AEM. Styling and creation of components for Chevrolet using ReactJS, Node.js, Sass, and Bootstrap."
      },
      {
        id: 4,
        role: "Frontend Web Developer",
        company: "Bp4 (Buenos Aires, Argentina)",
        period: "06/2021 - 08/2021",
        description: "Administration, content management via AEM, and maintenance for the Banco Galicia site."
      },
      {
        id: 5,
        role: "Frontend Web Developer",
        company: "Wunderman Thompson (Buenos Aires)",
        period: "10/2018 - 05/2021",
        description: "Content administration and management in AEM, creation and styling of web components for Colgate using Drupal, Node.js, Sass, and Material."
      },
      {
        id: 6,
        role: "Web Designer/Developer",
        company: "Ekooo Design C.A / MTD Arte y Diseño",
        period: "03/2013 - 02/2018",
        description: "Template creation, structure and style development with Bootstrap, Sass, JavaScript, and Drupal. Quality control and deadline management under Kanban and Scrum."
      }
    ],
    education: [
      {
        id: 1,
        degree: "COMPUTER SCIENCE (Digital Graphic Design Specialist)",
        institution: "Colegio Universitario Francisco de Miranda",
        period: "05/05/2004 – 17/09/2007",
        description: "Av. Oeste 3, Caracas, Venezuela"
      },
      {
        id: 2,
        degree: "Higher Technician in Foreign Trade, Postgraduate, specialty: Marketing and international business.",
        institution: "Universidad Simón Bolívar",
        period: "03/03/2007 – 19/11/2010",
        description: "Sartenejas, Miranda, Venezuela"
      },
      {
        id: 3,
        degree: "Master in Web & Content Management",
        institution: "Instituto Benllisoft",
        period: "2011",
        description: "Specialization in creating and editing self-manageable websites."
      },
      {
        id: 4,
        degree: "Postgraduate in Foreign Trade",
        institution: "Universidad Simón Bolívar",
        period: "2007 - 2010",
        description: "University Higher Technician with specialization in Marketing and international business."
      },
      {
        id: 5,
        degree: "Specialist in Digital Graphic Design",
        institution: "Colegio Univ. Francisco de Miranda",
        period: "2004 - 2007",
        description: "Higher education in IT and graphic design."
      }
    ],
    projects: [
      {
        id: 1,
        title: "AEM E-Commerce Platform",
        shortDescription: "Complete e-commerce platform with shopping cart and self-manageable management.",
        fullDescription: "Comprehensive development of an online store using React coupled to an AEM environment. Includes content administration panel, inventory management, and a fully responsive design focused on conversion and user experience (UX).",
        cover: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
        ],
        tags: ["React", "AEM", "JavaScript", "Sass"],
        link: "#",
      },
      {
        id: 2,
        title: "Financial Dashboard",
        shortDescription: "Interactive dashboard for visualizing financial data and metrics.",
        fullDescription: "SPA (Single Page Application) to display key business metrics in real-time. Implements complex interactive charts, dynamic data filtering, RESTful API consumption, and a standardized design system using Tailwind CSS.",
        cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
          "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1200&q=80"
        ],
        tags: ["React", "Node.js", "Tailwind CSS", "API REST"],
        link: "#",
      },
      {
        id: 3,
        title: "Task Management App",
        shortDescription: "Web application to organize projects and tasks with drag-and-drop functionality.",
        fullDescription: "Developed with React and a Node.js backend. Allows users to create Kanban-style boards, assign tasks, set deadlines, and visualize progress in real-time.",
        cover: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80"
        ],
        tags: ["React", "Node.js", "Express", "MongoDB"],
        link: "#",
      },
      {
        id: 4,
        title: "Personal Blog / CMS",
        shortDescription: "Self-manageable blog platform with rich text editor.",
        fullDescription: "Content Management System (CMS) built from scratch. Features user authentication, roles and permissions, Markdown editor for articles, and frontend SEO optimization.",
        cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
        ],
        tags: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
        link: "#",
      }
    ]
  },
  es: {
    personal: {
      name: "Luis Jose Hernández",
      role: "Desarrollador Web Frontend",
      location: "Valencia, España",
      email: "luijohm@gmail.com",
      github: "https://github.com/LuijoO/cv_protofolio_luis_hernandez",
      linkedin: "https://www.linkedin.com/in/luis-jose-hernandez-meneses/",
      about: "Desarrollador web frontend con más de 10 años de experiencia en la creación, gestión y mantenimiento de sitios y aplicaciones web. Especializado en React, JavaScript y entornos AEM (Adobe Experience Manager). Apasionado por el código limpio, las metodologías ágiles (Scrum/Kanban) y la construcción de interfaces eficientes. Nivel de inglés B1/C1 y gran capacidad para resolver problemas complejos."
    },
    skills: [
      "HTML5 / CSS", "JavaScript", "React (Hooks, Router)", "AEM", 
      "Node.js", "Sass / Bootstrap", "Git / GitHub / SVN", "Scrum & Kanban", 
      "Jira / Confluence / Trello", "Postman", "Workbench / SQL", "JSON"
    ],
    experience: [
      {
        id: 1,
        role: "Desarrollador Web Frontend",
        company: "Indegene (España)",
        period: "07/2024 - Presente",
        description: "Gestión de sitios y proyectos web en entorno AEM, creación y modificación de contenido, y mantenimiento web. Pruebas manuales y trabajo bajo metodologías Scrum y Kanban."
      },
      {
        id: 2,
        role: "Desarrollador Web Frontend",
        company: "Inired (Valencia, España)",
        period: "11/2022 - 07/2024",
        description: "Creación de componentes y funcionalidad en React. Uso de Postman y ejecución de pruebas manuales bajo metodología Scrum."
      },
      {
        id: 3,
        role: "Desarrollador Web Frontend",
        company: "MRM (Buenos Aires, Argentina)",
        period: "08/2021 - 05/2022",
        description: "Administración y gestión de contenido en AEM. Estilización y creación de componentes para Chevrolet utilizando ReactJS, Node.js, Sass y Bootstrap."
      },
      {
        id: 4,
        role: "Desarrollador Web Frontend",
        company: "Bp4 (Buenos Aires, Argentina)",
        period: "06/2021 - 08/2021",
        description: "Administración, gestión de contenido mediante AEM y mantenimiento para el sitio del Banco Galicia."
      },
      {
        id: 5,
        role: "Desarrollador Web Frontend",
        company: "Wunderman Thompson (Buenos Aires)",
        period: "10/2018 - 05/2021",
        description: "Administración y gestión de contenido en AEM, creación y estilado de componentes web para Colgate usando Drupal, Node.js, Sass y Material."
      },
      {
        id: 6,
        role: "Diseñador/Desarrollador Web",
        company: "Ekooo Design C.A / MTD Arte y Diseño",
        period: "03/2013 - 02/2018",
        description: "Creación de plantillas, desarrollo de estructura y estilos con Bootstrap, Sass, JavaScript y Drupal. Control de calidad y gestión de fechas límite bajo Kanban y Scrum."
      }
    ],
    education: [
      {
        id: 1,
        degree: "INFORMÁTICA (Especialista en diseño gráfico digital)",
        institution: "Colegio Universitario Francisco de Miranda",
        period: "05/05/2004 – 17/09/2007",
        description: "Av. Oeste 3, Caracas, Venezuela"
      },
      {
        id: 2,
        degree: "Técnico Superior en Comercio Exterior, Postgrado, especialidad: Marketing y negocios internacionales.",
        institution: "Universidad Simón Bolívar",
        period: "03/03/2007 – 19/11/2010",
        description: "Sartenejas, Miranda, Venezuela"
      },
      {
        id: 3,
        degree: "Master en Web y Gestión de Contenido",
        institution: "Instituto Benllisoft",
        period: "2011",
        description: "Especialización en creación y edición de sitios web autogestionables."
      },
      {
        id: 4,
        degree: "Postgrado en Comercio Exterior",
        institution: "Universidad Simón Bolívar",
        period: "2007 - 2010",
        description: "Técnico Superior Universitario con especialidad en Marketing y negocios internacionales."
      },
      {
        id: 5,
        degree: "Especialista en Diseño Gráfico Digital",
        institution: "Colegio Univ. Francisco de Miranda",
        period: "2004 - 2007",
        description: "Estudios superiores en Informática y diseño gráfico."
      }
    ],
    projects: [
      {
        id: 1,
        title: "Plataforma E-Commerce AEM",
        shortDescription: "Plataforma completa de comercio electrónico con carrito de compras y gestión autoadministrable.",
        fullDescription: "Desarrollo integral de una tienda online utilizando React acoplado a un entorno AEM. Incluye panel de administración de contenido, gestión de inventario, y un diseño totalmente responsivo enfocado en la conversión y la experiencia de usuario (UX).",
        cover: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
        ],
        tags: ["React", "AEM", "JavaScript", "Sass"],
        link: "#",
      },
      {
        id: 2,
        title: "Dashboard Financiero",
        shortDescription: "Panel de control interactivo para visualización de datos financieros y métricas.",
        fullDescription: "Aplicación SPA (Single Page Application) para mostrar métricas clave de negocio en tiempo real. Implementa gráficos interactivos complejos, filtrado dinámico de datos, consumo de APIs RESTful y un sistema de diseño estandarizado usando Tailwind CSS.",
        cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
          "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1200&q=80"
        ],
        tags: ["React", "Node.js", "Tailwind CSS", "API REST"],
        link: "#",
      },
      {
        id: 3,
        title: "App de Gestión de Tareas",
        shortDescription: "Aplicación web para organizar proyectos y tareas con funcionalidad drag-and-drop.",
        fullDescription: "Desarrollada con React y un backend en Node.js. Permite a los usuarios crear tableros al estilo Kanban, asignar tareas, establecer fechas límite y visualizar el progreso en tiempo real.",
        cover: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80"
        ],
        tags: ["React", "Node.js", "Express", "MongoDB"],
        link: "#",
      },
      {
        id: 4,
        title: "Blog Personal / CMS",
        shortDescription: "Plataforma de blog autogestionable con editor de texto enriquecido.",
        fullDescription: "Sistema de gestión de contenidos (CMS) construido desde cero. Cuenta con autenticación de usuarios, roles y permisos, editor Markdown para los artículos, y optimización SEO en el frontend.",
        cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
        ],
        tags: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
        link: "#",
      }
    ]
  }
};

// ==========================================
// 🌐 TRADUCCIONES DE LA INTERFAZ
// ==========================================
const UI_TEXT = {
  en: {
    nav: { home: 'Home', about: 'About', experience: 'Experience', education: 'Education', projects: 'Projects' },
    hero: { greeting: 'Hi, my name is', rolePrefix: 'I am a ' },
    sections: { about: 'About Me', skills: 'Technologies & Tools', experience: 'Work Experience', education: 'Education', projects: 'Featured Projects' },
    project: { details: 'View project details', about: 'About the project', visit: 'Visit Project' },
    footer: { built: 'Designed & Built with React & Tailwind CSS', rights: 'All rights reserved.' }
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', experience: 'Experiencia', education: 'Educación', projects: 'Proyectos' },
    hero: { greeting: 'Hola, mi nombre es', rolePrefix: 'Soy ' },
    sections: { about: 'Sobre Mí', skills: 'Tecnologías y Herramientas', experience: 'Experiencia Laboral', education: 'Formación Académica', projects: 'Proyectos Destacados' },
    project: { details: 'Ver detalles del proyecto', about: 'Acerca del proyecto', visit: 'Visitar Proyecto' },
    footer: { built: 'Diseñado y construido con React & Tailwind CSS', rights: 'Todos los derechos reservados.' }
  }
};

// ==========================================
// 🧩 COMPONENTES REUTILIZABLES
// ==========================================

// Efecto de máquina de escribir para el título
const Typewriter = ({ text, delay = 100, eraseDelay = 50, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reiniciar la animación si cambia el idioma (texto)
  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [text]);

  useEffect(() => {
    let timeout;

    if (!isDeleting && currentIndex < text.length) {
      // Escribiendo letra por letra
      timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
    } else if (isDeleting && currentIndex > 0) {
      // Borrando en retroceso
      timeout = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, eraseDelay);
    } else if (!isDeleting && currentIndex === text.length) {
      // Pausa cuando termina de escribir
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentIndex === 0) {
      // Pausa breve antes de volver a escribir
      timeout = setTimeout(() => setIsDeleting(false), pauseTime / 2);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, delay, eraseDelay, pauseTime, text]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse border-r-2 border-cyan-400 ml-1 h-6 inline-block align-middle"></span>
    </span>
  );
};

// Componente para animaciones de entrada fluidas (Alto rendimiento)
const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Modal de Proyectos con Carrusel
const ProjectModal = ({ project, onClose, language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = UI_TEXT[language].project;

  // Prevenir scroll en el body cuando el modal está abierto
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [project]);

  if (!project) return null;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        {/* Encabezado del Modal */}
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Contenido scrolleable */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Carrusel de imágenes */}
          <div className="relative group rounded-xl overflow-hidden bg-slate-800 aspect-video flex items-center justify-center">
            <img src={project.images[currentImageIndex]} alt={`Captura de ${project.title}`} className="w-full h-full object-cover" />
            {project.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 p-2 bg-slate-950/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-600 backdrop-blur-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextImage} className="absolute right-4 p-2 bg-slate-950/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-600 backdrop-blur-sm">
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-950/40 px-3 py-2 rounded-full backdrop-blur-sm">
                  {project.images.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-cyan-400' : 'bg-slate-400/50'}`} />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Descripción Extendida */}
          <div>
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">{t.about}</h4>
            <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">{project.fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">{tag}</span>
              ))}
            </div>
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-cyan-900/20">
                {t.visit} <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 🚀 COMPONENTE PRINCIPAL (APP)
// ==========================================

export default function App() {
  const [language, setLanguage] = useState('en'); // Estado de idioma (por defecto Inglés)
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const data = CV_DATA[language];
  const t = UI_TEXT[language];

  // Sincronizar el scroll del carrusel con los bullets
  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    
    // Si estamos al final del scroll, marcamos el último bullet
    if (Math.abs(scrollWidth - clientWidth - scrollLeft) < 10) {
      setCurrentProjectIndex(data.projects.length - 1);
      return;
    }
    const itemWidth = carouselRef.current.firstElementChild?.offsetWidth + 24 || scrollWidth / data.projects.length;
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentProjectIndex(Math.min(Math.max(index, 0), data.projects.length - 1));
  };

  const scrollToProject = (index) => {
    if (!carouselRef.current) return;
    const { scrollWidth, clientWidth } = carouselRef.current;
    const itemWidth = carouselRef.current.firstElementChild?.offsetWidth + 24 || 0;
    const targetScroll = index === data.projects.length - 1 ? scrollWidth - clientWidth : index * itemWidth;
    
    carouselRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setCurrentProjectIndex(index);
  };

  const scrollCarousel = (direction) => {
    let newIndex = direction === 'left' ? currentProjectIndex - 1 : currentProjectIndex + 1;
    newIndex = Math.max(0, Math.min(newIndex, data.projects.length - 1));
    scrollToProject(newIndex);
  };

  // Detectar scroll para cambiar el estilo de la navegación
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Lógica simple para resaltar el menú activo basado en el scroll
      const sections = ['home', 'about', 'experience', 'education', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* 🧭 NAVEGACIÓN FLOTANTE */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            {data.personal.name.split(' ')[0]}<span className="text-slate-200">.dev</span>
          </div>
          
          <div className="flex items-center gap-6 md:gap-8">
            {/* 🇬🇧/🇪🇸 SWITCH DE IDIOMA */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="relative w-14 h-7 flex items-center bg-slate-900 rounded-full p-1 cursor-pointer border border-slate-700 hover:border-cyan-800 transition-all shadow-inner"
              aria-label="Toggle Language"
            >
              <div className="w-full flex justify-between px-1.5 text-[10px] font-bold text-slate-400 z-0">
                <span>EN</span>
                <span>ES</span>
              </div>
              <div 
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-transform duration-300 flex items-center justify-center text-[10px] font-bold text-slate-950 z-10 ${
                  language === 'es' ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                {language.toUpperCase()}
              </div>
            </button>

            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {['home', 'about', 'experience', 'education', 'projects'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-slate-400'}`}
                >
                  {t.nav[item]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 md:px-12 pt-24 pb-20 space-y-40">
        
        {/* 🌟 SECCIÓN: INICIO (HERO) */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start pt-10">
          <FadeInSection>
            <p className="text-cyan-400 font-mono mb-4 pl-1">{t.hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
              {data.personal.name}.
            </h1>
            <h2 className="text-4xl md:text-6xl font-ligth text-white font-mono mb-8">
              <Typewriter text={`${t.hero.rolePrefix}${data.personal.role}.`} delay={80} />
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed">
              {data.personal.about.substring(0, 150)}... 
            </p>
            
            <div className="flex gap-4 mb-16">
              <a href={data.personal.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20">
                <Github className="w-6 h-6" />
              </a>
              <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${data.personal.email}`} className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </FadeInSection>

          <button 
            onClick={() => scrollTo('about')}
            className="animate-bounce p-2 rounded-full border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </section>

        {/* 👤 SECCIÓN: SOBRE MÍ & SKILLS */}
        <section id="about" className="scroll-mt-32">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">01.</span> {t.sections.about}</h3>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>
            
            <div className="w-full">
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg mb-10">
                <p>{data.personal.about}</p>
                <div className="flex items-center gap-2 text-slate-300 bg-slate-900 w-fit px-5 py-3 rounded-lg border border-slate-800 shadow-sm">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{data.personal.location}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" /> {t.sections.skills}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {data.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50 text-sm font-medium hover:bg-cyan-950/50 hover:border-cyan-500/50 hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* 💼 SECCIÓN: EXPERIENCIA LABORAL */}
        <section id="experience" className="scroll-mt-32">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">02.</span> {t.sections.experience}</h3>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/20 before:via-cyan-500/20 before:to-transparent">
              {data.experience.map((job, index) => (
                <FadeInSection key={job.id} delay={index * 150}>
                  <div className={`relative pl-16 md:pl-0 group md:flex md:justify-between md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 md:top-1/2 md:-translate-y-1/2 w-10 h-10 bg-slate-950 border-2 border-slate-800 rounded-full flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all z-10 duration-500">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    
                    {/* Spacer para alternar la card al lado correcto en Desktop */}
                    <div className="hidden md:block md:w-[45%]"></div>

                    {/* Card */}
                    <div className="md:w-[45%] bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-800/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-900/10">
                      <span className="inline-block px-3 py-1 bg-cyan-950/30 text-cyan-400 border border-cyan-900/30 rounded-full font-mono text-xs mb-4">{job.period}</span>
                      <h5 className="text-xl font-bold text-slate-100 mb-2">{job.role}</h5>
                      <h6 className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {job.company}
                      </h6>
                      <p className="text-slate-500 text-sm leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* 🎓 SECCIÓN: FORMACIÓN ACADÉMICA */}
        <section id="education" className="scroll-mt-32">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">03.</span> {t.sections.education}</h3>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {data.education.map((edu, index) => (
            <FadeInSection key={edu.id} delay={index * 150} className={`h-full ${index < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}>
                  <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all duration-500 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-2 group flex flex-col relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 text-slate-800/30 group-hover:text-cyan-900/10 transition-colors duration-500 transform group-hover:-rotate-12 group-hover:scale-110">
                      <GraduationCap className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                      <span className="text-cyan-400 font-mono text-sm mb-4 block">{edu.period}</span>
                      <h5 className="text-lg font-bold text-slate-200 mb-2 leading-snug">{edu.degree}</h5>
                      <h6 className="text-slate-400 mb-4 text-sm font-medium">{edu.institution}</h6>
                      <p className="text-slate-500 text-sm leading-relaxed mt-auto">{edu.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* 🚀 SECCIÓN: PROYECTOS */}
        <section id="projects" className="scroll-mt-32">
          <FadeInSection>
            <div className="flex items-center justify-between gap-4 mb-12">
              <div className="flex items-center gap-4 flex-grow">
                <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">04.</span> {t.sections.projects}</h3>
                <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
              </div>
              
              {/* Controles del Carrusel (Desktop) */}
              <div className="hidden md:flex gap-3">
                <button onClick={() => scrollCarousel('left')} className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-800 hover:bg-slate-800 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scrollCarousel('right')} className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-800 hover:bg-slate-800 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contenedor del Carrusel */}
            <div 
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
            >
              {data.projects.map((project, index) => (
                <FadeInSection key={project.id} delay={index * 150} className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-12px)] flex flex-col">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col flex-grow hover:border-cyan-900/60 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-500 group">
                    {/* Imagen de Portada */}
                    <div className="h-56 overflow-hidden relative">
                      <img src={project.cover} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    
                    {/* Contenido de la Card */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                      <p className="text-slate-400 flex-grow mb-6 leading-relaxed">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.slice(0, 4).map((tag, i) => (
                          <span key={i} className="text-xs font-mono text-cyan-400/80 bg-cyan-950/30 border border-cyan-900/30 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-3 px-4 bg-slate-800/50 hover:bg-cyan-900/30 text-slate-200 hover:text-cyan-300 font-medium rounded-lg border border-slate-700 hover:border-cyan-800 transition-all duration-300 flex items-center justify-center gap-2 mt-auto hover:shadow-md hover:shadow-cyan-900/20"
                      >
                        {t.project.details}
                      </button>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* 🔵 Indicadores / Bullets */}
            <div className="flex justify-center gap-3 mt-4">
              {data.projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToProject(index)}
                  className={`transition-all duration-300 rounded-full h-2.5 ${
                    index === currentProjectIndex 
                      ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          </FadeInSection>
        </section>
        
      </main>

      {/* 🏁 FOOTER */}
      <footer className="text-center py-8 text-slate-500 border-t border-slate-800/50 bg-slate-950">
        <p className="text-sm font-mono">
          {t.footer.built}
        </p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} {data.personal.name}. {t.footer.rights}</p>
      </footer>

      {/* MODAL DE PROYECTO */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} language={language} />

    </div>
  );
}