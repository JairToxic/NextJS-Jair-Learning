import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
import numpy as np

# Crear figura y ejes
fig, ax = plt.subplots(figsize=(10, 14))
ax.set_xlim(0, 10)
ax.set_ylim(0, 14)
ax.axis("off")

# Definir el texto de cada paso en el proceso de selección de personal
pasos_seleccion = [
    "Inicio de Selección de Personal",
    "Solicitud de Personal",
    "Definición del Perfil",
    "Búsqueda de Candidatos",
    "Solicitud a Agencias (si no hay candidatos)",
    "Definición de Entrevistas",
    "Selección de Preseleccionados",
    "Reunión para Selección Final",
    "Decisión en Gerencia (si no hay consenso)",
    "Contratación de Finalistas",
    "Fin"
]

# Posiciones y tamaños de las cajas
x = 3.5
y_values = list(range(13, 0, -2))
width = 5
height = 0.8

# Colores de fondo
colors = plt.cm.Greens(np.linspace(0.3, 0.9, len(pasos_seleccion)))

# Dibujar cada paso y agregar el texto
for y, paso, color in zip(y_values, pasos_seleccion, colors):
    box = FancyBboxPatch(
        (x, y), width, height, boxstyle="round,pad=0.4",
        edgecolor="#2C3E50", facecolor=color, linewidth=2
    )
    ax.add_patch(box)
    ax.text(
        x + width / 2, y + height / 2, paso, ha="center", va="center",
        fontsize=12, color="white", fontweight="bold", fontname='Arial'
    )

# Dibujar flechas
for y1, y2 in zip(y_values[:-1], y_values[1:]):
    arrow = FancyArrowPatch(
        (x + width / 2, y1 - height / 2), (x + width / 2, y2 + height / 2),
        mutation_scale=15, color="#2C3E50", arrowstyle="-|>", linewidth=2
    )
    ax.add_patch(arrow)

plt.title("Flujograma del Proceso de Selección de Personal", fontsize=16, fontweight="bold", pad=20, color="#1E8449", fontname='Arial')
plt.show()
