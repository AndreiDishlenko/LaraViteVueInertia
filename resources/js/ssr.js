import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'

createServer(page =>
  createInertiaApp({
    page,
    // title: title => `${title} - My App`,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Vue/**/*.vue', { eager: true })
      return pages[`./Vue/${name}.vue`]
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin)
    },
  }),
)