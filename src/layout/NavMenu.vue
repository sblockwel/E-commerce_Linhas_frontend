<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                            </li>                            
                            <li class="nav-item">
                                <router-link class="nav-link" to="/produtos" > 
                                    <fa-icon icon="tags"/> Produtos
                                </router-link>                                
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/clientes">
                                    <fa-icon icon="users"/> Clientes
                                </router-link>
                            </li>                            
                            <li class="nav-item">
                                <router-link class="nav-link" to="/pedidos">
                                    <fa-icon icon="shopping-cart"/> Pedidos
                                </router-link>
                            </li>
                            
                        </ul>                        
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>