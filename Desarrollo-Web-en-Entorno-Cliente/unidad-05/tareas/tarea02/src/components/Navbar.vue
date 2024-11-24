<script setup>
  import { useI18n } from "vue-i18n";
  // Extraer locale y t desde useI18n
  const { locale, t } = useI18n(); // Esta t es la que usamos en el Template como $t
  // Cambiar el idioma dinámicamente
  const changeLanguage = (lang) => {
  locale.value = lang;
  };
</script>

<template>
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Portafolio</a>
        Router
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarsExample01" style="">
          <ul class="navbar-nav me-auto mb-2">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">{{ $t(aboutme) }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/projects" class="nav-link">{{ $t(projects) }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/skills" class="nav-link">{{ $t(skills) }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/experience" class="nav-link">{{ $t(experience) }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link">{{ $t(contact) }}</RouterLink>
            </li>
          </ul>
        </div>
    </div>
</template>