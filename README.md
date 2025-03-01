# Comments App

## Alcance del desafio

Este proyecto es una aplicación de comentarios que permite a los usuarios
agregar, ver, editar y eliminar comentarios. Los siguientes desafíos fueron
completados:

- Creación de un formulario de comentarios donde los usuarios pueden ingresar su
  nombre, correo electrónico y comentario.
- Validación de datos del formulario usando **Zod** para asegurar que los
  comentarios cumplen con los requisitos de longitud y formato.
- Estilización de los componentes utilizando **Styled-components** para crear
  una experiencia de usuario agradable y responsiva.
- Implementación de un CRUD completo para gestionar los comentarios, permitiendo
  agregar, ver, editar y eliminar comentarios en la interfaz de usuario.

---

## Decisiones tomadas

- **Uso de Zod para la validación de formularios**: Elegi Zod para validar los
  datos del formulario debido a su simplicidad y seguridad en la definición de
  esquemas.

- **Styled-components para la estilización**: Usé Styled-components para
  gestionar los estilos dentro de los componentes, mejorando la organización y
  personalización. Creé componentes reutilizables como botones (`Button`),
  modales (`Modal`) y tipografía (`Typography`), lo que asegura consistencia en
  el diseño y facilita la reutilización sin duplicar estilos.

- **Arquitectura limpia**: Opté por una arquitectura limpia para organizar el
  proyecto de manera modular y escalable. Facilita la separación de
  responsabilidades, mejora la mantenibilidad y permite cambios o ampliaciones
  sin afectar otras partes del sistema, favoreciendo la colaboración en equipo y
  la evolución a largo plazo.

- **Patrón Mapper**: Utilicé el patrón Mapper para transformar datos entre
  diferentes capas de la aplicación, separando la lógica de conversión y
  mejorando la mantenibilidad del código.

- **Patrón Adaptador**: Implementé el patrón Adaptador para permitir que
  interfaces incompatibles puedan trabajar juntas, facilitando la integración de
  diferentes módulos o servicios sin cambiar su implementación interna.

- **Zustand y localStorage**: Utilicé Zustand para la gestión del estado de la
  aplicación, lo que permite un manejo eficiente y centralizado del estado.
  Además, almacené la data en **localStorage** para persistir la información
  entre sesiones, mejorando la experiencia del usuario al mantener el estado
  incluso después de cerrar y abrir la aplicación.

---

## Herramientas utilizadas

[![My Skills](https://skillicons.dev/icons?i=typescript,next,styledcomponents,css,figma)](https://skillicons.dev)

[Ir al diseño](https://www.figma.com/design/R8fBh9FfjCXmTLlob6fKPT/Untitled?node-id=0-1&t=bIeF8fo9qFDXOA4T-1)

---

## Uso de la aplicación

1. **Clonar el resposito:**

```bash
git clone https://github.com/justin-A18/comments-app.git
```

2. **Acceder a la carpeta del proyecto:**

```bash
cd comments-app
```

3. **Instalar las dependencias:**

```bash
  pnpm install
```

4. **Crear un archivo `.env` basado en el `.env.template`**

   - Copia el archivo .env.template y renómbralo a .env. Esto se puede hacer
     manualmente o mediante un comando en la terminal.

   ```
     cp .env.template .env
   ```

5. **Configura el archivo .env:**
   - Busca la línea que contiene NEXT_PUBLIC_URL_BASE
   - agrega la URL: https://jsonplaceholder.typicode.com
   ```
     NEXT_PUBLIC_URL_BASE=https://jsonplaceholder.typicode.com
   ```
6. **Ejecuta la aplicación:**

```bash
pnpm dev
```

7. **Abrir el navegador de tu preferencia y escribir en un nueva pestaña
   `http://localhost:3000`**

---

## ¿Que enfoque usa esta _App Web_?

Esta _App Web_ es una **Single Page Application(_SPA_)** o **Aplicación de una
Sola Página** que usa principios de arquitectura limpia.

## Estructura de carpetas y archivos:

| Carpeta                      | Descripción                                                                                                                                                                               | Formato para nombrar archivo                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `/src`                       | Contiene toda el código de la app para producción(casos de uso, UI, configuraciones, etc)                                                                                                 | N/A                                          |
| `/config`                    | Contiene archivos de configuración global para nuestra app(configuraciones de **APIs**, adaptadores, helpers, etc)                                                                        | N/A                                          |
| `/config/adapter`            | Contiene adaptadores que son piezas de código de librerías externas que adapta funcionalidades para que sean flexibles al cambio                                                          | `/nombre-contexto/nombre-modulo.adapter.ts`  |
| `/config/helpers`            | Contiene funciones que realizan tareas comunes y que pueden ser reutilizadas(por ejemplo, formatear fechas, montos, calculos, etc)                                                        | `nombre-descriptivo.ts`                      |
| `/core`                      | Contiene la lógica de negocio de nuestra app, como las entidades y casos de uso (esta lógica es independiente a cualquier framework frontend)                                             | N/A                                          |
| `/core/entities`             | Contiene las _"entidades"_ de nuestra app (objeto que contiene la lógica de negocio o datos que usaremos)                                                                                 | `nombreentidad.entity.ts`                    |
| `/core/use-cases`            | Contiene los _"casos de uso"_ de nuestra app(un caso de uso es una operación específica que un usuario puede realizar. Ejemplo: _"Iniciar sesión", "Registrarse", "Crear producto", etc_) | `/nombre-modulo/nombre-caso-uso.use-case.ts` |
| `/infrastructure`            | Es responsable de implementar los detalles de cómo nuestra app interactúa con las **APIs**, etc.                                                                                          | N/A                                          |
| `/infrastructure/interfaces` | Contiene las interfaces que definen cómo nuestra app interactúa con los sistemas externos (**APIs**, etc)                                                                                 | `nombre-descriptivo.response.ts`             |
| `/infrastructure/mappers`    | Son piezas de código que convierten datos de un formato a otro.                                                                                                                           | `nombreentidad.mapper.ts`                    |
| `/app`                       | Contiene código relacionado con la interfaz de usuario de nuestra aplicación.                                                                                                             | N/A                                          |
| `/app/_components`           | Contiene los componentes de React que se utilizan en nuestra aplicación.                                                                                                                  | `nombre-descriptivo/NombreComponente.tsx`    |
| `/app/_hooks`                | Contiene los hooks personalizados de React que se utilizan en nuestra aplicación.                                                                                                         | `modulo/useNombreHook.tsx`                   |
| `/app/_providers`            | Contiene los proveedores de contexto específicos de la aplicación, utilizados para manejar el estado global y otros contextos compartidos.                                                | N/A                                          |
| `/app/_schemas`              | Contiene los esquemas de validación y estructuras de datos utilizados en la aplicación, como los esquemas de Zod o cualquier otra librería de validación.                                 | `NombreSchema.ts`                            |
| `/app/_lib`                  | Contiene las bibliotecas que se usan en toda la aplicación.                                                                                                                               | N/A                                          |

---

## Nomenclatura de funcionalidades archivos de la Arquitectura Frontend.

### Adaptadores - **`/adapters`**

Se usa el patrón adaptador con una clase que puede contenedor métodos comunes o
estáticos dependiendo de nuestros requerimientos.

#### Ejemplo de patrón adaptador:

```ts
export class NombreAdapter {
  // Metodos estaticos o comunes...

  public static metodo{
    // Logica de paquete o libreria externa

    return valor;
  }
}
```

---

### Helpers - **`/helpers`**

Son clases con métodos estáticos.

#### Ejemplo de helper `formatter.ts`:

```ts
export class Formatter {
	public static currency(value: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(value);
	}
}
```

---

### Entidades - **`/entities`**

Son interfaces que tienen en común un contexto(o pertenecen a un módulo)

#### Ejemplo de entity `movie.entity.ts`:

```ts
export interface Movie {
	id: number;
	title: string;
	description: string;
	releaseDate: Date;
	rating: number;
	poster: string;
	backdrop: string;
}

export interface FullMovie extends Movie {
	genres: string[];
	duration: number;
	budget: number;
	originalTitle: string;
	productionCompanies: string[];
}
```

---

### Casos de usos - **`/use-cases`**

Son funciones que se encargan de consumir un endpoint de una API que
obligatoriamente reciben un adaptador para peticiones http y si requerimos un
parámetro extra tambien podemos agregarlos.

#### Ejemplo de caso de uso `movie/get-by-id.use-case.ts`:

```ts
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { FullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
	fetcher: HttpAdapter,
	movieId: number,
): Promise<FullMovie> => {
	try {
		const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
		const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
		return fullMovie;
	} catch (error) {
		throw new Error(`Cannot get movie by id: ${movieId}`);
	}
};
```

---

### Interfaces - **`/interfaces`**

Son interfaces que hacen un contrato con las respuestas de endpoints de
**APIs**.

#### Ejemplo de interfaz `movie-db.response.ts`:

```ts
export interface MovieDBMovie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
```

---

### Mappers - **`/mappers`**

En este caso el patrón mapper usa clases con métodos estáticos para transformar
la estructura de los datos y solo tener los datos que utilizaremos en la UI.

#### Ejemplo de mapper `movie.mapper.ts`:

```ts
import { FullMovie, Movie } from '../../core/entities/movie.entity';
import type { MovieDBMovie, Result } from '../interfaces/movie-db.responses';

export class MovieMapper {
	static fromMovieDBResultToEntity(result: Result): Movie {
		return {
			id: result.id,
			title: result.title,
			description: result.overview,
			releaseDate: new Date(result.release_date),
			rating: result.vote_average,
			poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
		};
	}

	static fromMovieDBToEntity(movie: MovieDBMovie): FullMovie {
		return {
			id: movie.id,
			title: movie.title,
			description: movie.overview,
			releaseDate: new Date(movie.release_date),
			rating: movie.vote_average,
			poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			genres: movie.genres.map((genre) => genre.name),
			duration: movie.runtime,
			budget: movie.budget,
			originalTitle: movie.original_title,
			productionCompanies: movie.production_companies.map(
				(company) => company.name,
			),
		};
	}
}
```
