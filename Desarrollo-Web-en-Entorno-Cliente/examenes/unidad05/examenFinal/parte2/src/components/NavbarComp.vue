<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{{ $t('calendario') }}</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/gestion">{{ $t('gestion') }}</a>
          </li>
        </ul>
        <select v-model="$i18n.locale" class="form-select" style="width: auto">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavbarComp',
}
</script>

<style scoped>
/* Si necesitas más personalización puedes agregar estilos aquí */
</style>
