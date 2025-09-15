import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Info, Mail, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8" />
            <h1 className="text-2xl font-bold">EcoTech</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="flex items-center gap-2 hover:text-education-accent transition-colors">
              <Home className="h-4 w-4" />
              Home
            </a>
            <a href="/classes" className="flex items-center gap-2 hover:text-education-accent transition-colors">
              <GraduationCap className="h-4 w-4" />
              Classes
            </a>
            <a href="#about" className="flex items-center gap-2 hover:text-education-accent transition-colors">
              <Info className="h-4 w-4" />
              About
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-education-accent transition-colors">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-white text-primary hover:bg-white/90">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;