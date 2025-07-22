# True North Travel Agency 🧭

**Links al Sitio:**  
https://iglionti.github.io/Lionti-EntregaFinal/  
https://chipper-shortbread-827af2.netlify.app/

## 🌟 Descripción General del Proyecto

True North es el sitio web de una agencia de viajes premium que ofrece experiencias exclusivas e inolvidables en los destinos más extraordinarios del planeta.
El sitio está especializado en turismo polar y viajes de lujo, brindando a los usuarios una experiencia de navegación elegante, accesible y optimizada para SEO.

## 🛠️ Tecnologías Utilizadas

### Tecnologías de Frontend
- **HTML5**: Marcado semántico con funciones de accesibilidad ARIA
- **CSS3**: Estilos modernos con diseños Flexbox y Grid
- **SCSS/Sass**: Arquitectura modular de estilos con metodología BEM
- **JavaScript (ES6+)**: JavaScript puro para formularios e interacciones
- **Bootstrap 5.3.6**: Framework responsive para diseño y componentes

### Librerías Externas y Servicios
- **Bootstrap Icons**: Biblioteca de íconos para la interfaz
- **Google Fonts**:  
  - Open Sans (300, 400, 600) - Texto general  
  - Playfair Display (400, 700) - Títulos y texto decorativo  
- **Recursos CDN**: CSS/JS de Bootstrap, Google Fonts, Bootstrap Icons

## 🔍 Optimización SEO y Funcionalidades

### SEO Técnico
- **Meta Tags**: Títulos, descripciones, keywords y autor completos
- **Open Graph**: Optimización para compartir en redes sociales
- **Twitter Cards**: Previsualizaciones sociales mejoradas
- **URLs Canónicas**: Prevención de contenido duplicado
- **Robots.txt**: Instrucciones para motores de búsqueda
- **Mapa del Sitio XML**: Estructura completa del sitio
- **Datos Estructurados**: Implementación de Schema.org con JSON-LD

### Implementaciones SEO
- **Schema de Agencia de Viajes**: Información de negocio y servicios
- **Schema de Página de Contacto**: Optimización de información de contacto
- **Schema de Página de Colección**: Listado de destinos
- **Schema de Destino Turístico**: Datos específicos de ubicación
- **HTML Semántico**: Jerarquía correcta de encabezados (H1-H3)
- **Etiquetas ARIA**: Mejora en accesibilidad y SEO
- **Optimización de Imágenes**: Texto alternativo, atributos de tamaño

### Optimización de Rendimiento
- **Formatos de Imagen**: WebP con fallback a PNG mediante `<picture>`
- **Carga de Tipografías**: `display=swap` para mejor rendimiento
- **Recursos Externos**: Uso optimizado de CDNs
- **Estabilidad Visual**: Dimensiones definidas para evitar CLS

## 📁 Estructura del Proyecto
Lionti-EntregaFinal/
├── index.html                 # Página principal
├── robots.txt                 # Instrucciones para motores de búsqueda
├── sitemap.xml                # Mapa del sitio XML
├── .gitignore                 # Reglas de exclusión Git
│
├── pages/                     # Páginas secundarias
│   ├── about.html             # Página sobre nosotros
│   ├── contact.html           # Formulario de contacto
│   ├── places.html            # Muestra de destinos
│   └── tours.html             # Paquetes turísticos
│
├── css/                       # CSS compilado
│   ├── styles.css             # Hoja de estilos principal
│   └── styles.css.map         # Mapa de fuentes para debugging
│
├── scss/                      # Archivos fuente SCSS
│   ├── styles.scss            # Entrada principal SCSS
│   ├── abstracts/             # Utilidades SCSS
│   │   ├── _variables.scss    # Variables globales
│   │   ├── _mixins.scss       # Mixins reutilizables
│   │   └── _utilities.scss    # Clases utilitarias
│   ├── base/                  # Estilos base
│   │   ├── _base.scss         # Estilos base para elementos
│   │   └── _animations.scss   # Animaciones CSS
│   ├── layout/                # Componentes de layout
│   │   ├── _header.scss       # Estilos de encabezado
│   │   └── _footer.scss       # Estilos de pie de página
│   └── pages/                 # Estilos específicos de páginas
│       ├── _places.scss       # Estilos de lugares
│       └── _contact.scss      # Estilos de contacto
│
├── js/                        # Archivos JavaScript
│   └── main.js                # Funcionalidad principal
│
└── img/                       # Recursos gráficos
    ├── png/                   # Imágenes en formato PNG
    │   ├── logo.png
    │   ├── africa.png
    │   ├── asia.png
    │   ├── europe.png
    │   ├── latinamerica.png
    │   ├── northamerica.png
    │   ├── paisaje.jpg
    │   ├── venecia.png
    │   ├── team1.png
    │   ├── team2.png
    │   └── team3.png
    └── webp/                  # Imágenes optimizadas en WebP
        └── [mismos archivos que PNG pero en formato WebP]
