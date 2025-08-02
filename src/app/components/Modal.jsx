// components/Modal.jsx
'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

// A11Y: On ajoute une prop `title` pour le `aria-labelledby`
export default function Modal({ isOpen, onClose, children, title }) {
  // A11Y: On crée une référence au conteneur de la modale pour le focus trapping
  const modalRef = useRef(null);

  // A11Y & UX: Effet pour bloquer le scroll du body et gérer le focus
  useEffect(() => {
    if (isOpen) {
      // Bloquer le scroll de la page en arrière-plan
      document.body.style.overflow = 'hidden';

      // Gérer le focus
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      // Mettre le focus sur le premier élément quand la modale s'ouvre
      setTimeout(() => firstElement?.focus(), 100); // Léger délai pour la transition

      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
        
        // A11Y: Piège le focus à l'intérieur de la modale
        if (event.key === 'Tab') {
          if (event.shiftKey) { // Shift + Tab (navigation arrière)
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              event.preventDefault();
            }
          } else { // Tab (navigation avant)
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              event.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      // Fonction de nettoyage
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
      onClick={onClose}
      // A11Y: Rôle de dialogue pour annoncer la modale
      role="dialog"
      // A11Y: Indique que la modale est... modale (bloque le contenu derrière)
      aria-modal="true"
      // A11Y: Lie la modale à son titre pour une annonce claire
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
            {/* A11Y: Le titre est maintenant une prop, et on lui donne un ID pour `aria-labelledby` */}
            <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
                {title || 'Fenêtre de dialogue'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-800" aria-label="Fermer la modale">
              <X size={24} />
            </button>
        </div>
        {children}
      </div>
    </div>
  );
}
