Como usar este proyecto

Pasos:

1.- Installar las dependencias: npm install 
2.- Correr el proyecto: node server.js
3.- utilizar postman
-----------------------------------------------------------------------------------------------------------------------------
    metodo POST:
        register:  http://localhost:3000/users/register
                        
                opciones:     Body -> raw -> JSON:
                    {
                    "nombre": "german",
                    "email": "german@gmail.com",
                    "password": "asdfasdf",
                    "rol": "user"
                    }
                ![alt text](image-1.png)


        **********************************************************************************************
        login:  http://localhost:3000/users/login
                    
        opciones:     Body -> raw -> JSON:
                {
                "email": "german@gmail.com",
                "password": "asdfasdf"
                }   
        - obtenemos el token y Copiamos 

        ![alt text](image.png)
        **********************************************************************************************

        Añadir un nuevo producto solo usuarios (ADMIN): http://localhost:3000/product

            opciones: - autorization -> bearToken -> pegamos el token copiado en el login
                        Click en Send y nos retorna todos los productos de la base de dato de la categoria requerida    
                      - Body -> raw -> JSON:
        ![alt text](image-2.png)
-----------------------------------------------------------------------------------------------------------------------------        
    Metodo GET: 
        Obtener poductos: http://localhost:3000/product

        opciones: autorization -> bearToken -> pegamos el token copiado en el login
        Click en Send y nos retorna todos los productos de la base de dato
        ![alt text](image-5.png)
        **********************************************************************************************
        Obtener poductos por categoria: http://localhost:3000/product?categoria=Ropa

        opciones: autorization -> bearToken -> pegamos el token copiado en el login
        Click en Send y nos retorna todos los productos de la base de dato de la categoria requerida
        ![alt text](image-6.png)
----------------------------------------------------------------------------------------------------------------------------       
    metodo PUT Solo usuarios (ADMIN):
        Editar un producto:  http://localhost:3000/product/673e2615e41eb889a2d5151e

                nota: Colocar el ID del producto a Editar   

                opciones: - autorization -> bearToken -> pegamos el token copiado en el login
                            Click en Send y nos retorna todos los productos de la base de dato de la categoria requerida     
                          - Body -> raw -> JSON:
                    {
                    "nombre": "Laptop HP",
                    "categoria": "tecnología",
                    "precio": 1600,
                    "stock": 20
                    }
            ![alt text](image-3.png)   


-----------------------------------------------------------------------------------------------------------------------------
        metodo DELETE Solo usuarios (ADMIN):

        Editar un producto:  http://localhost:3000/product/673e2615e41eb889a2d5151e
                nota: Colocar el ID del producto a eliminar       
                opciones: - autorization -> bearToken -> pegamos el token copiado en el login
                            Click en Send y nos retorna todos los productos de la base de dato de la categoria requerida     
                          - Body -> raw -> JSON:
                    {
                    "nombre": "Laptop HP",
                    "categoria": "tecnología",
                    "precio": 1600,
                    "stock": 20
                    }
            ![alt text](image-4.png)    