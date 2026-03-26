## Diseño de API REST: API para una aplicación de Delivery de Comida

Diseña una API REST para una plataforma de delivery de comida. La API debe gestionar la interacción entre usuarios, restaurantes y el sistema de pagos, permitiendo un flujo eficiente desde la búsqueda de restaurantes hasta la confirmación del pedido.

### Funcionalidades para Usuarios
- **Exploración de restaurantes y menús:** 
  - Permitir la búsqueda de restaurantes por ubicación, tipo de cocina y otros filtros que consideres apropiados; 
  - visualizar menús con información detallada de cada plato. 
  - Los menus están asociados siempre a un restaurante. 
  - No se concibe, a nivel API, la consulta de un menú fuera de la consulta de un restaurante.
- **Realización de pedidos:** Facilitar la creación de pedidos seleccionando platos del menú de un restaurante.
- **Gestión de pedidos:** Permitir la cancelación o modificación de pedidos antes de su preparación o confirmación.
- **Seguimiento de pedidos:** Proveer un sistema de seguimiento en tiempo real del estado del pedido.
- **Registro de pagos:** Integrar la funcionalidad para registrar y gestionar el pago de los pedidos realizados.

### Funcionalidades para Restaurantes
- **Gestión de menú:** Permitir a los restaurantes añadir, modificar y eliminar platos de su menú.
- **Control de disponibilidad:** Actualizar el estado de cada plato (disponible o agotado) en función del stock y la demanda.
- **Administración de pedidos:** Confirmar, preparar y actualizar el estado de los pedidos recibidos a través de la plataforma.

Para solucionar este ejercicio, se recomienda seguir los siguientes pasos:
1. **Identificar los recursos principales**: Analiza el enunciado y determina sobre qué recursos tiene sentido ejecutar operaciones.
2. **Definir los endpoints**: Crea una lista de endpoints que representen las operaciones que se pueden realizar sobre los recursos identificados. Para cada endpoint, indica el método HTTP que se utilizará y los parámetros necesarios (path params) u opcionales (query params), así como el cuerpo de la petición y la respuesta esperada.

Si lo deseas, puedes utilizar el siguiente formato para tu solución:

(Los path params, al ser obligatorios, se pueden incluir directamente en el endpoint, mientras que los query params se pueden indicar como opcionales)

| Método Http       | Endpoint                                              | Query Params         | Cuerpo JSON de la petición                                              | Respuesta JSON de la petición                                                                                                        | Códigos HTTP de respuesta posibles                  |
|-------------------|-------------------------------------------------------|----------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------| 
| -- USERS --       | -- USERS --                                           | -- USERS --          | -- USERS --                                                             | -- USERS --                                                                                                                          | -- USERS --                                         |
| GET               | /restaurants                                          | location, type, open |                                                                         | `{ "restaurants": [{ "restaurant-id": 1, "name": "Can Mauri"}, ...] }`                                                               | 200 Ok <br/>400 Not Found                           |
| GET               | /restaurants/{restaurantId}/menus/{menuId}            |                      |                                                                         | `{ "menu": [{ "menu-id": 1, "name": "Galtas", "price": 16,99, "available": true }, ...]}`                                            | 200 Ok <br/>404 Not Found                           |
| POST              | /restaurants/{restaurantId}/orders                    |                      | `{ "order": [{ "menu-id": 1, quanity: 2 }, ...]}`                       | `{ "order-id": 1, "restaurant-id": 1, "user-id": 1, "order": [{ "menu-id": 1, quanity: 2 }, ...], "state": "waiting_confirmation" }` | 201 Created <br/>404 Not Found <br/>400 Bad Request |
| GET               | /restaurants/{restaurantId}/orders/{orderId}          |                      |                                                                         | `{ "order-id": 1, "rider-id": 1, "state": "incoming", "location": "carrer de latorre 80" }`                                          | 200 Ok <br/>404 Not Found                           |
| POST              | /restaurants/{restaurantId}/orders/{orderId}/payments |                      | `{ "payment-method": "visa", "quantity": 14,90 }`                       | `{ "order-id": 1, "payment-method": "visa", "quantity": 14,90 }`                                                                     | 200 Ok <br/>404 Not Found <br/>400 Bad Request      |
| -- RESTAURANTS -- | -- RESTAURANTS --                                     | -- RESTAURANTS --    | -- RESTAURANTS --                                                       | -- RESTAURANTS --                                                                                                                    | -- RESTAURANTS --                                   |
| POST              | /restaurants/{restaurantId}/menus/                    |                      | `{ "name": "Pollo con arroz", "price": 10,99, "available": true }`      | `{ "restaurant-id": 1,"menu-id": 2, "name": "Pollo con arroz", "price": 10,99, "available": true }`                                  | 201 Created <br/>404 Not Found <br/>400 Bad Request |
| PATCH             | /restaurants/{restaurantId}/menus/{menuId}            |                      | `{ "price": 11,99, "available": false }`                                | `{ "restaurant-id": 1,"menu-id": 2, "name": "Pollo con arroz", "price": 11,99, "available": false }`                                 | 200 Ok <br/>404 Not Found <br/>400 Bad Request      |
| DELETE            | /restaurants/{restaurantId}/menus/{menuId}            |                      |                                                                         | `{ "message": "Menu deleted succesfully" }`                                                                                          | 200 Ok <br/>404 Not Found                           | 
| -- BOTH --        | -- BOTH --                                            | -- BOTH --           | -- BOTH --                                                              | -- BOTH --                                                                                                                           | -- BOTH --                                          |
| PATCH             | /restaurants/{restaurantId}/orders/{orderId}          |                      | `{ "order": [{ "menu-id": 1, quanity: 1 }, ...], "state": "cancelled"}` | `{ "order-id": 1, "restaurant-id": 1, "user-id": 1, "order": [{ "menu-id": 1, quanity: 1 }, ...], "state": "cancelled" }`            | 200 Ok <br/>404 Not Found <br/>400 Bad Request      |