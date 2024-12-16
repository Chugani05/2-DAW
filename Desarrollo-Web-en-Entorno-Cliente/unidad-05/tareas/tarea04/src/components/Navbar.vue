<template>
  <div class="container-fluid">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <i class="bi bi-emoji-smile-upside-down icon-large icon-spacing text-danger"></i>
        <span class="fs-4 lead">Stephen King's IT.</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item d-flex align-items-center">
          <RouterLink to="/home" class="text-danger">
            <i class="bi bi-house-door-fill icon-medium"></i>
          </RouterLink>
          <RouterLink to="/home" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item d-flex align-items-center text-danger">
          <RouterLink to="/elige-a-tu-pennywise" class="text-danger">
            <i class="bi bi-1-circle-fill icon-medium"></i>
          </RouterLink>
          <RouterLink to="/elige-a-tu-pennywise" class="nav-link">Ejercicio</RouterLink>
        </li>
        <li class="nav-item d-flex align-items-center text-danger">
          <RouterLink to="/la-casa-flotante-de-los-globos-ojos" class="text-danger">
            <i class="bi bi-2-circle-fill icon-medium"></i>
          </RouterLink>
          <RouterLink to="/la-casa-flotante-de-los-globos-ojos" class="nav-link">Ejercicio</RouterLink>
        </li>
        <li class="nav-item d-flex align-items-center text-danger">
          <RouterLink to="/la-maldicion-de-derry" class="text-danger">
            <i class="bi bi-3-circle-fill icon-medium"></i>
          </RouterLink>
          <RouterLink to="/la-maldicion-de-derry" class="nav-link">Ejercicio</RouterLink>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
  .icon-medium {
    font-size: 22px;
  }

  .icon-large {
    font-size: 35px;
  }

  .icon-spacing {
    margin-right: 15px;
    margin-top: 3px
  }
</style>