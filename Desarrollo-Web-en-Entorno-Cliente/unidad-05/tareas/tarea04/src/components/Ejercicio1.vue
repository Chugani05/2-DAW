<script>
export default {
    data() {
        return {
            pennywiseList: [
                { name: "Cartoon Pennywise", image: "/imgs/cartoon.jpg" },
                { name: "1986 Pennywise", image: "/imgs/1986.webp" },
                { name: "Real Life Pennywise", image: "/imgs/real.avif" },
                { name: "2017 Pennywise", image: "/imgs/2017.jpg" }
            ],
            selected: null,
            alias: "",
            showForm: false
        };
    },
    methods: {
        selectPennywise(pennywise) {
            this.selected = pennywise.name;
            this.showForm = true;
        },
        saveAlias() {
            if (this.alias.trim() === "") {
                alert("Debes ingresar un alias.");
                return;
            }
            alert(`Alias para ${this.selected}: ${this.alias}`);
            this.resetSelection();
        },
        resetSelection() {
            this.selected = null;
            this.alias = "";
            this.showForm = false;
        }
    }
};
</script>

<template>
    <div class="container text-center">
        <h2 class="mb-4">Elige tu Pennywise favorito</h2>
        <div class="row justify-content-center">
            <div
                v-for="(pennywise, index) in pennywiseList"
                :key="index"
                class="col-md-3 mb-4"
            >
                <div
                    class="card"
                    :class="{ 'border-danger': selected === pennywise.name }"
                    @click="selectPennywise(pennywise)"
                >
                    <img
                        :src="pennywise.image"
                        :alt="pennywise.name"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{ pennywise.name }}</h5>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showForm" class="mt-4">
            <h3>Has seleccionado a {{ selected }} como tu Pennywise favorito</h3>
            <form @submit.prevent="saveAlias" class="mt-3">
                <div class="form-group">
                    <label for="alias">Introduce un alias para tu Pennywise</label>
                    <input
                        v-model="alias"
                        type="text"
                        id="alias"
                        class="form-control"
                        placeholder="Escribe tu alias"
                        required
                    />
                </div>
                <button type="submit" class="btn btn-danger mt-2">Guardar Alias</button>
            </form>
        </div>

        <button v-if="selected" @click="resetSelection" class="btn btn-outline-danger mt-4">
            Reiniciar Selección
        </button>
    </div>
</template>

<style scoped>
.card {
    cursor: pointer;
    transition: transform 0.3s;
}
.card:hover {
    transform: scale(1.05);
}
.border-danger {
    border: 2px solid red !important;
}
</style>
