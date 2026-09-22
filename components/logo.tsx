export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl ${light ? 'bg-white/10' : 'bg-nirman-navy'}`}>
        <span className="absolute left-2 top-2 h-7 w-2 -skew-x-12 bg-nirman-gold" />
        <span className="absolute left-[18px] top-[14px] h-6 w-2 bg-white" />
        <span className="absolute left-[28px] top-[19px] h-5 w-2 bg-white/80" />
      </div>
      <div>
        <div className={`text-[22px] font-extrabold leading-none ${light ? 'text-white' : 'text-nirman-navy'}`}>Nirman<span className="text-nirman-gold">.World</span></div>
        <div className={`mt-1 text-[8px] font-bold tracking-[.18em] ${light ? 'text-white/55' : 'text-slate-500'}`}>BUILD TOGETHER. A BETTER TOMORROW</div>
      </div>
    </div>
  );
}
