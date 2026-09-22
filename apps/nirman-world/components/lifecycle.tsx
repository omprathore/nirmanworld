'use client';
import { SectionEyebrow, Button } from '@nirman/ui';
import { stages } from '@/lib/data';
import { useNirmanUI } from '@/lib/store';

const positions = [
  { left: '50%', top: '0%' },
  { left: '82%', top: '12%' },
  { left: '100%', top: '42%' },
  { left: '92%', top: '77%' },
  { left: '67%', top: '100%' },
  { left: '33%', top: '100%' },
  { left: '8%', top: '77%' },
  { left: '0%', top: '42%' },
  { left: '18%', top: '12%' }
];
export function Lifecycle(){
  const {activeStage,setActiveStage}=useNirmanUI();
  const active=stages.find(s=>s.id===activeStage) ?? stages[0];
  return <section id="project-journey" className="bg-nirman-mist py-24"><div className="container-nirman grid items-center gap-10 xl:grid-cols-[.75fr_1.25fr_.9fr]">
    <div><SectionEyebrow>Project Journey</SectionEyebrow><h2 className="text-4xl font-extrabold leading-tight text-nirman-navy md:text-5xl">One Project.<br/>Every Stage. Connected.</h2><p className="mt-5 text-lg leading-8 text-nirman-muted">From planning to handover, Nirman.World manages every stage with the right people, processes and technology.</p><a href="#start"><Button className="mt-6">Explore the Project Lifecycle</Button></a></div>
    <div className="mx-auto hidden aspect-square w-full max-w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(11,35,71,.04)_0_36%,transparent_36%),radial-gradient(circle_at_center,transparent_55%,rgba(11,35,71,.08)_55%_56%,transparent_56%)] md:block relative">
      <div className="absolute left-1/2 top-1/2 grid aspect-square w-[42%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-center shadow-soft"><div><strong className="text-2xl font-extrabold text-nirman-navy">Nirman.World</strong><p className="mt-2 text-sm font-semibold text-slate-500">Your Project.<br/>Our Commitment.</p></div></div>
      {stages.map((stage,i)=><button key={stage.id} onClick={()=>setActiveStage(stage.id)} style={positions[i]} className={`absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white p-2 text-center shadow-md transition hover:scale-105 ${activeStage===stage.id?'border-nirman-gold ring-4 ring-orange-100':'border-slate-200'}`}><span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-orange-50 text-xs font-extrabold text-nirman-gold">{i+1}</span><em className="mt-1 block text-[11px] font-extrabold not-italic leading-tight text-nirman-navy">{stage.label}</em></button>)}
    </div>
    <div className="md:hidden"><div className="grid gap-2">{stages.map((s,i)=><button key={s.id} onClick={()=>setActiveStage(s.id)} className={`flex items-center gap-3 rounded-2xl border p-4 text-left font-bold ${activeStage===s.id?'border-nirman-gold bg-white':'border-slate-200 bg-white/60'}`}><span className="grid h-8 w-8 place-items-center rounded-full bg-orange-50 text-nirman-gold">{i+1}</span>{s.label}</button>)}</div></div>
    <aside className="card p-6"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-nirman-gold">Selected Stage</p><h3 className="mt-3 text-3xl font-extrabold text-nirman-navy">{active.label}</h3><p className="mt-3 leading-7 text-nirman-muted">{active.description}</p><div className="mt-5 grid grid-cols-2 gap-2">{active.services.map(x=><div key={x} className="rounded-2xl bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700">{x}</div>)}</div><div className="mt-5 border-t border-slate-200 pt-5"><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400">Powered by</p><strong className="mt-1 block text-lg text-nirman-navy">{active.platform}</strong></div></aside>
  </div></section>
}
