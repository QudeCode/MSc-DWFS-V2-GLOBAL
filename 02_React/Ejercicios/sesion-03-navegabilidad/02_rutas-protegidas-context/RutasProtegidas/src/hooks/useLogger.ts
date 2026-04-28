import { useEffect } from "react";

/**
 * Hook para trackear el ciclo de vida de un componente
 * @param componentName Nombre del componente
 */
export const useLogger = (componentName: string) => {
  // useEffect sin array de dependencias = efecto en cada renderizado del componente
  useEffect(() => {
    console.log(`[${componentName}] Renderizado (Post-render)`);
  });

  // useEffect con array de dependencias = efecto únicamente en el primer renderizado
  // useEffect con return = efecto únicamente cuando se desmonta el componente
  useEffect(() => {
    console.log(`[${componentName}] Montado`);

    return () => {
      console.log(`[${componentName}] Desmontado`);
    };
  }, [componentName]);
};
