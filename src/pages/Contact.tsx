import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "EmailJS keys are missing. Please check your .env file.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Animated Gradient Blob Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] animate-blob -top-40 -right-20 opacity-50"
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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-up">
              <span className="project-tag mb-6 inline-block">Contact</span>
              <h1 className="hero-title mb-6">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Work Together</span>
              </h1>
              <p className="body-text max-w-xl mx-auto">
                Have a project in mind? I'd love to hear about it. Send me a message
                and let's create something amazing together.
              </p>
            </div>

            {/* Contact Form & Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3 animate-fade-up animation-delay-200">
                <div
                  className="p-8 rounded-2xl border border-white/20 shadow-xl"
                  style={{
                    backdropFilter: "blur(16px)",
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                  }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium ml-1">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 bg-white/5 border-white/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground shadow-sm backdrop-blur-sm transition-all focus:bg-white/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium ml-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 bg-white/5 border-white/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground shadow-sm backdrop-blur-sm transition-all focus:bg-white/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium ml-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12 bg-white/5 border-white/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground shadow-sm backdrop-blur-sm transition-all focus:bg-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium ml-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white/5 border-white/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground resize-none shadow-sm backdrop-blur-sm transition-all focus:bg-white/10"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 px-8 bg-foreground text-background hover:bg-foreground/90 transition-all"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8 animate-fade-up animation-delay-400">
                <div
                  className="p-8 rounded-2xl border border-white/20 h-full flex flex-col gap-8 shadow-xl"
                  style={{
                    backdropFilter: "blur(16px)",
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                  }}
                >
                  <div>
                    <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      Email
                    </h3>
                    <a
                      href="mailto:ovindivimasha1015@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors break-words"
                    >
                      ovindivimasha1015@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      +94 75 207 6063
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Location
                    </h3>
                    <p className="text-muted-foreground">
                      Gampaha, Sri Lanka
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <h3 className="font-display text-xl mb-4">Social</h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/OvindiVimasha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </div>
                        GitHub
                      </a>
                      <a
                        href="https://dribbble.com/Ovindi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-1.065-2.613-2.185-4.838-2.618-5.719 2.508 0 4.908.232 6.631.676zm-8.249-.333c.475.96 1.663 3.293 2.766 5.864-2.88.89-5.467 1.137-6.241 1.16-.144-3.765 2.57-6.897 3.475-7.024zm-4.837 8.046c.797-.03 3.811-.318 6.946-1.378.21.57.402 1.16.574 1.766-3.83 1.166-5.266 3.655-5.36 3.824-1.748-1.096-2.656-2.734-2.16-4.212zm6.477 7.67c-.015-.02-1.89-2.709 1.637-4.444.208-.102.428-.198.66-.289.96 2.532 1.343 5.38 1.404 5.92-1.127.352-2.392.179-3.701-1.187zm5.5-1.516c-.074-.627-.514-3.83-1.638-6.66 2.66-.279 5.253.166 5.539.227-.377 2.666-1.789 5.01-3.901 6.433z" />
                          </svg>
                        </div>
                        Dribbble
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
