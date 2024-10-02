<template>

    <!-- <Head :title="title ? `${title} - My App` : 'My App'">
        <slot />
    </Head> -->

    <Head>
        <title>My app3</title>
        <meta head-key="description" name="description" content="This is the default description" />
        <!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> -->
    </Head>

    <!-- <Head>
        <title>Your page title</title>
        <meta name="description" content="Your page description">
    </Head> -->

    <div>
        Привет, я страница созданная с помощью Inertia!!!
    </div>
</template>

<script>
    import {Head} from '@inertiajs/vue3'
    export default {
        components: {
            Head
        },
        // metaInfo() {
        //     return {
        //         title: 'Dashboard',
        //         meta: [
        //             { name: 'description', content: 'This is a description of my page for SEO.' },
        //             { property: 'og:title', content: 'My Page Title for Social Media' }
        //         ]
        //     };
        // },
        
    }
</script>

<style lang="">
    
</style>