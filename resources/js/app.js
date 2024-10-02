import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
    resolve: name => {
    const pages = import.meta.glob('./Vue/**/*.vue', { eager: true })
    return pages[`./Vue/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
        // createSSRApp({ render: () => h(App, props) })
        //     .use(plugin)
        //     .mount(el)
    },
})