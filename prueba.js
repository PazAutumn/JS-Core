// Estructura de datos para representar proyectos y tareas

class Project {
    constructor(id, name, startDate) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.tasks = [];
    }

    // Función para añadir nuevas tareas al proyecto
    addTask(task) {
        this.tasks.push(task);
    }

    // Resumen del proyecto: número de tareas por estado
    getSummary() {
        return this.tasks.reduce((summary, task) => {
            summary[task.status] = (summary[task.status] || 0) + 1;
            return summary;
        }, {});
    }

    // Ordenar las tareas del proyecto por fecha límite
    sortTasksByDeadline() {
        return this.tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    }
}

class Task {
    constructor(id, description, status, deadline) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.deadline = deadline;
    }
}

// 2. Análisis Avanzado de Tareas

// Filtrar tareas con una función de orden superior
function filterProjectTasks(project, filter) {
    return project.tasks.filter(filter);
}

// Calcular el número total de días restantes para las tareas pendientes
function calculateRemainingTime(project) {
    const today = new Date();
    return project.tasks
        .filter(task => task.status === "pending")
        .reduce((totalDays, task) => {
            const deadline = new Date(task.deadline);
            const remainingDays = (deadline - today) / (1000 * 60 * 60 * 24);
            return parseInt(totalDays + (remainingDays > 0 ? remainingDays : 0));
        }, 0);
}

// Obtener tareas críticas (menos de 3 días para fecha límite y no completadas)
function getCriticalTasks(project) {
    const today = new Date();
    return project.tasks.filter(task => {
        const deadline = new Date(task.deadline);
        const remainingDays = (deadline - today) / (1000 * 60 * 60 * 24);
        return remainingDays < 3 && task.status !== "completed";
    });
}

// 3. Sincronización y Actualizaciones en Tiempo Real

// Simulación de carga de detalles del proyecto (API asíncrona)
async function loadProjectDetails(projectId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Detalles cargados para el proyecto con ID: ${projectId}`);
        }, 1000);
    });
}

// Simulación de actualización del estado de una tarea en el servidor
async function updateTaskStatus(task, newStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) { // 80% probabilidad de éxito
                task.status = newStatus;
                resolve(`Tarea ${task.id} actualizada a ${newStatus}`);
            } else {
                reject(`Error al actualizar la tarea ${task.id}`);
            }
        }, 500);
    });
}

// Sistema de notificaciones para tareas completadas
class TaskNotifications {
    constructor() {
        this.listeners = [];
    }

    // Suscribirse a las notificaciones
    subscribe(listener) {
        this.listeners.push(listener);
    }

    // Notificar a todos los suscriptores cuando una tarea se complete
    notify(task) {
        if (task.status === "completed") {
            this.listeners.forEach(listener => listener(task));
        }
    }
}

// Ejemplos de uso

// Crear un proyecto
const project1 = new Project(1, "ProjectPulse", "2024-11-10");

// Crear tareas
const task1 = new Task(1, "Definir alcance", "pending", "2024-11-15");
const task2 = new Task(2, "Diseñar mockups", "in progress", "2024-11-12");
const task3 = new Task(3, "Configurar ambiente", "pending", "2024-11-20");

// Agregar tareas al proyecto
project1.addTask(task1);
project1.addTask(task2);
project1.addTask(task3);

// Obtener resumen de tareas del proyecto
console.log("Resumen del proyecto:", project1.getSummary());

// Ordenar tareas por fecha límite
console.log("Tareas ordenadas por fecha límite:", project1.sortTasksByDeadline());

// Filtrar tareas en progreso
console.log("Tareas en progreso:", filterProjectTasks(project1, task => task.status === "in progress"));

// Calcular días restantes para completar tareas pendientes
console.log("Días restantes para completar tareas pendientes:", calculateRemainingTime(project1));

// Obtener tareas críticas
console.log("Tareas críticas:", getCriticalTasks(project1));

// Cargar detalles del proyecto (simulación asíncrona)
loadProjectDetails(project1.id).then(console.log);

// Actualizar estado de una tarea (simulación asíncrona)
updateTaskStatus(task1, "completed")
    .then(console.log)
    .catch(console.error);

// Configurar sistema de notificaciones
const notifications = new TaskNotifications();
notifications.subscribe((task) => console.log(`Notificación: La tarea "${task.description}" ha sido completada.`));

// Notificar cuando una tarea se complete
notifications.notify(task1);