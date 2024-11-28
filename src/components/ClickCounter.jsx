// src/components/ClickCounter.jsx
import React, { useState } from 'react'

export function ClickCounter() {
  const [clicks, setClicks] = useState(0)

  // Incrementar el contador
  const handleClick = () => {
    setClicks(clicks + 1)
  }

  // Reiniciar el contador a 0
  const handleReset = () => {
    setClicks(0)
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md">
      <button 
        onClick={handleClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mb-4">
        ¡Haz clic aquí!
      </button>
      <p className="text-lg">Contador de clics: {clicks}</p>
      
      {/* Botón de reiniciar */}
      <button 
        onClick={handleReset} 
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
        Reiniciar contador
      </button>
    </div>
  )
}
