## Diseño de API REST: Juego Hunde la Flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'.
Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:
- 1 barco de 4 cuadrados.
- 2 barcos de 3 cuadrados.
- 3 barcos de 2 cuadrados.
- 4 barcos de 1 cuadrado.

También es necesario que, como dicen las instrucciones, se respeten dos reglas:
- Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
- Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.

El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:
- Crear una partida.
- Eliminar una partida.
- Modificar datos de una partida.
- Iniciar una partida.
- Finalizar una partida.
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
- Añadir un barco a la cuadrícula de un jugador en una partida.
- Eliminar un barco de la cuadrícula de un jugador en una partida.
- Consultar todos los barcos de un jugador de una partida.
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.
- Obtener datos de un usuario.
- Eliminar un usuario.

Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:
- ¿Qué recursos tiene que manejar la API?
- ¿Cómo se relacionan entre sí?
- ¿Qué información (atributos) guarda cada recurso?

Para solucionar este ejercicio, se recomienda seguir los siguientes pasos:
1. **Identificar los recursos principales**: Analiza el enunciado y determina sobre qué recursos tiene sentido ejecutar operaciones.
2. **Definir los endpoints**: Crea una lista de endpoints que representen las operaciones que se pueden realizar sobre los recursos identificados. Para cada endpoint, indica el método HTTP que se utilizará y los parámetros necesarios (path params) u opcionales (query params), así como el cuerpo de la petición y la respuesta esperada.

Si lo deseas, puedes utilizar el siguiente formato para tu solución:

(Los path params, al ser obligatorios, se pueden incluir directamente en el endpoint, mientras que los query params se pueden indicar como opcionales)

- Partidas (crear, eliminar, modificar y consultar) (no iniciar ni finalizar)
- Barcos (colocar, eliminar, consultar)
- Disparos (crear)
- Usuarios (crear, eliminar y consultar)

| Método Http | Endpoint                                          | Query Params                 | Cuerpo JSON de la petición                                                           | Respuesta JSON de la petición                                                                                                                   | Códigos HTTP de respuesta posibles                  |
|-------------|---------------------------------------------------|------------------------------|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| POST        | /games                                            |                              |                                                                                      | `{ "game-id": 1, "time-start": "10/01/01 - 10:00" }`                                                                                            | 201 Created <br/>400 Bad Request                    |
| GET         | /games/{gameId}                                   | player, boat, shot, winner ? |                                                                                      | `{ "game-id": 1, "time-start": "10/01/01 - 10:00", "time-end":  }`                                                                              |                                                     |
| DELETE      | /games/{gameId}                                   |                              |                                                                                      | `{ "message": "Game deleted succesfully }`                                                                                                      | 200 Ok <br/>404 Not Found                           |
| POST        | /games/{gameId}/players/{playerId}/boats          |                              | `{ "size": 3, "orientation": "vertical", "coord-origin-x": 5, "coord-origin-y": 3 }` | `{ "game-id": 1, "player": 1, "boat-id": 1, "placed": true, size": 3, "orientation": "vertical", "coord-origin-x": 5, "coord-origin-y": 3 }`    | 201 Created <br/>404 Not Found <br/>400 Bad Request |
| GET         | /games/{gameId}/players/{playerId}/boats          |                              |                                                                                      | `{ "game-id": 1, "player": 1, "boats": [{ "boat-id": 1, size": 3, "orientation": "vertical", "coord-origin-x": 5, "coord-origin-y": 3 }, ...]}` | 200 Ok <br/>404 Not Found                           |
| DELETE      | /games/{gameId}/players/{playerId}/boats/{boatId} |                              |                                                                                      | `{ "message": "Boat deleted succesfully }`                                                                                                      | 200 Ok <br/>404 Not Found                           |
| POST        | /games/{gameId}/players/{playerId}/shots          |                              | `{ "coord-origin-x": 5, "coord-origin-y": 3 }`                                       | `{ "game-id": 1, "player": 1, "shot-id": 1, "hit": true, "coord-origin-x": 5, "coord-origin-y": 3 }`                                            | 201 Created <br/>404 Not Found <br/>400 Bad Request |
| POST        | /games/{gameId}/players                           |                              | `{ "nickname": "Paco" }`                                                             | `{ "game-id": 1, "nickname": "Paco", "player": 1 }`                                                                                             | 201 Created <br/>404 Not Found <br/>400 Bad Request |
| GET         | /games/{gameId}/players                           |                              |                                                                                      | `{ "game-id": 1, "players": [{ "player": 1, "nickname": "Paco" }, { "player": 2, "nickname": "Mer" }] }`                                        | 200 Ok <br/>404 Not Found                           |
| DELETE      | /games/{gameId}/players/{playerId}                |                              |                                                                                      | `{ "message": "Player deleted succesfully }`                                                                                                    | 200 Ok <br/>404 Not Found                           |

Quitado porque no aplica:
| PATCH       | /games/{gameId}                                   |                              |                            |                                                      |                                    |