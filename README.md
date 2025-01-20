# ⚡️ Carrito de Compras

Este proyecto implementa un carrito de compras interactivo y dinámico para una tienda de cursos en línea. Desarrollado con JavaScript modular, el proyecto utiliza el almacenamiento local (localStorage) para persistir los datos del carrito entre sesiones. La interfaz permite agregar cursos, aumentar cantidades automáticamente para cursos duplicados, eliminar cursos individuales y vaciar completamente el carrito. Todo el estado se maneja de forma eficiente mediante funciones especializadas y eventos del DOM.

## Características

- **Gestión de Cursos:**
  - Agregar cursos al carrito con un solo clic
  - Eliminar cursos individualmente
  - Vaciar todo el carrito de una vez
  - Sistema inteligente de conteo que actualiza cantidades automáticamente
- **Persistencia de Datos:** Almacenamiento local para mantener el carrito entre sesiones
- **Interfaz Moderna:**
  - Diseño responsivo con Skeleton CSS
  - Experiencia fluida en móviles y desktop
  - Retroalimentación visual de acciones
- **Arquitectura Modular:**
  - Código JavaScript organizado en módulos
  - Funciones especializadas para cada operación
  - Manejo eficiente del estado

## Tecnologías y Herramientas

- **HTML5:** Estructura semántica y moderna del documento.
- **CSS3:**
  - Normalize.css para resetear estilos
  - Skeleton CSS para grid y componentes responsivos
  - Custom CSS para estilos personalizados
- **JavaScript ES6+:**
  - Módulos nativos para código organizado
  - LocalStorage API para persistencia de datos
  - Manipulación avanzada del DOM
  - Event handling y delegación de eventos

## Estructura del Proyecto

- **css/**:
  - **normalize.css**: Reset de estilos CSS
  - **skeleton.css**: Framework CSS minimalista
  - **custom.css**: Estilos personalizados
- **js/**:
  - **app.js**: Lógica principal y estado de la aplicación
  - **elementos.js**: Referencias a elementos del DOM
  - **funciones.js**: Funciones utilitarias
- **index.html**: Página principal con la interfaz del carrito

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/CarritoDeCompras.git
```

2. Navega al directorio del proyecto:

```
cd CarritoDeCompras
```

3. Abre el archivo `index.html` en tu navegador web preferido

4. Opcionalmente, puedes usar un servidor local como Live Server para una mejor experiencia

## Instalación

No se requiere instalación adicional para utilizar este proyecto.

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio.

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Imagen de Rereferencia

![](https://i.postimg.cc/Y9Zt2Mt1/Carrito-De-Compras.png)

## ¡Visita Nuestro Proyecto!

¿Quieres ver Carrito de Compras en acción? ¡Haz clic aquí! 👉 [Visitar Carrito de Compras](https://jmatochepascual.github.io/CarritoDeCompras/)

Hecho con 💚 por JMCode | ©2025 - Transformando tu experiencia de compra en línea.
