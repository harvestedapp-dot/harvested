"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection({
  copy,
}: {
  copy: Dictionary["contact"];
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#1a3320] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center" data-reveal>
          <p className="mb-5 inline-block rounded-full border-[0.5px] border-white/20 bg-white/10 px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-white/70 uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-white sm:text-[44px]">
            {copy.heading}
          </h2>
          <p className="mt-4 text-lg text-white/65">{copy.body}</p>
        </div>

        <div
          className="mt-12 rounded-2xl bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)] sm:p-12"
          data-reveal
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="size-10 text-primary" />
              <p className="font-heading text-lg font-semibold text-foreground">
                {copy.sentTitle}
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                {copy.sentBody}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-2.5">
                  <Label htmlFor="name" className="text-[16px]">
                    {copy.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    maxLength={120}
                    className="h-12 px-4 text-[16px]"
                  />
                </div>
                <div className="grid gap-2.5">
                  <Label htmlFor="email" className="text-[16px]">
                    {copy.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    className="h-12 px-4 text-[16px]"
                  />
                </div>
              </div>
              <div className="grid gap-2.5">
                <Label htmlFor="message" className="text-[16px]">
                  {copy.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={2000}
                  className="px-4 py-3 text-[16px]"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">{copy.error}</p>
              )}

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="h-12 min-w-44 px-8 text-[16px]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      {copy.sending}
                    </>
                  ) : (
                    copy.send
                  )}
                </Button>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-[16px] font-medium text-[#3B6D11] hover:text-[#1a3320]"
                >
                  <Mail className="size-4.5" />
                  {siteConfig.contactEmail}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
