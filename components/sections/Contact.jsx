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
    >
      <div className="grid gap-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
            { label: "Email", name: "email", type: "email", placeholder: "you@example.com", required: true },
            { label: "Company", name: "company", type: "text", placeholder: "Company or project name" },
          ].map((field) => (
            <label key={field.name} className="grid gap-2 text-sm font-semibold text-white">
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
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
              {errors[field.name] && (
                <span id={`${field.name}-error`} className="text-xs font-medium text-rose-300">
                  {errors[field.name]}
                </span>
              )}
            </label>
          ))}
          <label className="grid gap-2 text-sm font-semibold text-white">
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
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
            {errors.details && (
              <span id="details-error" className="text-xs font-medium text-rose-300">
                {errors.details}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
          >
            Send Message
          </button>
          {status === "success" && (
            <p className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-200">
              Thanks. Your message is ready in the frontend. Backend email delivery can be connected next.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-2xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm font-semibold text-rose-200">
              Please fix the highlighted fields before sending.
            </p>
          )}
        </form>
        <div className="rounded-3xl bg-slate-950/70 p-6">
          <h3 className="text-2xl font-bold text-white">Start with a free consultation</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            We can discuss your requirements, suggest a practical technical path and estimate a realistic first version.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              WhatsApp AlphaGen Coding
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-semibold text-white">
              <MapPin className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              {siteConfig.location}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
