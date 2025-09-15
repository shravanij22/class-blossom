import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Home, Info, Mail, LogIn, UserPlus, LogOut, Settings } from "lucide-react";
import { AuthDialog } from "./AuthDialog";
import { useAuth } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    // Hidden admin access: Hold Ctrl+Shift and click the logo
    if (isAdmin) {
      navigate('/admin');
    }
  };

  return (
    <>
      <header className="bg-primary text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={handleAdminAccess}
              onKeyDown={(e) => {
                if (e.ctrlKey && e.shiftKey && e.key === 'Enter') {
                  handleAdminAccess();
                }
              }}
            >
              <Leaf className="h-8 w-8 text-education-accent" />
              <h1 className="text-2xl font-bold">Greenovate</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 hover:text-education-accent transition-colors">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link to="/classes" className="flex items-center gap-2 hover:text-education-accent transition-colors">
                <Leaf className="h-4 w-4" />
                Classes
              </Link>
              <Link to="/about" className="flex items-center gap-2 hover:text-education-accent transition-colors">
                <Info className="h-4 w-4" />
                About
              </Link>
              <Link to="/contact" className="flex items-center gap-2 hover:text-education-accent transition-colors">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  {isAdmin && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate('/admin')}
                      className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Admin
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={signOut}
                    className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setAuthTab('login');
                      setAuthDialogOpen(true);
                    }}
                    className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      setAuthTab('signup');
                      setAuthDialogOpen(true);
                    }}
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
        initialTab={authTab}
      />
    </>
  );
};

export default Header;