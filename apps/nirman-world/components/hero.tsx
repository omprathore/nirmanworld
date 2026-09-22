import { CheckCircle2, ShieldCheck, Activity, WalletCards } from 'lucide-react';
import { SectionEyebrow } from '@nirman/ui';
import { EnquiryForm } from './enquiry-form';

export function Hero() {
  return (
    <section className="hero-glow overflow-hidden bg-gradient-to-b from-white to-nirman-mist pb-14 pt-12 md:pt-16">
      <div className="container-nirman grid items-center gap-10 lg:grid-cols-[1.06fr_.94fr]">
        <div>
          <SectionEyebrow>Build Better. With Clarity.</SectionEyebrow>
          <h1 className="max-w-4xl text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[.94] tracking-[-.045em] text-nirman-navy">Everything Construction.<br/><span className="text-nirman-orange">One Trusted Platform.</span></h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-nirman-muted">Tell us what you need. Nirman.World connects the right professionals, vendors, workforce and partners — and manages the journey with complete transparency.</p>
          <div className="mt-7"><EnquiryForm /></div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600"><strong>Popular:</strong>{['Build My Home','Renovation','Interior','Waterproofing','Electrical'].map(x=><a href="#services" key={x} className="rounded-full bg-white px-3 py-2 font-semibold shadow-sm ring-1 ring-slate-200">{x}</a>)}</div>
        </div>
        <div className="relative min-h-[560px]">
          <div className="absolute inset-6 rounded-[2rem] bg-[linear-gradient(160deg,rgba(11,35,71,.05),rgba(11,35,71,.62)),radial-gradient(circle_at_72%_18%,rgba(255,197,105,.9),transparent_22%),linear-gradient(180deg,#a6bed5_0%,#6d86a4_44%,#3d526d_44%,#20324e_100%)] shadow-soft" />
          <div className="absolute left-[18%] top-[20%] h-[54%] w-[48%] -skew-x-6 border-[8px] border-white/20 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.18)_0_12%,transparent_12%_24%),repeating-linear-gradient(180deg,rgba(255,255,255,.12)_0_12%,transparent_12%_24%)]" />
          <div className="absolute bottom-6 left-0 max-w-[300px] rounded-3xl border border-white/10 bg-nirman-navy/92 p-6 text-white shadow-soft">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">Managed Construction Network</span>
            <h3 className="mt-3 text-2xl font-extrabold">One Project. Every Stage. Connected.</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/75">
              <div className="flex gap-2"><CheckCircle2 size={18} className="text-nirman-gold"/>Right professionals & partners</div>
              <div className="flex gap-2"><Activity size={18} className="text-nirman-gold"/>Live progress visibility</div>
              <div className="flex gap-2"><ShieldCheck size={18} className="text-nirman-gold"/>Quality & SOP checks</div>
              <div className="flex gap-2"><WalletCards size={18} className="text-nirman-gold"/>Budget transparency</div>
            </div>
          </div>
          <div className="absolute right-0 top-16 rounded-3xl bg-white/95 p-5 text-right shadow-soft ring-1 ring-slate-200"><strong className="block text-2xl font-extrabold text-nirman-navy">Transparent.</strong><span className="text-sm font-semibold text-slate-500">Collaborative.<br/>Future Ready.</span></div>
        </div>
      </div>
    </section>
  );
}
