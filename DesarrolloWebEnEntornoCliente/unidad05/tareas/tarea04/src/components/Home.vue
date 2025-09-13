<template>
    <div class="text-center">
        <h2 class="mb-4">Bienvenido a los Ejercicios de IT</h2>
        <div class="row justify-content-center">
            <div class="col-md-4 mb-3">
                <div class="card bg-dark text-white border-light">
                    <div class="card-body">
                        <h5 class="card-title">Elige a tu Pennywise</h5>
                        <p class="card-text">Selecciona tu Pennywise favorito y dale un alias aterrador.</p>
                        <router-link to="/elige-a-tu-pennywise" class="btn btn-danger">Ir al Ejercicio</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark text-white border-light">
                    <div class="card-body">
                        <h5 class="card-title">La casa flotante de los globos rojos</h5>
                        <p class="card-text">Controla la cantidad de globos y descubre un secreto espeluznante.</p>
                        <router-link to="/la-casa-flotante-de-los-globos-ojos" class="btn btn-danger">Ir al Ejercicio</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card bg-dark text-white border-light">
                    <div class="card-body">
                        <h5 class="card-title">La maldición de Derry</h5>
                        <p class="card-text">Explora eventos oscuros y filtra las historias más aterradoras.</p>
                        <router-link to="/la-maldicion-de-derry" class="btn btn-danger">Ir al Ejercicio</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 8px;
}
</style>