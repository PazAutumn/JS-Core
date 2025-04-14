# 📋 ProjectPulse - Desafío Final: Programación Avanzada en JavaScript

Este proyecto implementa una solución completa al desafío de **Programación Avanzada en JavaScript** para la plataforma ficticia **ProjectPulse** de la startup *TechFlow*. Aquí se desarrollan funcionalidades clave para la gestión de proyectos y tareas, análisis avanzado, simulación de asincronía y notificaciones en tiempo real, utilizando características modernas del lenguaje.

---

## 🛠️ Tecnologías

- JavaScript (ES6+)
- Node.js (para ejecución local)
- Programación orientada a objetos
- Funciones de orden superior
- Asincronía con `async/await`
- Patrón observador básico

---

## 🎯 Funcionalidades Implementadas

### 1. Gestión de Proyectos y Tareas

- **Estructura de clases `Project` y `Task`** para representar proyectos con su lista de tareas.
- `addTask(task)`: Agrega una tarea al proyecto.
- `getSummary()`: Devuelve un resumen con el número de tareas por estado (`pending`, `in progress`, `completed`).
- `sortTasksByDeadline()`: Ordena las tareas del proyecto por fecha límite.

### 2. Análisis Avanzado de Tareas

- `filterProjectTasks(project, filterFn)`: Filtra tareas según una función personalizada.
- `calculateRemainingTime(project)`: Calcula los días restantes para todas las tareas pendientes usando `reduce`.
- `getCriticalTasks(project)`: Identifica tareas con menos de 3 días restantes que aún no están completadas.

### 3. Simulación Asíncrona y Notificaciones

- `loadProjectDetails(projectId)`: Simula carga de detalles desde una API usando `Promise`.
- `updateTaskStatus(task, newStatus)`: Simula actualización del estado de una tarea con manejo de errores.
- `TaskNotifications`: Sistema de notificaciones que permite suscribirse y ser alertado cuando una tarea se completa.

---

## 🧪 Ejemplos de Uso

```js
// Crear un nuevo proyecto
const project1 = new Project(1, "ProjectPulse", "2024-11-10");

// Crear y agregar tareas
const task1 = new Task(1, "Definir alcance", "pending", "2024-11-15");
const task2 = new Task(2, "Diseñar mockups", "in progress", "2024-11-12");
const task3 = new Task(3, "Configurar ambiente", "pending", "2024-11-20");

project1.addTask(task1);
project1.addTask(task2);
project1.addTask(task3);

// Obtener resumen
console.log(project1.getSummary());

// Ordenar tareas por fecha límite
console.log(project1.sortTasksByDeadline());

// Filtrar tareas en progreso
console.log(filterProjectTasks(project1, task => task.status === "in progress"));

// Calcular días restantes
console.log(calculateRemainingTime(project1));

// Tareas críticas (< 3 días)
console.log(getCriticalTasks(project1));

// Simular carga de detalles
loadProjectDetails(project1.id).then(console.log);

// Simular actualización de estado
updateTaskStatus(task1, "completed")
  .then(console.log)
  .catch(console.error);

// Sistema de notificaciones
const notifications = new TaskNotifications();
notifications.subscribe(task => {
  console.log(`🔔 Notificación: La tarea "${task.description}" ha sido completada.`);
});
notifications.notify(task1);
