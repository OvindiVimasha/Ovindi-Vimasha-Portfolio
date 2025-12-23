import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const skills = [
    "User Research",
    "Wireframing",
    "Visual Design",
    "Figma",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
    "Git/GitHub",
    "REST APIs",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Animated Gradient Blob Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] animate-blob -top-40 -left-20 opacity-50"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, hsl(30, 100%, 70%) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 30%, hsl(340, 80%, 65%) 0%, transparent 45%),
                radial-gradient(ellipse at 50% 60%, hsl(280, 70%, 55%) 0%, transparent 50%)
              `,
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Hero Section */}
          <div className="max-w-4xl mb-20">
            <span className="project-tag mb-6 inline-block">About Me</span>
            <h1 className="hero-title mb-8">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Ovindi</span>
            </h1>
            <p className="body-text text-lg md:text-xl max-w-2xl">
              A UX/UI Engineer & Frontend Developer who bridges design and code, creating
              thoughtful, pixel-perfect digital experiences that solve real problems and delight users.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Story & Info */}
            <div className="space-y-12">
              <div className="animate-fade-up">
                <h2 className="font-display text-2xl md:text-3xl mb-4">About Me</h2>
                <div className="space-y-4 body-text">
                  <p>
                    I am a passionate Software Engineering undergraduate with a solid foundation in programming,
                    problem-solving, and full-stack development. I focus on creating clean, user-centered solutions
                    that blend intuitive UI/UX with efficient backend architecture. My journey is driven by continuous
                    learning and a commitment to delivering practical, high-quality work that improves real-world experiences.
                  </p>
                </div>
              </div>

              <div className="animate-fade-up animation-delay-200">
                <h2 className="font-display text-2xl md:text-3xl mb-6">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-foreground text-sm font-medium rounded-full transition-all hover:bg-white/10 cursor-default"
                      style={{
                        backdropFilter: "blur(16px)",
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="animate-fade-up animation-delay-400">
                <h2 className="font-display text-2xl md:text-3xl mb-6">Education</h2>
                <div className="space-y-4">
                  <div
                    className="p-6 rounded-xl border border-white/20 transition-colors hover:border-white/30 shadow-xl"
                    style={{
                      backdropFilter: "blur(16px)",
                      background: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                    }}
                  >
                    <h3 className="font-semibold mb-1">BSc in Software Engineering</h3>
                    <p className="text-sm text-muted-foreground">University of Srilanka Institute of Information Technology • 2023 - 2027</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div className="space-y-12 lg:sticky lg:top-32 h-fit animate-fade-up animation-delay-200">
              <div
                className="rounded-2xl border border-white/20 p-8 shadow-xl"
                style={{
                  backdropFilter: "blur(16px)",
                  background: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                }}
              >
                <h2 className="font-display text-2xl md:text-3xl mb-6">Let's Connect</h2>
                <p className="text-muted-foreground mb-6">
                  Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <a href="mailto:ovindivimasha1015@gmail.com" className="hover:text-primary transition-colors text-lg">
                      ovindivimasha1015@gmail.com
                    </a>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="text-lg">+94 75 207 6063</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-lg">Gampaha, Sri Lanka</p>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-fit bg-transparent hover:bg-white/10"
                    >
                      LinkedIn Profile
                    </a>
                    <a
                      href="https://github.com/OvindiVimasha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-fit bg-transparent hover:bg-white/10"
                    >
                      GitHub Profile
                    </a>
                    <a
                      href="https://dribbble.com/Ovindi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-fit bg-transparent hover:bg-white/10"
                    >
                      Dribbble Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
};

export default About;
