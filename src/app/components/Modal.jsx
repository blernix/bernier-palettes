// components/Modal.jsx
'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  // Effet pour fermer la modale avec la touche "Echap"
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center"
      onClick={onClose} // Ferme la modale si on clique sur le fond
    >
      <div 
        className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dans la modale
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}