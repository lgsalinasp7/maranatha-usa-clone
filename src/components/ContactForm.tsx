"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  prayerRequest: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    prayerRequest: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = (): boolean => {
    const next: FieldErrors = {};
    if (!formData.firstName.trim())
      next.firstName = "Por favor escribe tu nombre.";
    if (!formData.lastName.trim())
      next.lastName = "Por favor escribe tu apellido.";
    if (!formData.phone.trim())
      next.phone = "Por favor escribe tu número de teléfono.";
    if (!formData.email.trim()) {
      next.email = "Por favor escribe tu correo electrónico.";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      next.email = "El correo no tiene un formato válido. Ejemplo: nombre@correo.com";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateStep2 = (): boolean => {
    if (!formData.prayerRequest.trim()) {
      setErrors((prev) => ({
        ...prev,
        prayerRequest: "Por favor cuéntanos tu petición de oración.",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, prayerRequest: undefined }));
    return true;
  };

  const handleNext = () => {
    if (!validateStep1()) return;
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    setIsSubmitting(true);
    setErrors({});
    try {
      // Simular envío (reemplazar por tu API o servicio de formularios)
      await new Promise((r) => setTimeout(r, 1500));
      setIsSuccess(true);
    } catch {
      setErrors({ prayerRequest: "No pudimos enviar. Intenta de nuevo en un momento." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 sm:p-10 animate-in fade-in duration-500">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-mid/20 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-brand-mid"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <h3 className="text-brand-light text-xl sm:text-2xl font-semibold mb-3">
          Blessings
        </h3>
        <p className="text-brand-light/90 text-base sm:text-lg leading-relaxed max-w-md">
          Thank you so much for opening your heart. We will be contacting you in a few minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        <div
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            step >= 1 ? "bg-brand-mid" : "bg-white/20"
          }`}
        />
        <div
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            step >= 2 ? "bg-brand-mid" : "bg-white/20"
          }`}
        />
      </div>

      {step === 1 && (
        <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <p className="text-brand-light/80 text-sm mb-6">
            Paso 1 de 2 — Tu información de contacto
          </p>

          <div className="relative">
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              onBlur={() => {
                if (!formData.firstName.trim() && errors.firstName)
                  setErrors((e) => ({ ...e, firstName: "Por favor escribe tu nombre." }));
              }}
              className="peer w-full bg-white/5 border border-white/20 rounded-xl py-4 px-4 text-brand-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-all duration-200"
              placeholder=" "
              autoComplete="given-name"
            />
            <label
              htmlFor="firstName"
              className="absolute left-4 top-0 -translate-y-1/2 px-1 text-brand-light/70 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-brand-light"
            >
              Nombre
            </label>
            {errors.firstName && (
              <p className="mt-1.5 text-sm text-amber-300/90" role="alert">
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className="peer w-full bg-white/5 border border-white/20 rounded-xl py-4 px-4 text-brand-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-all duration-200"
              placeholder=" "
              autoComplete="family-name"
            />
            <label
              htmlFor="lastName"
              className="absolute left-4 top-0 -translate-y-1/2 px-1 text-brand-light/70 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-brand-light"
            >
              Apellido
            </label>
            {errors.lastName && (
              <p className="mt-1.5 text-sm text-amber-300/90" role="alert">
                {errors.lastName}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="peer w-full bg-white/5 border border-white/20 rounded-xl py-4 px-4 text-brand-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-all duration-200"
              placeholder=" "
              autoComplete="tel"
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-0 -translate-y-1/2 px-1 text-brand-light/70 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-brand-light"
            >
              Teléfono
            </label>
            {errors.phone && (
              <p className="mt-1.5 text-sm text-amber-300/90" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => update("email", e.target.value)}
              className="peer w-full bg-white/5 border border-white/20 rounded-xl py-4 px-4 text-brand-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-all duration-200"
              placeholder=" "
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-0 -translate-y-1/2 px-1 text-brand-light/70 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-brand-light"
            >
              Correo electrónico
            </label>
            {errors.email && (
              <p className="mt-1.5 text-sm text-amber-300/90" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="btn-pill w-full bg-brand-mid text-brand-light py-4 px-6 font-semibold hover:bg-brand-mid/90 transition-all duration-200"
          >
            Siguiente
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <p className="text-brand-light/80 text-sm mb-6">
            Paso 2 de 2 — Tu petición de oración
          </p>

          <div className="relative">
            <textarea
              id="prayerRequest"
              value={formData.prayerRequest}
              onChange={(e) => update("prayerRequest", e.target.value)}
              rows={6}
              className="peer w-full bg-white/5 border border-white/20 rounded-xl py-4 px-4 text-brand-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-all duration-200 resize-y min-h-[140px]"
              placeholder=" "
            />
            <label
              htmlFor="prayerRequest"
              className="absolute left-4 top-4 px-1 text-brand-light/70 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:opacity-0 peer-focus:opacity-100"
            >
              Escribe aquí tu petición de oración...
            </label>
            {errors.prayerRequest && (
              <p className="mt-1.5 text-sm text-amber-300/90" role="alert">
                {errors.prayerRequest}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="btn-pill flex-1 border-2 border-brand-light/50 text-brand-light py-4 px-6 font-medium hover:bg-white/10 transition-all duration-200"
            >
              Atrás
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-pill flex-1 bg-brand-mid text-brand-light py-4 px-6 font-semibold hover:bg-brand-mid/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando…" : "Enviar"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
