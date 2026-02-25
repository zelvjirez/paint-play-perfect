const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-primary tracking-wider">
          Paintball Ptuj
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Paintball Ptuj. Vse pravice pridržane.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
