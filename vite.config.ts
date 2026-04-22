import {defineConfig} from 'vite'
import react, {reactCompilerPreset} from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tanstackRouter from '@tanstack/router-plugin/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        babel({presets: [reactCompilerPreset()]}),
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
        },
    },
})
