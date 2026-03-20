## Diseño de API REST: Gestion de una biblioteca

En este ejercicio vamos a diseñar la API REST de una biblioteca online. Concretamente nos centraremos en operaciones que los trabajadores de la biblioteca estarán realizando.

Las operaciones que la API debe soportar son las siguientes:
- Obtener un listado de todos los libros de la biblioteca.
- Filtrar los libros por título y autor.
- Registrar un nuevo préstamo 
- Dar de baja un préstamo.
- Obtener un listado de todos los préstamos de un usuario.
- Modificar título, autor o año de un libro.
- Generar un reporte de los libros prestados a un usuario. Este reporte quedará almacenado en el sistema y podrá ser consultado posteriormente.

Para solucionar este ejercicio, se recomienda seguir los siguientes pasos:
1. **Identificar los recursos principales**: Analiza el enunciado y determina sobre qué recursos tiene sentido ejecutar operaciones.
2. **Definir los endpoints**: Crea una lista de endpoints que representen las operaciones que se pueden realizar sobre los recursos identificados. Para cada endpoint, indica el método HTTP que se utilizará y los parámetros necesarios (path params) u opcionales (query params), así como el cuerpo de la petición y la respuesta esperada.

Si lo deseas, puedes utilizar el siguiente formato para tu solución:

(Los path params, al ser obligatorios, se pueden incluir directamente en el endpoint, mientras que los query params se pueden indicar como opcionales)

| Método Http  | Endpoint                 | Query Params  | Cuerpo JSON de la petición                                                | Respuesta JSON de la petición                                                                                                                                           | Códigos HTTP de respuesta posibles                              |
|--------------|--------------------------|---------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| GET          | /books                   | title, author |                                                                           | ` { books: [{ "book_id": 1, "title": "Wow, la peli", "author": "Arthur M., "available": true }, ...]}`                                                                  | 200 Ok <br/>400 Bad Request <br/>500 Internal Server Error      |
| POST         | /loans                   |               | `{ "book_id": 1, "user_id": 1, "loan_date": "01/01/2026" }`               | `{ "loan_id": 1, book_id": 1, "user_id": 1, "loan_date": "01/01/2026", "loan_active": true }`                                                                           | 201 Created <br/>400 Bad Request <br/>500 Internal Server Error |
| PATCH / DEL. | /loans/{loanId}          |               |                                                                           | `{ "message": "loan returned" }`                                                                                                                                        | 200 Ok <br/>404 Not Found <br/>500 Internal Server Error        |
| GET          | /users/{userId}/loans    |               |                                                                           | `[{ "loan_id": 1, book_id": 1, "title": "Wow, la peli", "author": "Arthur M.", "loan_date": "01/01/2026", "loan_end_date": "01/02/2026", "loan_active": false }, ... ]` | 200 Ok <br/>404 Not Found <br/>500 Internal Server Error        |
| PATCH        | /books/{bookId}          |               | `{ "title": "Paco, la peli", "author": "Arthur P., "year_relese": 2025 }` | `{ "book_id": 1, "title": "Paco, la peli", "author": "Arthur P., "year_relese": 2025 }`                                                                                 | 200 Ok <br/>404 Not Found <br/>500 Internal Server Error        |
| POST         | /users/{userId}/reports/ |               |                                                                           | `{ "user_id": 1, "loans": [{ "book_id": 1, "title": "Wow, la peli", "author": "Arthur M." }, ... ]}`                                                                    | 201 Created <br/>404 Not Found <br/>500 Internal Server Error   |
