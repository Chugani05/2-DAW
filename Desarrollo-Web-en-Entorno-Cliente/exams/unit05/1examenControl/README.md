# 1er Examen Control Vue - 2º Trimestre  
## Sistema de Contador Reactivo con Mensajes Calculados  

### Instrucciones:  
1. Crea una aplicación Vue.js que implemente un contador con las siguientes características:  

    - **El valor inicial del contador debe ser 0.**  
    - **Dos botones:**  
        - **Incrementar:** Aumenta el valor del contador en 1.  
        - **Disminuir:** Disminuye el valor del contador en 1 (sin permitir valores negativos).  
    - **Un botón adicional para reiniciar el contador a 0.**  

2. Usa `computed` para mostrar un mensaje dinámico dependiendo del valor del contador:  
    - Si el contador es **0**, muestra:  
      > *"El contador está en su valor inicial."*  
    - Si el contador está entre **1 y 10**, muestra:  
      > *"Contador en rango bajo."*  
    - Si el contador es **mayor a 10**, muestra:  
      > *"Contador alto. ¡Atención!"*  

3. Valida las siguientes condiciones:  
    - El **botón de disminuir** debe deshabilitarse cuando el contador sea **0**.  
    - El mensaje debe actualizarse dinámicamente al cambiar el valor del contador.  

4. La aplicación debe seguir estas **prácticas técnicas**:  
    - Usa `ref` para manejar el valor del contador.  
    - Usa `computed` para calcular el mensaje basado en el valor del contador.  
    - Usa directivas como `v-on`, `v-bind` y `v-if` en la plantilla.  

---

## Consideraciones Técnicas  
- Trabajar con `setup()` para gestionar el estado reactivo.  
- `ref` será usado para almacenar el valor del contador.  
- La propiedad computada para el mensaje debe ser declarada usando `computed`.  
- Directivas de Vue como `v-if`, `v-bind` y `v-on` son esenciales para controlar la interfaz y las interacciones.  
