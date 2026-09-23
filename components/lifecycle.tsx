'use client';
import { useState } from 'react';

const stages = [
  {name:'Planning', platform:'Nirman.World', services:['Requirement qualification','Budget planning','Feasibility','Timeline']},
  {name:'Agreement', platform:'Nirman Legal', services:['Project agreement','Scope & terms','Compliance','Documentation']},
  {name:'Design', platform:'DreamToDesign', services:['Architecture','BOQ & estimation','Structural design','3D visualization']},
  {name:'Procurement', platform:'BuyForBuild', services:['Vendor matching','RFQ','Price comparison','Delivery tracking']},
  {name:'Workforce', platform:'PayByDay', services:['Worker mobilisation','Attendance','Supervision','Wage visibility']},
  {name:'Execution', platform:'SiteInSync', services:['Work packages','Daily progress','Site updates','Milestones']},
  {name:'Quality & Safety', platform:'SiteInSync', services:['SOP checks','Inspections','Defect tracking','Safety audits']},
  {name:'Payment', platform:'NirmanPay', services:['Budget tracking','Milestone payments','Vendor payouts','Payment history']},
  {name:'Handover', platform:'Nirman.World', services:['Final checks','Snag closure','Documents','Project closure']}
];

export default function Lifecycle(){
  const [active,setActive] = useState(2);
  const s = stages[active];
  return <section id="lifecycle" className="bg-slate-50 py-20">
    <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
      <div>
        <p className="text-sm tracking-[.18em] uppercase font-bold text-amber-700">Project Journey</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">One Project. Every Stage. Connected.</h2>
        <p className="text-slate-600 mt-5 text-lg leading-8">Click a stage to see the relevant Nirman services. Platforms stay behind the experience and appear only when needed.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
          {stages.map((st,i)=><button key={st.name} onClick={()=>setActive(i)} className={`rounded-2xl border px-4 py-4 text-left font-semibold transition ${i===active?'border-amber-400 bg-amber-50 shadow-md':'border-slate-200 bg-white hover:border-slate-300'}`}>
            <span className="text-xs text-slate-400 mr-2">{String(i+1).padStart(2,'0')}</span>{st.name}
          </button>)}
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white">
          <div className="text-sm uppercase tracking-[.18em] text-amber-300">Selected stage</div>
          <h3 className="text-3xl font-extrabold mt-2">{s.name}</h3>
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {s.services.map(x=><div key={x} className="rounded-xl bg-white/10 border border-white/10 px-4 py-3">{x}</div>)}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
          <div><div className="text-xs uppercase tracking-wider text-slate-400">Powered by</div><div className="font-extrabold text-lg">{s.platform}</div></div>
          <button className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950">Explore services</button>
        </div>
      </div>
    </div>
  </section>
}
