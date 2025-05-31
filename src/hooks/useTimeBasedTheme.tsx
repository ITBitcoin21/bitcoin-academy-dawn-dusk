
import { useEffect, useState } from 'react';

export const useTimeBasedTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      // Verificar si hay una preferencia manual guardada
      const savedTheme = localStorage.getItem('theme-preference');
      
      if (savedTheme && savedTheme !== 'auto') {
        // Si hay una preferencia manual, no hacer nada (el ThemeToggle se encarga)
        return;
      }

      // Solo aplicar tema automático si está en modo 'auto' o no hay preferencia
      const now = new Date();
      const hour = now.getHours();
      
      // Tema oscuro de 6 PM (18:00) a 7 AM (07:00)
      // Tema claro de 8 AM (08:00) a 5 PM (17:00)
      const shouldBeDark = hour >= 18 || hour <= 7;
      
      setIsDarkMode(shouldBeDark);
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Actualizar tema inmediatamente
    updateTheme();

    // Actualizar cada minuto solo si está en modo automático
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem('theme-preference');
      if (!savedTheme || savedTheme === 'auto') {
        updateTheme();
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return { isDarkMode };
};
