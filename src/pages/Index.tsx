/* ────────────────────────────────────────────────────────────────
   src/pages/Index.tsx
   → Requires:  npm i @heroicons/react  (lucide-react already installed)
   ---------------------------------------------------------------- */
import { useEffect, useState } from "react";
import {
  Mail,
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* ───────────────  DATA  ─────────────── */
const skills = [
  { name: "PHP & Laravel", icon: Code, color: "bg-blue-500" },
  { name: "MySQL", icon: Database, color: "bg-orange-500" },
  { name: "Docker", icon: Server, color: "bg-cyan-500" },
  { name: "Git & GitHub", icon: Github, color: "bg-gray-800" },
  { name: "Next.js", icon: Globe, color: "bg-black" },
  { name: "REST APIs", icon: Server, color: "bg-purple-500" },
];

const projects = [
  {
    title: "Clinic Management System",
    tech: "Laravel, Filament, MySQL",
    description:
      "Role-based app for doctors and parents to manage children's medical activities and tasks.",
    gradient: "from-blue-500 to-purple-600",
    screenshots: [
      "screens/appointcal-clinc.png",
      "screens/child-clinc.png",
      "screens/doctordash-clinc.png",
      "screens/exercises-clinic.png",
      "screens/users-clinic.png",
    ],
  },
  {
    title: "Job Board Frontend",
    tech: "Next.js, REST APIs",
    description:
      "Modern frontend for a job-listing site with filters and responsive layout.",
    gradient: "from-green-500 to-blue-600",
    screenshots: [
      "screens/addjobs-jobfrontend.png",
      "screens/jobhp-jobfrontend.png",
    ],
  },
  {
    title: "Access Control System",
    tech: "Docker, PHP, Excel Parsing",
    description:
      "Dashboard that parses Excel logs and calculates work-hours, roles and vacation days.",
    gradient: "from-orange-500 to-red-600",
    screenshots: [
      "screens/dashboardac-accesscontrol.png",
      "screens/calendarac-accesscontrol.png",
      "screens/staffac_censored-accesscontrol.png",
      "screens/uploadac-accesscontrol.png",
      "screens/vocationac_censored-accesscontrol.png",
    ],
  },
  {
    title: "SaaS Template Platform",
    tech: "Next.js, Tailwind CSS",
    description:
      "Starter template for scalable SaaS apps with auth, billing and a clean component structure.",
    gradient: "from-purple-500 to-pink-600",
    screenshots: [
      "screens/homepagecf-saas.png",
      "screens/testpayment-saas.png",
    ],
  },
];

/* ───────────────  COMPONENT  ─────────────── */
const Index = () => {
  /* hero fade-in */
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  /* modal + carousel state */
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [slide, setSlide] = useState(0);

  /* reset slide when opening new project */
  useEffect(() => {
    if (activeProject) setSlide(0);
  }, [activeProject]);

  /* keyboard shortcuts */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject, slide]);

  const next = () =>
    setSlide((s) =>
      activeProject ? (s + 1) % activeProject.screenshots.length : 0
    );
  const prev = () =>
    setSlide((s) =>
      activeProject
        ? (s - 1 + activeProject.screenshots.length) %
          activeProject.screenshots.length
        : 0
    );

  /* ───────────────  RENDER  ─────────────── */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Gerald{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dumani
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Web&nbsp;Developer specializing in{" "}
              <span className="text-blue-400">PHP</span>,{" "}
              <span className="text-green-400">Laravel</span>,{" "}
              <span className="text-purple-400">Next.js</span>, and{" "}
              <span className="text-cyan-400">Docker</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() =>
                  (window.location.href = "mailto:geralddumani77@gmail.com")
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-300 hover:bg-gray-800"
                onClick={() =>
                  window.open("https://github.com/gerald-dumani", "_blank")
                }
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white text-center">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                I'm an experienced Web&nbsp;Developer with{" "}
                <span className="text-blue-400 font-semibold">5+ years</span>{" "}
                building scalable, secure applications. I specialize in Laravel,
                Docker, and Next.js, and I'm passionate about creating efficient
                solutions for remote teams and global clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────── SKILLS ───────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.name}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── PROJECTS ───────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </CardTitle>
                  <CardDescription>
                    <Badge
                      variant="secondary"
                      className="bg-gray-700 text-gray-300"
                    >
                      {project.tech}
                    </Badge>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    onClick={() => setActiveProject(project)}
                  >
                    View Screenshots
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Contacts:</h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>geralddumani77@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Github className="h-5 w-5 text-purple-400" />
                  <span>github.com/gerald-dumani</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>
          &copy; {new Date().getFullYear()} Gerald Dumani. All rights reserved.
        </p>
      </footer>

      {/* ───────── MODAL ───────── */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveProject(null)} /* close on backdrop */
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-slate-900 p-8 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} /* stop backdrop click */
          >
            {/* close button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* title */}
            <h3 className="mb-6 text-2xl font-bold text-white text-center">
              {activeProject.title}
            </h3>

            {/* carousel */}
            <div className="relative flex items-center justify-center w-full">
              {/* prev */}
              <button
                onClick={prev}
                className="absolute left-0 z-10 p-2 rounded-full bg-slate-800/70 hover:bg-slate-700"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              {/* image */}
              <img
                src={activeProject.screenshots[slide]}
                alt={`${activeProject.title} screenshot`}
                className="max-h-[70vh] w-auto rounded-lg object-contain mx-auto"
              />

              {/* next */}
              <button
                onClick={next}
                className="absolute right-0 z-10 p-2 rounded-full bg-slate-800/70 hover:bg-slate-700"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* dots */}
            <div className="mt-4 flex gap-2">
              {activeProject.screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 w-2 rounded-full ${
                    i === slide ? "bg-white" : "bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
