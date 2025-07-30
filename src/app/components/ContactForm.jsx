'use client';

import { useState, useMemo } from 'react';
import emailjs from '@emailjs/browser'; // 1. Importer la librairie
import { productsDetails } from '@/app/data/products'; // Chemin corrigé
import Modal from './Modal';
import { Send, Check, Loader2, XCircle, CheckCircle2 } from 'lucide-react'; // 2. Importer de nouvelles icônes

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm({ initialSubject = '' }) {
  const [formData, setFormData] = useState({ ...initialFormData, subject: initialSubject });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isEditingInModal, setIsEditingInModal] = useState(false);

  // 3. Nouveaux états pour gérer l'envoi
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // Peut être 'success' ou 'error'

  const subjectOptions = useMemo(() => {
    const options = new Set(productsDetails.map(p => `Devis pour : ${p.title}`));
    if (initialSubject) {
      options.add(initialSubject);
    }
    options.add("Demande d'information générale");
    return Array.from(options);
  }, [initialSubject]);

  const validate = () => {
    // ... (fonction de validation inchangée)
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Le nom est requis.';
    if (!formData.email) newErrors.email = "L'email est requis.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Le format de l'email est invalide.";
    if (!formData.subject) newErrors.subject = 'Le sujet est requis.';
    if (!formData.message) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched({ ...touched, [id]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitStatus(null); // Réinitialiser le statut avant d'ouvrir
      setIsConfirmationModalOpen(true);
    }
  };

  // 4. Logique d'envoi avec EmailJS
  const handleFinalSend = () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setSubmitStatus('success');
       setIsSubmitting(false);
       setFormData(initialFormData); // Réinitialiser le formulaire
    }, (err) => {
       console.log('FAILED...', err);
       setSubmitStatus('error');
       setIsSubmitting(false);
    });
  };

  const handleCloseModal = () => {
    setIsConfirmationModalOpen(false);
    setIsEditingInModal(false);
  }

  const shakeAnimation = `
    @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
    .shake { animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; }
  `;

  return (
    <div>
      <style>{shakeAnimation}</style>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* --- Champs du formulaire (inchangés) --- */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Votre nom" className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.name && errors.name ? 'border-red-500 shake' : touched.name && !errors.name ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`} />
          {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="votre@email.com" className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.email && errors.email ? 'border-red-500 shake' : touched.email && !errors.email ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`} />
          {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
          <select id="subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.subject && errors.subject ? 'border-red-500 shake' : touched.subject && !errors.subject ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`}>
            <option value="" disabled>-- Choisissez un sujet --</option>
            {subjectOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          {touched.subject && errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows="5" placeholder="Votre message..." className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.message && errors.message ? 'border-red-500 shake' : touched.message && !errors.message ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`}></textarea>
          {touched.message && errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <div className='flex justify-center'>
          <button type="submit" className="bg-[#6B4F4F] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
            Envoyer
          </button>
        </div>
      </form>

      <Modal isOpen={isConfirmationModalOpen} onClose={handleCloseModal}>
        {/* --- 5. MODALE MISE À JOUR POUR GÉRER LES ÉTATS D'ENVOI --- */}
        {!submitStatus ? (
          // --- VUE PAR DÉFAUT (RÉCAP/ÉDITION) ---
          isEditingInModal ? (
            // Vue édition
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Modifier votre message</h3>
              <div className="space-y-4">
                <div><label htmlFor="email" className="block text-xs font-medium text-gray-600">Email</label><input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-100 border-gray-300 rounded-md p-2 mt-1"/></div>
                <div><label htmlFor="subject" className="block text-xs font-medium text-gray-600">Sujet</label><select id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-100 border-gray-300 rounded-md p-2 mt-1">{subjectOptions.map(option => <option key={option} value={option}>{option}</option>)}</select></div>
                <div><label htmlFor="message" className="block text-xs font-medium text-gray-600">Message</label><textarea id="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-100 border-gray-300 rounded-md p-2 mt-1"></textarea></div>
              </div>
              <div className="mt-6 flex justify-end"><button onClick={() => setIsEditingInModal(false)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2"><Check size={16} />Valider les modifications</button></div>
            </div>
          ) : (
            // Vue récapitulatif
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Récapitulatif de votre message</h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-gray-50 rounded-md"><span className="font-semibold text-gray-500">Email</span><p className="text-gray-800">{formData.email}</p></div>
                <div className="p-3 bg-gray-50 rounded-md"><span className="font-semibold text-gray-500">Sujet</span><p className="text-gray-800">{formData.subject}</p></div>
                <div className="p-3 bg-gray-50 rounded-md"><span className="font-semibold text-gray-500">Message</span><div className="mt-1 max-h-40 overflow-y-auto pr-2"><p className="text-gray-800 whitespace-pre-wrap break-words">{formData.message}</p></div></div>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button onClick={() => setIsEditingInModal(true)} className="text-gray-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-100" disabled={isSubmitting}>Modifier</button>
                <button onClick={handleFinalSend} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2 disabled:bg-green-400" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {isSubmitting ? 'Envoi en cours...' : 'Confirmer et Envoyer'}
                </button>
              </div>
            </div>
          )
        ) : submitStatus === 'success' ? (
          // --- VUE SUCCÈS ---
          <div className="text-center py-8">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Message envoyé !</h3>
            <p className="text-gray-600 mt-2">Merci. Nous vous répondrons dans les plus brefs délais.</p>
            <button onClick={handleCloseModal} className="mt-6 bg-[#6B4F4F] text-white font-bold py-2 px-6 rounded-md">Fermer</button>
          </div>
        ) : (
          // --- VUE ERREUR ---
          <div className="text-center py-8">
            <XCircle className="mx-auto h-16 w-16 text-red-500" />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Une erreur est survenue</h3>
            <p className="text-gray-600 mt-2">Veuillez réessayer. Si le problème persiste, contactez-nous directement.</p>
            <button onClick={() => setSubmitStatus(null)} className="mt-6 bg-[#6B4F4F] text-white font-bold py-2 px-6 rounded-md">Réessayer</button>
          </div>
        )}
      </Modal>
    </div>
  );
}