## Diseño de API REST: Calculadora

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

Para solucionar este ejercicio, se recomienda seguir los siguientes pasos:
1. **Identificar los recursos principales**: Analiza el enunciado y determina sobre qué recursos tiene sentido ejecutar operaciones.
2. **Definir los endpoints**: Crea una lista de endpoints que representen las operaciones que se pueden realizar sobre los recursos identificados. Para cada endpoint, indica el método HTTP que se utilizará y los parámetros necesarios (path params) u opcionales (query params), así como el cuerpo de la petición y la respuesta esperada.

Si lo deseas, puedes utilizar el siguiente formato para tu solución:

(Los path params, al ser obligatorios, se pueden incluir directamente en el endpoint, mientras que los query params se pueden indicar como opcionales)

| Método Http | Endpoint                   | Query Params | Cuerpo JSON de la petición | Respuesta JSON de la petición                                                           | Códigos HTTP de respuesta posibles                              |
|-------------|----------------------------|--------------|----------------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| POST        | /sumas                     |              | `{ "numbers": [2,2,2,2] }` | `{ "operation_id": 1, "numbers": [2,2,2,2], "solution": 8, "operation": "suma" }`       | 201 Created <br/>400 Bad Request <br/>500 Internal Server Error |
| POST        | /restas                    |              | `{ "numbers": [2,2,2,2] }` | `{ "operation_id": 2, "numbers": [2,2,2,2], "solution": -4, "operation": "resta" }`     | 201 Created <br/>400 Bad Request <br/>500 Internal Server Error |
| POST        | /multiplicaciones          |              | `{ "numbers": [2,2] }`     | `{ "operation_id": 3, "numbers": [2,2], "solution": 4, "operation": "multiplicacion" }` | 201 Created <br/>400 Bad Request <br/>500 Internal Server Error |
| POST        | /dividisiones              |              | `{ "numbers": [4,2] }`     | `{ "operation_id": 4, "numbers": [4,2], "solution": 2, "operation": "division" }`       | 201 Created <br/>400 Bad Request <br/>500 Internal Server Error |
| POST        | /raices                    |              | `{ "numbers": [4,2] }`     | `{ "operation_id": 5, "numbers": [4,2], "solution": 3, "operation": "raiz" }`           | 201 Created <br/>400 Bad Request <br/>500 Internal Server Error |
| POST        | /potencias                 |              | `{ "numbers": [2,3] }`     | `{ "operation_id": 6, "numbers": [2,3], "solution": 8, "operation": "potencia" }`       | 201 Created <br/>400 Bad Request <br/>500 Internal Server Error |
| GET         | /operaciones/{operationId} |              |                            | `{ "operation_id": 6, "numbers": [2,3], "solution": 8, "operation": "potencia" }`       | 200 Ok <br/>404 Not Found <br/>500 Internal Server Error        |
