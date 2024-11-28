// src/App.jsx
import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
import { ClickCounter } from "./components/ClickCounter"  // Importar el contador de clics

export function App() {
  return (
    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20">
      {/* Header de la página */}
      <Header />

      {/* Contenedor principal con dos secciones: artículo principal y artículos secundarios */}
      <div className="md:flex md:gap-8 md:mb-10">
        <MainArticle />
        <NewContainer />
      </div>

      {/* Sección de artículos adicionales */}
      <ArticlesContainer />

      {/* Contador de clics añadido debajo de los artículos */}
      <div className="mt-10 max-w-sm mx-auto">
        <ClickCounter />
      </div>
    </main>
  )
}
