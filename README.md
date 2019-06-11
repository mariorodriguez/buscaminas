# buscaminas
Juego Buscaminas hecho en Angular

1- Clonar el repo
2- Ir a la carpeta del proyecto
3- ejecutar [npm install] para instalar dependencias
4- ejecutar [ng serve] para correr la APP

El juego está estructurado de la siguiente manera:

Componentes:
[juego.component] se encarga de mostrar el juego, tiempo y nueva partida.
[celda.component] se encarga de mostrar la celda y comportamiento. Recibe como parametro una Celda y emite eventos para los clicks.
[crono.component] muestra el tiempo de juego.

Clases:
[Juego] Maneja la lógica del juego. Permite suscribirse a su estado usando "rxjs" para que otros componentes se enteren de los cambios. Ej. [juego.component] puede saber si ha explotado una bomba al suscribirse.
[Celda] Representa una celda del juego con estados y ubicación.

Servicios:
[Util] Contiene funciones útiles.

ToDo:
Falta destapar celdas adyacentes y retoques.