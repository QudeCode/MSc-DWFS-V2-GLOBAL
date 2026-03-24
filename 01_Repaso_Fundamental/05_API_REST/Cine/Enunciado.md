## Diseño de API REST: Gestión de un cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:
- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala. No se contempla la posibilidad de crear una reserva sin un usuario o una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva. El pago debe estar asociado a una reserva y debe incluir el importe y el método de pago utilizado.

Para solucionar este ejercicio, se recomienda seguir los siguientes pasos:
1. **Identificar los recursos principales**: Analiza el enunciado y determina sobre qué recursos tiene sentido ejecutar operaciones.
2. **Definir los endpoints**: Crea una lista de endpoints que representen las operaciones que se pueden realizar sobre los recursos identificados. Para cada endpoint, indica el método HTTP que se utilizará y los parámetros necesarios (path params) u opcionales (query params), así como el cuerpo de la petición y la respuesta esperada.

Si lo deseas, puedes utilizar el siguiente formato para tu solución:

(Los path params, al ser obligatorios, se pueden incluir directamente en el endpoint, mientras que los query params se pueden indicar como opcionales)

| Método Http | Endpoint                                      | Query Params | Cuerpo JSON de la petición                                                                | Respuesta JSON de la petición                                                                     | Códigos HTTP de respuesta posibles                  |
|-------------|-----------------------------------------------|--------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| POST        | /films                                        |              | `{ "title": "Dune 3", "director":"Arturo", "actors":["Thimoty"] }`                        | `{ "film-id": 1, "title": "Dune 3", "director":"Arturo", "actors":["Thimoty"] }`                  | 201 Created <br/>400 Bad Request                    |
| DELETE      | /films/{filmId}                               |              |                                                                                           | `{ "message": "Film deleted succesfully" }`                                                       | 200 Ok <br/>404 Not Found                           |
| PUT         | /films/{filmId}                               |              | `{ "title": "SW" }`                                                                       | `{ "film-id": 1, "title": "SW", "director":"Arturo", "actors":["Thimoty"] }`                      | 200 Ok <br/>404 Not Found <br/>400 Bad Request      |
| POST        | /rooms                                        |              | `{ "name": "Sala 1", "capacity": 200 }`                                                   | `{ "room-id": 1, "name": "Sala 1", "capacity": 200 }`                                             | 201 Created <br/>400 Bad Request                    |
| DELETE      | /rooms/{roomId}                               |              |                                                                                           | `{ "message": "Room deleted succesfully" }`                                                       | 200 Ok <br/>404 Not Found                           |
| PATCH       | /rooms/{roomId}                               |              | `{ "capacity": 150 }`                                                                     | `{ "room-id": 1, "name": "Sala 1", "capacity": 150 }`                                             | 200 Ok <br/>404 Not Found <br/>400 Bad Request      |
| POST        | /users                                        |              | `{ "name": "Raúl", "surname": "Quirós", "email":"raul@gmail.com", "password": "pwd123" }` | `{ "user-id": 1, "name": "Raúl", "surname": "Quirós", "email":"raul@gmail.com" }`                 | 201 Created <br/>400 Bad Request                    |
| DELETE      | /users/{userId}                               |              |                                                                                           | `{ "message": "User deleted succesfully" }`                                                       | 200 Ok <br/>404 Not Found                           |
| PATCH       | /users/{userId}                               |              | `{ "email":"reyul@gmail.com" }`                                                           | `{ "user-id": 1, "name": "Raúl", "surname": "Quirós", "email":"reyul@gmail.com" }`                | 200 Ok <br/>404 Not Found <br/>400 Bad Request      |
| POST        | /users/{userId}/bookings                      |              | `{ "user-id": 1, "room-id": 1, "film-id": 1, "seats": 2 }`                                | `{ "booking-id": 1, "user-id": 1, "room-id": 1, "film-id": 1, "seats": 2, "status": "reserved" }` | 201 Created <br/>400 Bad Request                    |
| DELETE      | /users/{userId}/bookings/{bookingId}          |              |                                                                                           | `{ "message": "Booking deleted succesfully" }`                                                    | 200 Ok <br/>404 Not Found                           |
| PATCH       | /users/{userId}/bookings/{bookingId}          |              | `{ "film-id": 3 }`                                                                        | `{ "booking-id": 1, "user-id": 1, "room-id": 1, "film-id": 3 }`                                   | 200 Ok <br/>404 Not Found <br/>400 Bad Request      |
| POST        | /users/{userId}/bookings/{bookingId}/payments |              | `{ "import": 9.90, "payment-method": "VISA" }`                                            | `{ "booking-id": 1, "import": 9.90, "payment-method": "VISA", "status": "paid" }`                 | 201 Created <br/>404 Not Found <br/>400 Bad Request |
