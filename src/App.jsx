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
      period: "11/2022 - 07-2024",
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
      degree: "Master en Web y Gestión de Contenido",
      institution: "Instituto Benllisoft",
      period: "2011",
      description: "Especialización en creación y edición de sitios web autogestionables."
    },
    {
      id: 2,
      degree: "Postgrado en Comercio Exterior",
      institution: "Universidad Simón Bolívar",
      period: "2007 - 2010",
      description: "Técnico Superior Universitario con especialidad en Marketing y negocios internacionales."
    },
    {
      id: 3,
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
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80"
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
    }
  ]
};

// ==========================================
// 🧩 COMPONENTES REUTILIZABLES
// ==========================================

// Efecto de máquina de escribir para el título
const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

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
const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">Acerca del proyecto</h4>
            <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">{project.fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">{tag}</span>
              ))}
            </div>
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-cyan-900/20">
                Visitar Proyecto <ExternalLink className="w-4 h-4" />
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
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
            {CV_DATA.personal.name.split(' ')[0]}<span className="text-slate-200">.dev</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['home', 'about', 'experience', 'education', 'projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item)}
                className={`capitalize transition-colors hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-slate-400'}`}
              >
                {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre mí' : item === 'experience' ? 'Experiencia' : item === 'education' ? 'Educación' : 'Proyectos'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 md:px-12 pt-24 pb-20 space-y-40">
        
        {/* 🌟 SECCIÓN: INICIO (HERO) */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-start pt-10">
          <FadeInSection>
            <p className="text-cyan-400 font-mono mb-4 pl-1">Hola, mi nombre es</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
              {CV_DATA.personal.name}.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
              <Typewriter text={`Soy ${CV_DATA.personal.role}.`} delay={80} />
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed">
              {CV_DATA.personal.about.substring(0, 150)}... 
            </p>
            
            <div className="flex gap-4 mb-16">
              <a href={CV_DATA.personal.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20">
                <Github className="w-6 h-6" />
              </a>
              <a href={CV_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${CV_DATA.personal.email}`} className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20">
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
              <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">01.</span> Sobre Mí</h3>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>
            
            <div className="max-w-4xl">
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg mb-10">
                <p>{CV_DATA.personal.about}</p>
                <div className="flex items-center gap-2 text-slate-300 bg-slate-900 w-fit px-5 py-3 rounded-lg border border-slate-800 shadow-sm">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{CV_DATA.personal.location}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" /> Tecnologías y Herramientas
                </h4>
                <div className="flex flex-wrap gap-3">
                  {CV_DATA.skills.map((skill, index) => (
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
              <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">02.</span> Experiencia Laboral</h3>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/20 before:via-cyan-500/20 before:to-transparent">
              {CV_DATA.experience.map((job, index) => (
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
              <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">03.</span> Formación Académica</h3>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {CV_DATA.education.map((edu, index) => (
                <FadeInSection key={edu.id} delay={index * 150} className="h-full">
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
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-3xl font-bold text-slate-100"><span className="text-cyan-400 font-mono text-xl mr-2">04.</span> Proyectos Destacados</h3>
              <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {CV_DATA.projects.map((project, index) => (
                <FadeInSection key={project.id} delay={index * 200}>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-full hover:border-cyan-900/60 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-500 group">
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
                        Ver detalles del proyecto
                      </button>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>
        </section>
        
      </main>

      {/* 🏁 FOOTER */}
      <footer className="text-center py-8 text-slate-500 border-t border-slate-800/50 bg-slate-950">
        <p className="text-sm font-mono">
          Diseñado y construido con React & Tailwind CSS
        </p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} {CV_DATA.personal.name}. Todos los derechos reservados.</p>
      </footer>

      {/* MODAL DE PROYECTO */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

    </div>
  );
}