
import { useState, useEffect } from 'react';

export const useTelegramStats = () => {
  const [memberCount, setMemberCount] = useState(90);
  const [onlineCount, setOnlineCount] = useState(15);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simular obtención de datos de Telegram
    // En una implementación real, necesitarías usar la API de Telegram
    const fetchTelegramStats = async () => {
      setLoading(true);
      try {
        // Simulación de datos que cambian dinámicamente
        const baseMembers = 90;
        const baseOnline = 15;
        
        // Agregar variación aleatoria para simular cambios en tiempo real
        const memberVariation = Math.floor(Math.random() * 10) - 5;
        const onlineVariation = Math.floor(Math.random() * 5) - 2;
        
        setMemberCount(Math.max(1, baseMembers + memberVariation));
        setOnlineCount(Math.max(1, baseOnline + onlineVariation));
      } catch (error) {
        console.error('Error fetching Telegram stats:', error);
      } finally {
        setLoading(false);
      }
    };

    // Obtener datos iniciales
    fetchTelegramStats();

    // Actualizar cada 30 segundos
    const interval = setInterval(fetchTelegramStats, 30000);

    return () => clearInterval(interval);
  }, []);

  return { memberCount, onlineCount, loading };
};
