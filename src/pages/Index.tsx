import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  /* ─────────────────────────  SKILLS  ───────────────────────── */
  const skills = [
    { name: "PHP & Laravel", icon: Code, color: "bg-blue-500" },
    { name: "MySQL", icon: Database, color: "bg-orange-500" },
    { name: "Docker", icon: Server, color: "bg-cyan-500" },
    { name: "Git & GitHub", icon: Github, color: "bg-gray-800" },
    { name: "Next.js", icon: Globe, color: "bg-black" },
    { name: "REST APIs", icon: Server, color: "bg-purple-500" },
  ];

  /* ─────────────────────────  PROJECTS  ───────────────────────── */
  const projects = [
    {
      title: "Clinic Management System",
      tech: "Laravel, Filament, MySQL",
      description:
        "Role-based app for doctors and parents to manage children's medical activities and tasks. Built with Laravel and Filament.",
      github: "https://github.com/gerald-dumani/clinic",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Job Board Frontend",
      tech: "Next.js, REST APIs",
      description:
        "A modern frontend for a job listing site. Includes filters, responsive layout, and API-driven content rendering.",
      github: "https://github.com/gerald-dumani/Jobs-frontend",
      gradient: "from-green-500 to-blue-600",
    },
    {
      title: "Access Control System",
      tech: "Docker, PHP, Excel Parsing",
      description:
        "Dashboard that processes Excel logs from the building entrance and calculates total work hours, job titles, and vacation days per employee.",
      github: "https://github.com/gerald-dumani/access-control-docker",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "SaaS Template Platform",
      tech: "Next.js , Tailwind CSS",
      description:
        "Starter template for scalable SaaS applications with user auth, billing, and component structure.",
      github: "https://github.com/gerald-dumani/saas",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* ────────────  HERO  ──────────── */}
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
              Web Developer specializing in{" "}
              <span className="text-blue-400">PHP</span>,{" "}
              <span className="text-green-400">Laravel</span>,{" "}
              <span className="text-purple-400">Next.js</span>, and{" "}
              <span className="text-cyan-400">Docker</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* EMAIL BUTTON */}
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

              {/* GITHUB BUTTON */}
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

        {/* Floating particles effect */}
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

      {/* ────────────  ABOUT  ──────────── */}
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
                I'm an experienced IT Manager and Web Developer with{" "}
                <span className="text-blue-400 font-semibold">5+ years</span>{" "}
                building scalable, secure applications. I specialize in Laravel,
                Docker, and Next.js, and I'm passionate about creating efficient
                solutions for remote teams and global clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ────────────  SKILLS  ──────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Skills &amp; Technologies
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

      {/* ────────────  PROJECTS  ──────────── */}
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
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────  CONTACT  ──────────── */}
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

      {/* ────────────  FOOTER  ──────────── */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>
          &copy; {new Date().getFullYear()} Gerald Dumani. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
