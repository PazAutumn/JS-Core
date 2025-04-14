# JS-Core
BCH - G1 - M2 - Programación avanzada en JavaScript

# 📌 ProjectPulse - Solución Desafío Programación Avanzada en JavaScript

Este repositorio contiene la solución al desafío final del módulo de **Programación Avanzada en JavaScript**.  
El objetivo es implementar funcionalidades clave para "ProjectPulse", una plataforma de gestión de proyectos para equipos de desarrollo de software, simulando operaciones reales y utilizando conceptos avanzados del lenguaje.

---

## 📚 Descripción General

A través de este desafío se aplican conceptos de:
- Estructuras de datos con objetos y arrays
- Métodos funcionales (`map`, `filter`, `reduce`, `sort`)
- Funciones de orden superior
- Asincronía con `async/await` y `Promises`
- Patrón de observador (notificaciones)

Todo el código está escrito en un único archivo JavaScript, bien estructurado, comentado y con ejemplos de uso para cada funcionalidad implementada.

---

## ✅ Requerimientos Implementados

### 1. 🧩 Gestión de Proyectos y Tareas (3 puntos)
- Representación de proyectos con tareas.
- Función para añadir tareas nuevas.
- Resumen del estado de tareas con `map`, `filter`, `reduce`.
- Ordenamiento de tareas por fecha límite (`sort`).

### 2. 🔍 Análisis Avanzado de Tareas (3 puntos)
- `filtrarTareasProyecto(fn)`: función de orden superior.
- `calcularTiempoRestante()`: días restantes usando `reduce`.
- `obtenerTareasCriticas()`: tareas urgentes (< 3 días) no completadas.

### 3. 🔄 Sincronización y Tiempo Real (4 puntos)
- `cargarDetallesProyecto()`: simulación API con `async/await`.
- `actualizarEstadoTarea()`: actualización con manejo de errores.
- `notificacionesTareas`: sistema de observadores para tareas completadas.

---

## 🚀 Cómo Usar el Código

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/projectpulse-js-avanzado.git
cd projectpulse-js-avanzado
