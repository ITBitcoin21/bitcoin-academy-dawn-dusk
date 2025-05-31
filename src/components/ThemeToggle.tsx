
import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'auto' | 'light' | 'dark'>('auto');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference') as 'auto' | 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (selectedTheme: 'auto' | 'light' | 'dark') => {
    if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (selectedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Auto mode - let the time-based theme take control
      const now = new Date();
      const hour = now.getHours();
      const shouldBeDark = hour >= 18 || hour <= 7;
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const handleThemeChange = () => {
    const nextTheme = theme === 'auto' ? 'light' : theme === 'light' ? 'dark' : 'auto';
    setTheme(nextTheme);
    localStorage.setItem('theme-preference', nextTheme);
    applyTheme(nextTheme);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      default:
        return <Palette className="w-5 h-5" />;
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleThemeChange}
      className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
      title={`Tema actual: ${theme === 'auto' ? 'Automático' : theme === 'light' ? 'Claro' : 'Oscuro'}`}
    >
      {getIcon()}
    </Button>
  );
};

export default ThemeToggle;
