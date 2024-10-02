import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    plugins: [
        laravel({
            input: [
                // 'resources/css/global.css', 
                // // 'resources/scss/styles.scss', 
                // 'resources/js/main.js', 
                'resources/js/app.js' 
            ],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue(),
    ],
    // build: {
    //     outDir: 'public/dist', // Задаем путь к директории сборки
        // assetsDir: 'public/storage', // Задаем путь к директории сборки
        // rollupOptions: {
        //     output: {
        //         // cache: false,
        //         entryFileNames: `js/main.[hash].js`, // Настройка имен JS-файлов
        //         chunkFileNames: `js/plugins.[hash].js`,
        //         // assetFileNames: 'css/style.[hash].[ext]',
        //         assetFileNames: (assetInfo) => {
        //             if (assetInfo.name.endsWith('.css')) 
        //                 return 'css/styles.[hash].[ext]';    // Все CSS-файлы будут сохранены в папку 'styles'
        //                 // return 'styles/[name]-[hash][extname]'; // Все CSS-файлы будут сохранены в папку 'styles'
                    
        //             return 'assets/[name]-[hash][extname]'; // Другие ассеты (изображения и т.д.) в папку 'assets'
        //         },
        //     },
        // },
        // // cssCodeSplit: false,
        // cssMinify: true,
    // },
    // server: {
    //     watch: {
    //         // Настройки отслеживания файлов
    //         usePolling: true, // Для стабильного отслеживания изменений (особенно в виртуальных машинах или сетевых дисках)
    //     },
    // },
});
