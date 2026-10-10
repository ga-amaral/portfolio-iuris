"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/site-content";
import { CheckCircle, AlertCircle } from "lucide-react";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

function validateField(name: string, value: string): string | null {
  switch (name) {
    case "name":
      if (!value.trim()) return "Nome é obrigatório";
      if (value.trim().length < 2) return "Nome deve ter pelo menos 2 caracteres";
      return null;
    case "whatsapp":
      const digits = value.replace(/\D/g, "");
      if (!digits) return "WhatsApp é obrigatório";
      if (digits.length < 10) return "WhatsApp deve ter 10 ou 11 dígitos";
      if (digits.length > 11) return "WhatsApp deve ter 10 ou 11 dígitos";
      return null;
    case "email":
      if (!value.trim()) return "E-mail é obrigatório";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "E-mail inválido";
      return null;
    case "billing":
      if (!value) return "Selecione uma faixa de faturamento";
      return null;
    case "message":
      return null;
    default:
      return null;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    whatsapp: "",
    email: "",
    billing: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = React.useState("");

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error || "" }));
    }
  };

  const handleBlur = (name: keyof typeof formData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error || "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    let hasErrors = false;
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });
    
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    if (hasErrors) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
      
      if (!webhookUrl) {
        if (process.env.NODE_ENV === "development") {
          console.warn("NEXT_PUBLIC_LEAD_WEBHOOK_URL não configurada. Simulando sucesso.");
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        setSubmitMessage(contact.successMessage);
        setFormData({ name: "", whatsapp: "", email: "", billing: "", message: "" });
        setTouched({});
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro no envio");
      
      setSubmitStatus("success");
      setSubmitMessage(contact.successMessage);
      setFormData({ name: "", whatsapp: "", email: "", billing: "", message: "" });
      setTouched({});
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const billingOptions = contact.fields.billing.options;

  return (
    <section
      id="contato"
      className="py-12 md:py-20 lg:py-28 relative overflow-hidden"
      aria-label="Contato"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b21b6] via-[#4c3fd6] to-[#2563eb]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.22)_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="CONTATO"
              className="[&>span]:text-white/80 [&>p]:text-white/80"
              title={contact.title}
              subtitle={contact.description}
            />
            <Reveal delay={0.1}>
              <Button size="lg" href="#contato" className="mt-8 w-full sm:w-auto bg-white text-purple-700 shadow-none hover:bg-white/90 bg-none">
                {contact.buttonLabel}
              </Button>
            </Reveal>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <GlowCard variant="elevated" hover={false}>
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12"
                  role="status"
                  aria-live="polite"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Solicitação enviada!</h3>
                  <p className="text-muted-foreground">{submitMessage}</p>
<Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => setSubmitStatus("idle")}
                    >
                      Enviar outra solicitação
                    </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Formulário de contato">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      {contact.fields.name.label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={cn(
                        "w-full px-4 py-3 bg-[#0C0B19] border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all",
                        touched.name && errors.name
                          ? "border-red-500/50 focus:ring-red-500/50"
                          : "border-white/10 hover:border-white/20"
                      )}
                      placeholder={contact.fields.name.placeholder}
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {touched.name && errors.name && (
                      <motion.p
                        id="name-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-white mb-2">
                      {contact.fields.whatsapp.label}
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", formatPhone(e.target.value))}
                      onBlur={() => handleBlur("whatsapp")}
                      className={cn(
                        "w-full px-4 py-3 bg-[#0C0B19] border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all",
                        touched.whatsapp && errors.whatsapp
                          ? "border-red-500/50 focus:ring-red-500/50"
                          : "border-white/10 hover:border-white/20"
                      )}
                      placeholder={contact.fields.whatsapp.placeholder}
                      maxLength={15}
                      aria-invalid={touched.whatsapp && !!errors.whatsapp}
                      aria-describedby={touched.whatsapp && errors.whatsapp ? "whatsapp-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {touched.whatsapp && errors.whatsapp && (
                      <motion.p
                        id="whatsapp-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.whatsapp}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      {contact.fields.email.label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={cn(
                        "w-full px-4 py-3 bg-[#0C0B19] border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all",
                        touched.email && errors.email
                          ? "border-red-500/50 focus:ring-red-500/50"
                          : "border-white/10 hover:border-white/20"
                      )}
                      placeholder={contact.fields.email.placeholder}
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {touched.email && errors.email && (
                      <motion.p
                        id="email-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="billing" className="block text-sm font-medium text-white mb-2">
                      {contact.fields.billing.label}
                    </label>
                    <select
                      id="billing"
                      name="billing"
                      value={formData.billing}
                      onChange={(e) => handleChange("billing", e.target.value)}
                      onBlur={() => handleBlur("billing")}
                      className={cn(
                        "w-full px-4 py-3 bg-[#0C0B19] border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all appearance-none",
                        touched.billing && errors.billing
                          ? "border-red-500/50 focus:ring-red-500/50"
                          : "border-white/10 hover:border-white/20"
                      )}
                      aria-invalid={touched.billing && !!errors.billing}
                      aria-describedby={touched.billing && errors.billing ? "billing-error" : undefined}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      {billingOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {touched.billing && errors.billing && (
                      <motion.p
                        id="billing-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-sm text-red-400 flex items-center gap-1.5"
                        role="alert"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.billing}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      {contact.fields.message.label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0C0B19] border border-white/10 rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                      placeholder={contact.fields.message.placeholder}
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-300"
                      role="alert"
                    >
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p>{submitMessage}</p>
                    </motion.div>
                  )}

<Button
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? "Enviando..." : contact.submitLabel}
                    </Button>
                </form>
              )}
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
