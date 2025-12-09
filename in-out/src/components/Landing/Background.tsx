import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';

const COLOR_ORANGE = '#FD9B08';
const COLOR_GREEN = '#ABE158';
const COLOR_WHITE = '#F8FFED';

const float = keyframes`
  0% { transform: scale(1.0) translate(0px, 0px); }
  50% { transform: scale(1.05) translate(20px, -20px); } /* Se mișcă puțin */
  100% { transform: scale(1.0) translate(0px, 0px); }
`;

export default function CustomBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1000,
        overflow: 'hidden',

        // 🚨 PROPRIETATEA CHEIE: RADIAL GRADIENT 🚨
        backgroundImage: `radial-gradient(
          circle at 5% 5%, 
          ${COLOR_ORANGE} 9%,    
          ${COLOR_GREEN} 24%,         
          ${COLOR_WHITE} 35%,
          ${COLOR_WHITE} 49%,   
          ${COLOR_ORANGE} 61%,        
          ${COLOR_GREEN} 78%,        
          ${COLOR_WHITE} 89%
        )`,

        // Mărim gradientul pentru a crea efectul de "neclar" (blur/blob)
        // Îl poți face chiar mai mare, de exemplu 'scale(3)'
        transform: 'scale(1.1)', 
        transformOrigin: 'center center',

        // Opțional: Aplicația animației
        // animation: `${float} 15s ease-in-out infinite alternate`,
      }}
    />
  );
}