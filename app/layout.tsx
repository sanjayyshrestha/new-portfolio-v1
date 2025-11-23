export const metadata = {
  title: "Sanjay Shrestha | Creative Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <head>
        {/* TailwindCDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Space+Grotesk:wght@300;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind Config Override */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['Inter', 'sans-serif'],
                      mono: ['Space Grotesk', 'monospace'],
                    },
                    colors: {
                      light: '#f8f9fa',
                      dark: '#0a0a0a',
                      accent: '#6366f1',
                    },
                    animation: {
                      'spin-slow': 'spin 10s linear infinite',
                      'gradient-x': 'gradient-x 5s ease infinite',
                    },
                    keyframes: {
                      'gradient-x': {
                        '0%, 100%': {
                          'background-size': '200% 200%',
                          'background-position': 'left center',
                        },
                        '50%': {
                          'background-size': '200% 200%',
                          'background-position': 'right center',
                        },
                      },
                    },
                  },
                },
              };
            `,
          }}
        />

        {/* Importmap for React / Three.js */}
        <script
          type="importmap"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "imports": {
                "@react-three/drei": "https://aistudiocdn.com/@react-three/drei@^10.7.7",
                "framer-motion": "https://aistudiocdn.com/framer-motion@^12.23.24",
                "react/": "https://aistudiocdn.com/react@^19.2.0/",
                "react": "https://aistudiocdn.com/react@^19.2.0",
                "three": "https://aistudiocdn.com/three@^0.181.2",
                "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
                "@react-three/fiber": "https://aistudiocdn.com/@react-three/fiber@^9.4.0"
              }
            }
          `,
          }}
        />

        {/* Custom Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html { scroll-behavior: smooth; }
              body { margin: 0; padding: 0; overflow-x: hidden; background-color: #0a0a0a; }
              ::-webkit-scrollbar { width: 8px; }
              ::-webkit-scrollbar-track { background: transparent; }
              ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
              .glass-panel {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
              }
              .dark .glass-panel {
                background: rgba(0, 0, 0, 0.4);
                border: 1px solid rgba(255, 255, 255, 0.05);
              }
              .text-gradient {
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
