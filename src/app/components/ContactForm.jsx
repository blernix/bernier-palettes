'use client';

import { useState, useMemo, useEffect } from 'react'; // 1. Importer useEffect
import emailjs from '@emailjs/browser';
import { productsDetails } from '@/app/data/products';
import Modal from './Modal';
import Link from 'next/link';
import { Send, Check, Loader2, XCircle, CheckCircle2 } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [policyAccepted, setPolicyAccepted] = useState(false);

  // 2. On enrichit la liste des sujets avec les services
  const subjectOptions = useMemo(() => {
    const serviceSubjects = [
      'Demande concernant : Achat de palettes',
      'Demande concernant : Tournée de collecte de palettes',
      'Demande concernant : Broyage et recyclage',
    ];
    const productSubjects = productsDetails.map(p => `Devis pour : ${p.title}`);
    
    // On utilise un Set pour éviter les doublons si un sujet initial est aussi dans la liste
    const options = new Set([
      ...serviceSubjects,
      ...productSubjects,
    ]);

    if (initialSubject) {
      options.add(initialSubject);
    }
    options.add("Demande d'information générale");
    return Array.from(options);
  }, [initialSubject]);

  const validate = (data = formData, policy = policyAccepted) => {
    const newErrors = {};
    if (!data.name) newErrors.name = 'Le nom est requis.';
    if (!data.email) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { // Regex plus stricte
      newErrors.email = "Le format de l'email est invalide.";
    }
    if (!data.subject) newErrors.subject = 'Le sujet est requis.';
    if (!data.message) newErrors.message = 'Le message est requis.';
    if (!policy) newErrors.policy = 'Vous devez accepter la politique de confidentialité.';
    return newErrors;
  };

  // 3. Mise en place de la validation en temps réel
  useEffect(() => {
    // Cette fonction sera appelée à chaque fois que l'utilisateur tape quelque chose.
    const validationErrors = validate(formData, policyAccepted);
    const touchedErrors = {};
    // On ne montre les erreurs que pour les champs que l'utilisateur a "touchés"
    Object.keys(touched).forEach((key) => {
      if (validationErrors[key]) {
        touchedErrors[key] = validationErrors[key];
      }
    });
    setErrors(touchedErrors);
  }, [formData, policyAccepted, touched]);


  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setPolicyAccepted(checked);
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched({ ...touched, [id]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    // On marque tous les champs comme "touchés" pour afficher toutes les erreurs
    setTouched({ name: true, email: true, subject: true, message: true, policy: true });
    
    if (Object.keys(validationErrors).length === 0) {
      setSubmitStatus(null);
      setIsConfirmationModalOpen(true);
    }
  };
  
  // ... (le reste du code reste identique)
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
       setFormData(initialFormData);
       setPolicyAccepted(false); 
       setTouched({});
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
          <h3 className="text-2xl font-bold text-gray-800 mb-6" id="form-title">Envoyez-nous un message</h3>
          <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-labelledby="form-title">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom <span aria-hidden="true" className="text-red-500">*</span></label>
              <input
                type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur}
                placeholder="Votre nom"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.name && errors.name ? 'border-red-500 shake' : touched.name && !errors.name ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`}
              />
              {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1" aria-live="polite">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span aria-hidden="true" className="text-red-500">*</span></label>
              <input
                type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
                placeholder="votre@email.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.email && errors.email ? 'border-red-500 shake' : touched.email && !errors.email ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1" aria-live="polite">{errors.email}</p>}
            </div>
    
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet <span aria-hidden="true" className="text-red-500">*</span></label>
              <select
                id="subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!errors.subject}
                aria-describedby="subject-error"
                className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.subject && errors.subject ? 'border-red-500 shake' : touched.subject && !errors.subject ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`}
              >
                <option value="" disabled>-- Choisissez un sujet --</option>
                {subjectOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              {errors.subject && <p id="subject-error" className="text-red-500 text-xs mt-1" aria-live="polite">{errors.subject}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span aria-hidden="true" className="text-red-500">*</span></label>
              <textarea
                id="message" value={formData.message} onChange={handleChange} onBlur={handleBlur}
                rows="5" placeholder="Votre message..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                className={`w-full bg-[#F8F5F1] border rounded-md p-3 transition-colors duration-200 ${touched.message && errors.message ? 'border-red-500 shake' : touched.message && !errors.message ? 'border-green-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#A4612D] focus:border-[#A4612D]`}
              ></textarea>
              {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1" aria-live="polite">{errors.message}</p>}
            </div>
    
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="policy" name="policy" type="checkbox"
                  checked={policyAccepted} onChange={handleChange} onBlur={handleBlur}
                  aria-required="true"
                  aria-describedby="policy-error"
                  className={`h-4 w-4 rounded border-gray-300 text-[#A4612D] focus:ring-[#A4612D] ${touched.policy && errors.policy ? 'border-red-500' : ''}`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="policy" className="text-gray-600">
                  En cochant cette case, j'accepte la{' '}
                  <Link href="/politique-de-confidentialite" target="_blank" className="font-medium text-[#A4612D] hover:underline">
                    politique de confidentialité
                  </Link>
                  {' '}du site. <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                {errors.policy && <p id="policy-error" className="text-red-500 text-xs mt-1" aria-live="polite">{errors.policy}</p>}
              </div>
            </div>
            
            <div className='flex justify-center'>
              <button type="submit" className="bg-[#6B4F4F] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
                Envoyer
              </button>
            </div>
          </form>
    
          <Modal isOpen={isConfirmationModalOpen} onClose={handleCloseModal} title={!submitStatus ? (isEditingInModal ? 'Modifier votre message' : 'Récapitulatif de votre message') : ''}>
            {!submitStatus ? (
              isEditingInModal ? (
                // --- VUE ÉDITION ---
                <div>
                  <div className="space-y-4">
                    <div><label htmlFor="modal-email" className="block text-xs font-medium text-gray-600">Email</label><input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-100 border-gray-300 rounded-md p-2 mt-1"/></div>
                    <div><label htmlFor="modal-subject" className="block text-xs font-medium text-gray-600">Sujet</label><select id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-gray-100 border-gray-300 rounded-md p-2 mt-1">{subjectOptions.map(option => <option key={option} value={option}>{option}</option>)}</select></div>
                    <div><label htmlFor="modal-message" className="block text-xs font-medium text-gray-600">Message</label><textarea id="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-100 border-gray-300 rounded-md p-2 mt-1"></textarea></div>
                  </div>
                  <div className="mt-6 flex justify-end"><button onClick={() => setIsEditingInModal(false)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2"><Check size={16} />Valider les modifications</button></div>
                </div>
              ) : (
                // --- VUE RÉCAPITULATIF ---
                <div>
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
              <div className="text-center py-8" role="alert" aria-live="assertive">
                <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-gray-800 mt-4">Message envoyé !</h3>
                <p className="text-gray-600 mt-2">Merci. Nous vous répondrons dans les plus brefs délais.</p>
                <button onClick={handleCloseModal} className="mt-6 bg-[#6B4F4F] text-white font-bold py-2 px-6 rounded-md">Fermer</button>
              </div>
            ) : (
              // --- VUE ERREUR ---
              <div className="text-center py-8" role="alert" aria-live="assertive">
                <XCircle className="mx-auto h-16 w-16 text-red-500" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-gray-800 mt-4">Une erreur est survenue</h3>
                <p className="text-gray-600 mt-2">Veuillez réessayer. Si le problème persiste, contactez-nous directement.</p>
                <button onClick={() => setSubmitStatus(null)} className="mt-6 bg-[#6B4F4F] text-white font-bold py-2 px-6 rounded-md">Réessayer</button>
              </div>
            )}
          </Modal>
        </div>
      );
}

