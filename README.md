# Guía para Usar este Proyecto

## Pasos para Ejecutar el Proyecto

1. **Instalar las dependencias**:
   ```
   npm install
   ```

2. **Correr el servidor**:
   ```
   node server.js
   ```

3. **Usar Postman** para probar los diferentes endpoints.

## Endpoints Disponibles

### 1. Registro de Usuario (POST `/users/register`)
**URL**: `http://localhost:3000/users/register`

- **Método**: POST
- **Cuerpo de la Solicitud** (JSON):
  ```json
  {
    "nombre": "german",
    "email": "german@gmail.com",
    "password": "asdfasdf",
    "rol": "user"
  }
  ```
- **Descripción**: Registra un nuevo usuario en el sistema.

![Registro de Usuario](image-1.png)

### 2. Inicio de Sesión (POST `/users/login`)
**URL**: `http://localhost:3000/users/login`

- **Método**: POST
- **Cuerpo de la Solicitud** (JSON):
  ```json
  {
    "email": "german@gmail.com",
    "password": "asdfasdf"
  }
  ```
- **Descripción**: Autentica un usuario y devuelve un token JWT. Copia el token para usarlo en las siguientes solicitudes.

![Inicio de Sesión](image.png)

### 3. Crear un Producto (POST `/api/productos`)
**URL**: `http://localhost:3000/api/productos`

- **Método**: POST
- **Requiere Autorización**: Sí, solo administradores.
- **Headers**: `Authorization: Bearer <token_admin>`
- **Cuerpo de la Solicitud** (JSON):
  ```json
  {
    "nombre": "Laptop HP",
    "categoria": "tecnología",
    "precio": 1600,
    "stock": 20
  }
  ```
- **Descripción**: Añade un nuevo producto al inventario.

![Añadir Producto](image-2.png)

### 4. Obtener Todos los Productos (GET `/api/productos`)
**URL**: `http://localhost:3000/api/productos`

- **Método**: GET
- **Descripción**: Obtiene la lista de todos los productos disponibles en la base de datos.

![Obtener Productos](image-5.png)

### 5. Obtener Productos por Categoría (GET `/api/productos?categoria=categoria`)
**URL**: `http://localhost:3000/api/productos?categoria=Ropa`

- **Método**: GET
- **Descripción**: Obtiene los productos que pertenecen a una categoría específica.

![Obtener Productos por Categoría](image-6.png)

### 6. Editar un Producto (PUT `/api/productos/:id`)
**URL**: `http://localhost:3000/api/productos/:id`

- **Método**: PUT
- **Requiere Autorización**: Sí, solo administradores.
- **Headers**: `Authorization: Bearer <token_admin>`
- **Cuerpo de la Solicitud** (JSON):
  ```json
  {
    "nombre": "Laptop HP",
    "categoria": "tecnología",
    "precio": 1700,
    "stock": 15
  }
  ```
- **Descripción**: Edita un producto existente especificando su ID.

![Editar Producto](image-3.png)

### 7. Eliminar un Producto (DELETE `/api/productos/:id`)
**URL**: `http://localhost:3000/api/productos/:id`

- **Método**: DELETE
- **Requiere Autorización**: Sí, solo administradores.
- **Headers**: `Authorization: Bearer <token_admin>`
- **Descripción**: Elimina un producto del inventario especificando su ID.

![Eliminar Producto](image-4.png)

## Notas Adicionales
- Para los métodos protegidos (crear, editar, eliminar productos), asegúrate de incluir el token de autorización en los headers para autenticarte como administrador.
- Utiliza Postman para probar cada uno de los endpoints, siguiendo los ejemplos proporcionados.

Si tienes alguna duda sobre cómo usar el proyecto, no dudes en consultar los ejemplos visuales y las instrucciones detalladas.

