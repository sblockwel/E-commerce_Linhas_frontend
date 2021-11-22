<template>    
    <div>
        <teleport to="head">
        </teleport>
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/admin"> <fa-icon icon="store"/> Linhas Blumenau</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <login-display/>
        </header>

        <nav-menu></nav-menu>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import LoginDisplay from '../components/LoginDisplay.vue'
    import NavMenu from './NavMenu.vue'
    export default {
        name: "AdminLayout",
        components: {
            NavMenu
        },
        
                LoginDisplay
    }
</script>
<style scoped>
   
</style>