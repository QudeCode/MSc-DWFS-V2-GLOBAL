## Diseño de API REST: Gestion de espacios de coworking y eventos

Imagina que estás trabajando para una empresa que se especializa en la gestión de eventos y reservas en línea para una cadena de espacios de coworking distribuidos en varias ciudades.

La empresa desea implementar una API REST para facilitar la reserva de espacios de trabajo, salas de reuniones, y la organización de eventos. La API debe permitir a los usuarios:
- Buscar espacios disponibles basados en ubicación, fecha, y tipo de espacio (espacio de trabajo individual, sala de reuniones o auditorio para eventos)
- Hacer reservas, cancelar reservas, y modificar reservas existentes.
- Además, debe permitir a los administradores de la empresa agregar, modificar o eliminar los espacios disponibles en diferentes ubicaciones. 
- También deben poder crear nuevos eventos. Un evento solo puede crearse correctamente si el tipo de espacio asociado es un auditorio.

Para solucionar este ejercicio, se recomienda seguir los siguientes pasos:
1. **Identificar los recursos principales**: Analiza el enunciado y determina sobre qué recursos tiene sentido ejecutar operaciones.
2. **Definir los endpoints**: Crea una lista de endpoints que representen las operaciones que se pueden realizar sobre los recursos identificados. Para cada endpoint, indica el método HTTP que se utilizará y los parámetros necesarios (path params) u opcionales (query params), así como el cuerpo de la petición y la respuesta esperada.

Si lo deseas, puedes utilizar el siguiente formato para tu solución:

(Los path params, al ser obligatorios, se pueden incluir directamente en el endpoint, mientras que los query params se pueden indicar como opcionales)

- Espacios
- Reservas
- Usuarios (normal, admin)
- Eventos

| Método Http | Endpoint                               | Query Params         | Cuerpo JSON de la petición                                   | Respuesta JSON de la petición                                                                                                                                                   | Códigos HTTP de respuesta posibles                  |
|-------------|----------------------------------------|----------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| GET         | /spaces                                | location, date, type |                                                              | `{ "spaces": [{ "space-id": 1, "location": "Sabadell", "type": "auditory", "bookings": [{ "booking-id": 1, "start": "01/01/2026-10:00", "end": "01/01/2026-18:00" }, ...] }] }` | 201 Created <br/>400 Bad Request <br/>404 Not Found |
| POST        | /spaces/{spaceId}/bookings             |                      | `{ "start": "01/01/2026-10:00", "end": "01/01/2026-18:00" }` | `{ "space-id": 1, "booking-id": 1, "start": "01/01/2026-10:00", "end": "01/01/2026-18:00" }`                                                                                    | 201 Created <br/>400 Bad Request <br/>404 Not Found |
| DELETE      | /spaces/{spaceId}/bookings/{bookingId} |                      |                                                              | `{ "message": "Reservation deleted succesfully." }`                                                                                                                             | 200 Ok <br/>404 Not Found                           |
| PATCH       | /spaces/{spaceId}/bookings/{bookingId} |                      | `{ "start": "01/01/2026-11:00" }`                            | `{ "space-id": 1, "booking-id": 1, "start": "01/01/2026-11:00", "end": "01/01/2026-18:00" }`                                                                                    | 200 Ok <br/>400 Bad Request <br/>404 Not Found      |
| POST        | /spaces                                |                      | `{ "location": "Sabadell", "type": "auditory" }`             | `{ "space-id": 1, "location": "Sabadell", "type": "auditory", "bookings": [] }`                                                                                                 | 201 Created <br/>400 Bad Request                    |
| PATCH       | /spaces/{spaceId}                      |                      | `{ "location": "Sant Cugat" }`                               | `{ "space-id": 1, "location": "Sant Cugat", "type": "auditory", "bookings": [] }`                                                                                               | 200 Ok <br/>400 Bad Request <br/>404 Not Found      |
| DELETE      | /spaces/{spaceId}                      |                      |                                                              | `{ "message": "Reservation deleted succesfully." }`                                                                                                                             | 200 Ok <br/>404 Not Found                           |
| POST        | /spaces/{spaceId}/events               |                      | `{ "start": "01/01/2026-10:00", "end": "01/01/2026-18:00" }` | `{ "event-id": 1, "space-id": 1, "start": "01/01/2026-10:00", "end": "01/01/2026-18:00" }`                                                                                      | 201 Created <br/>400 Bad Request                    |

