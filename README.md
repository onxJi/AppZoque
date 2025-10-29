#Proyecto de Aplicacion Movil AppZoque


`app/                          # Punto de entrada, configuración global
core/                         # Módulos reutilizables (network, ui, database, utils)
│
├── core-ui/                  # Componentes Compose comunes (botones, barras, temas)
├── core-network/             # Retrofit, OkHttp, interceptores, manejo de errores
├── core-database/            # Room, DAOs, entities locales
├── core-common/              # Utils, Result wrappers, tipos comunes, constantes
│
features/
│
├── feature-login/            # Módulo independiente de autenticación
├── feature-home/             # Módulo del home
├── feature-profile/          # Módulo de perfil de usuario
│
data/                         # Repositorios, mapeadores, fuentes de datos
│
├── data-network/             # Implementaciones remotas (Retrofit, DTOs)
├── data-database/            # Implementaciones locales (Room)
├── data-repository/          # Implementa interfaces de dominio
│
domain/                       # Lógica de negocio pura
├── models/                   # Entidades del dominio
├── usecases/                 # Casos de uso independientes del framework
`
