"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui";

const initialValues = {
  name: "",
  email: "",
  company: "",
  details: "",
};

function validate(values) {
  const nextErrors = {};

  if (!values.name.trim()) nextErrors.name = "Name is required.";
  if (!values.email.trim()) {
    nextErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Enter a valid email address.";
  }
  if (!values.details.trim()) nextErrors.details = "Project details are required.";

  return nextErrors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell us what you want to build"
      description="Send your idea, business problem or project scope. We usually reply within 24 hours."
      className="bg-white"
    >
      <div className="grid grid-cols-1 gap-8 rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <form className="grid min-w-0 gap-4" onSubmit={handleSubmit} noValidate>
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
            { label: "Email", name: "email", type: "email", placeholder: "you@example.com", required: true },
            { label: "Company", name: "company", type: "text", placeholder: "Company or project name" },
          ].map((field) => (
            <label key={field.name} className="grid gap-2 text-sm font-semibold text-ink">
              {field.label}
              <input
                name={field.name}
                type={field.type}
                value={values[field.name]}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                className="w-full min-w-0 rounded-xl border border-line bg-white px-4 py-3 text-[15px] font-normal text-ink outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10"
              />
              {errors[field.name] && (
                <span id={`${field.name}-error`} className="text-xs font-medium text-rose-600">
                  {errors[field.name]}
                </span>
              )}
            </label>
          ))}
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Project details
            <textarea
              name="details"
              rows="5"
              value={values.details}
              placeholder="Tell us about the website, system, SaaS product, POS, IoT workflow or automation you need."
              required
              onChange={handleChange}
              aria-invalid={Boolean(errors.details)}
              aria-describedby={errors.details ? "details-error" : undefined}
              className="w-full min-w-0 rounded-xl border border-line bg-white px-4 py-3 text-[15px] font-normal text-ink outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10"
            />
            {errors.details && (
              <span id="details-error" className="text-xs font-medium text-rose-600">
                {errors.details}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-button px-5 py-3 text-sm font-bold text-white shadow-brand transition duration-200 hover:-translate-y-0.5 hover:shadow-brand-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-indigo motion-reduce:hover:translate-y-0"
          >
            Send Message
          </button>
          {status === "success" && (
            <p className="rounded-xl border border-emerald-600/15 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              ✓ Message sent. We&apos;ll be in touch within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-xl border border-rose-600/15 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
              Please fix the highlighted fields before sending.
            </p>
          )}
        </form>
        <div className="min-w-0 rounded-2xl bg-gradient-to-br from-tint via-white to-surface-alt p-5 ring-1 ring-inset ring-line sm:p-6">
          <h3 className="text-2xl font-bold tracking-[-0.02em] text-ink">Start with a free consultation</h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted">
            We can discuss your requirements, suggest a practical technical path and estimate a realistic first version.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-white p-3.5 text-sm font-semibold text-ink sm:p-4 sm:text-base [overflow-wrap:anywhere] transition duration-200 hover:border-brand-indigo/50 hover:text-brand-indigo"
            >
              <MessageCircle className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
              WhatsApp AlphaGen Coding
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-white p-3.5 text-sm font-semibold text-ink sm:p-4 sm:text-base [overflow-wrap:anywhere] transition duration-200 hover:border-brand-indigo/50 hover:text-brand-indigo"
            >
              <Mail className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <div className="flex min-w-0 items-center gap-3 rounded-xl border border-line bg-white p-3.5 text-sm font-semibold text-ink sm:p-4 sm:text-base [overflow-wrap:anywhere]">
              <MapPin className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
              {siteConfig.location}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
