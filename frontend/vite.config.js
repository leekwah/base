import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import cesium from 'vite-plugin-cesium';

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    console.log('[vite] Using HOST:', env.VITE_FRONTEND_SERVER_HOST);
    console.log('[vite] Using PORT:', env.VITE_FRONTEND_SERVER_PORT);
    console.log('[vite] Backend API:', env.VITE_BACKEND_SERVER);

    return defineConfig({
        plugins: [
            cesium(),
            react(),
            tailwindcss()
        ],
        base: './',
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        define: {
            CESIUM_BASE_URL: JSON.stringify('/cesium'),
        },
        build: {
            target: 'esnext'
        },
        server: {
            host: env.VITE_FRONTEND_SERVER_HOST,
            port: parseInt(env.VITE_FRONTEND_SERVER_PORT),
            proxy: {
                '/api': {
                    target: env.VITE_BACKEND_SERVER,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                }
            }
        }
    });
};
