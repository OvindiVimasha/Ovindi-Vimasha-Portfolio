const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Ovindi Vimasha</p>
          <div className="flex items-center gap-2">
            <span>Get In Touch</span>
            <a
              href="mailto:ovindivimasha1015@gmail.com"
              className="text-foreground hover:opacity-70 transition-opacity underline"
            >
              ovindivimasha1015@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
