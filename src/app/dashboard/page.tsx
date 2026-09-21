"use client";

import React, { useMemo, useState } from "react";

type Service = {
  name: string;
  short: string;
  description: string;
};

const services: Service[] = [
  { name: "Senior Citizen Assistance", short: "Senior", description: "Cash assistance, social pension, milestone benefits, and senior citizen payout records." },
  { name: "PWD Assistance", short: "PWD", description: "Financial aid, assistive-device support, medicine assistance, and PWD beneficiary records." },
  { name: "Medical Assistance", short: "Medical", description: "Hospital, medicine, laboratory, and treatment assistance applications." },
  { name: "Burial Assistance", short: "Burial", description: "Burial and funeral assistance applications, approvals, and payout release." },
  { name: "Educational Assistance", short: "Education", description: "Student financial assistance, school support, and educational grants." },
  { name: "Solo Parent Assistance", short: "Solo Parent", description: "Solo parent aid, subsidy tracking, and beneficiary verification." },
  { name: "Social Pension", short: "Pension", description: "Pension beneficiary validation, payout scheduling, release, and claim status." },
  { name: "Disaster Assistance", short: "Disaster", description: "Emergency assistance for fire, flood, typhoon, and other disaster-affected residents." },
  { name: "Livelihood Assistance", short: "Livelihood", description: "Livelihood grants, starter kits, small-business assistance, and release monitoring." },
  { name: "Scholarship", short: "Scholarship", description: "Scholarship applications, eligibility review, approval, and payout monitoring." },
  { name: "Cash-for-Work", short: "Cash-for-Work", description: "Worker registration, attendance validation, payroll batches, and payout release." },
  { name: "Emergency Aid", short: "Emergency", description: "Rapid financial assistance with priority verification and approval." },
  { name: "Food Assistance", short: "Food", description: "Food packs, vouchers, and household distribution monitoring." },
  { name: "Transportation Assistance", short: "Transport", description: "Transportation support, travel assistance, and approved reimbursement tracking." },
];

const stages = ["Applications", "Verification", "Assessment", "Approval", "Payout Queue", "Scheduled", "Released", "Claimed", "Reports", "Audit Trail"];

export default function Page() {
  const [selected, setSelected] = useState<Service>(services[0]);
  const [stage, setStage] = useState("Applications");

  const stats = useMemo(() => [
    { label: "Pending Applications", value: "128" },
    { label: "For Approval", value: "43" },
    { label: "Scheduled Payouts", value: "76" },
    { label: "Released Today", value: "51" },
  ], []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#173a6b_0,#0a1730_40%,#050b17_100%)] text-white">
      <header className="border-b border-white/10 bg-black/10 px-4 py-4 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Government Assistance Management</p>
            <h1 className="text-2xl font-black md:text-3xl">Government Payout Hub</h1>
          </div>
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
            ● System Online
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <button key={item.label} onClick={() => setStage(item.label)} className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-left shadow-xl backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.11]">
              <div className="text-3xl font-black">{item.value}</div>
              <div className="mt-1 text-sm text-slate-300">{item.label}</div>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <section className="rounded-[32px] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur md:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Service Orbit</p>
                <h2 className="text-xl font-black">Choose Government Service</h2>
              </div>
              <div className="rounded-2xl border border-sky-300/20 bg-sky-300/10 px-3 py-2 text-xs text-sky-100">
                Click any service
              </div>
            </div>

            <div className="relative mx-auto grid min-h-[620px] place-items-center overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/30 p-4">
              <div className="pointer-events-none absolute h-[410px] w-[410px] rounded-full border border-sky-300/15 md:h-[470px] md:w-[470px]" />
              <div className="pointer-events-none absolute h-[270px] w-[270px] rounded-full border border-white/10 md:h-[310px] md:w-[310px]" />

              <button
                onClick={() => setStage("Applications")}
                className="relative z-20 grid h-40 w-40 place-items-center rounded-full border border-sky-300/40 bg-gradient-to-br from-sky-400/30 to-blue-700/40 p-4 text-center shadow-[0_0_70px_rgba(56,189,248,.22)] transition hover:scale-105 md:h-48 md:w-48"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-sky-200">Center</span>
                  <span className="mt-2 block text-2xl font-black">PAYOUT HUB</span>
                  <span className="mt-2 block text-xs text-slate-300">All Government Services</span>
                </span>
              </button>

              {services.map((service, index) => {
                const angle = (index / services.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 42;
                const x = 50 + Math.cos(angle) * radius;
                const y = 50 + Math.sin(angle) * radius;
                const active = selected.name === service.name;

                return (
                  <button
                    key={service.name}
                    onClick={() => setSelected(service)}
                    className={`absolute z-10 w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-2 py-3 text-center text-[11px] font-bold leading-tight shadow-lg transition md:w-[122px] md:text-xs ${active ? "border-amber-300 bg-amber-300 text-slate-950 scale-105" : "border-white/15 bg-slate-900/90 text-slate-100 hover:border-sky-300/60 hover:bg-slate-800"}`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {service.short}
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-[30px] border border-white/10 bg-white/[0.07] p-6 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Selected Service</p>
              <h3 className="mt-2 text-2xl font-black">{selected.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{selected.description}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="rounded-2xl bg-sky-400 px-4 py-3 font-bold text-slate-950 transition hover:bg-sky-300">New Application</button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 font-bold transition hover:bg-white/10">View Records</button>
              </div>
            </section>

            <section className="rounded-[30px] border border-white/10 bg-white/[0.07] p-6 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Workflow</p>
              <h3 className="mt-2 text-xl font-black">Payout Processing</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {stages.map((item) => (
                  <button
                    key={item}
                    onClick={() => setStage(item)}
                    className={`rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition ${stage === item ? "border-sky-300 bg-sky-300 text-slate-950" : "border-white/10 bg-black/10 hover:bg-white/10"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[30px] border border-emerald-300/20 bg-emerald-300/10 p-6">
              <p className="text-sm text-emerald-100">Current module</p>
              <div className="mt-1 text-2xl font-black text-white">{stage}</div>
              <p className="mt-2 text-sm text-emerald-50/80">Use this area for searchable records, status updates, approval actions, payout scheduling, and audit history.</p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
