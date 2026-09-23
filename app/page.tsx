import Lifecycle from '@/components/lifecycle';
import Enquiry from '@/components/enquiry';

const services = ['Build My Home','Renovation','Interior Works','Waterproofing','Electrical','Plumbing','Commercial Construction','Painting'];
const transparency = [
  ['Live Progress','Know exactly what is happening on site.'],
  ['Quality Monitoring','See inspections, defects and approvals.'],
  ['SOP Compliance','Know whether work follows defined standards.'],
  ['Budget Control','Track planned vs actual cost in real time.']
];

export default function Home(){
 return <main>
  <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
   <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
    <div className="font-extrabold text-2xl text-slate-900">Nirman<span className="text-amber-500">.World</span></div>
    <nav className="hidden md:flex gap-7 text-sm font-semibold text-slate-700"><a href="#services">Services</a><a href="#lifecycle">Project Journey</a><a href="#how">How It Works</a><a href="#business">For Businesses</a></nav>
    <a href="#start" className="rounded-xl bg-slate-900 px-5 py-3 text-white font-bold">Start a Project</a>
   </div>
  </header>

  <section className="bg-gradient-to-b from-slate-50 to-white py-20">
   <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
    <div>
     <p className="text-sm tracking-[.18em] uppercase font-bold text-amber-700">Managed Construction Network</p>
     <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-[.98] tracking-tight">Everything Construction.<br/><span className="text-orange-500">One Trusted Platform.</span></h1>
     <p className="mt-6 text-lg md:text-xl leading-8 text-slate-600 max-w-3xl">Tell us what you need. Nirman.World connects the right professionals, vendors, workforce and partners — and manages the journey with complete transparency.</p>
     <Enquiry/>
    </div>
    <div className="relative min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-amber-300">
      <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_75%_15%,rgba(255,196,91,.65),transparent_26%),linear-gradient(180deg,transparent_55%,rgba(7,20,38,.85)_55%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white"><p className="uppercase tracking-[.18em] text-xs text-amber-300">You ask. We manage.</p><h3 className="text-3xl font-extrabold mt-2">You stay informed at every stage.</h3><p className="mt-3 text-white/75 max-w-lg">Progress, quality, SOP, budget and timeline — visible from start to handover.</p></div>
    </div>
   </div>
  </section>

  <section id="services" className="py-16">
   <div className="mx-auto max-w-7xl px-6"><p className="text-sm uppercase tracking-[.18em] font-bold text-amber-700">Construction Services</p><h2 className="text-4xl font-extrabold mt-3">Start with what you need</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{services.map((s,i)=><div key={s} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm"><div className="w-12 h-12 rounded-xl bg-amber-50 grid place-items-center text-xl">{['🏠','🛠️','🛋️','💧','⚡','🚿','🏢','🎨'][i]}</div><h3 className="font-bold text-lg mt-4">{s}</h3><p className="text-slate-500 text-sm mt-2">Managed through Nirman.World.</p></div>)}</div>
   </div>
  </section>

  <Lifecycle/>

  <section className="py-20">
   <div className="mx-auto max-w-7xl px-6"><p className="text-sm uppercase tracking-[.18em] font-bold text-amber-700">Customer Visibility</p><h2 className="text-4xl md:text-5xl font-extrabold mt-3">You stay informed at every stage</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{transparency.map(([a,b])=><div key={a} className="rounded-2xl bg-slate-50 p-6 border border-slate-200"><h3 className="font-bold text-xl">{a}</h3><p className="text-slate-600 mt-3 leading-7">{b}</p></div>)}</div>
   </div>
  </section>

  <section id="how" className="py-20 bg-slate-950 text-white">
   <div className="mx-auto max-w-7xl px-6"><p className="text-sm uppercase tracking-[.18em] font-bold text-amber-300">How It Works</p><h2 className="text-4xl md:text-5xl font-extrabold mt-3">Simple for you. Powerful behind the scenes.</h2>
    <div className="grid md:grid-cols-4 gap-5 mt-10">{['Tell us what you need','We qualify the requirement','We connect partners, vendors & workforce','You track execution to handover'].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-6"><div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 grid place-items-center font-extrabold">{i+1}</div><h3 className="font-bold text-xl mt-5">{x}</h3></div>)}</div>
   </div>
  </section>

  <section id="business" className="py-20">
   <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-6"><div className="rounded-3xl bg-slate-900 p-8 md:p-10 text-white"><p className="text-sm uppercase tracking-[.18em] font-bold text-amber-300">For Businesses</p><h2 className="text-4xl font-extrabold mt-3">Grow with Nirman.World</h2><p className="text-white/70 mt-5 leading-8">Contractors, vendors, architects, designers, consultants and service providers can get verified, receive opportunities and execute through Nirman.World.</p><button className="mt-7 rounded-xl bg-amber-400 px-5 py-3 text-slate-950 font-bold">Join the Nirman Network</button></div>
   <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-10"><p className="text-sm uppercase tracking-[.18em] font-bold text-amber-700">Ecosystem</p><h3 className="text-3xl font-extrabold mt-3">Powered by Nirman platforms</h3><div className="grid grid-cols-2 gap-3 mt-6">{['PayByDay','DreamToDesign','BuyForBuild','SiteInSync','NirmanPay','Nirman Money','Nirman Legal','Nirman School'].map(x=><div key={x} className="rounded-xl bg-white border border-slate-200 p-4 font-bold">{x}</div>)}</div></div></div>
  </section>

  <section id="start" className="py-16 bg-gradient-to-r from-slate-950 to-slate-800 text-white"><div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"><div><p className="text-sm uppercase tracking-[.18em] font-bold text-amber-300">Ready to start?</p><h2 className="text-4xl md:text-5xl font-extrabold mt-3">Tell us what you need. Let’s build it together.</h2></div><a href="#" className="rounded-xl bg-orange-500 px-6 py-4 font-bold">Start with Nirman.World</a></div></section>

  <footer className="bg-slate-950 text-white/60 py-8"><div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-4"><div className="font-extrabold text-white">Nirman<span className="text-amber-400">.World</span></div><div>One ecosystem. A stronger building experience.</div></div></footer>
 </main>
}
