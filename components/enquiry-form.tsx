'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Search, Building2, Boxes, BriefcaseBusiness } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@nirman/ui';
import { useNirmanUI } from '@/lib/store';

const schema = z.object({
  need: z.string().min(3, 'Please describe your requirement'),
  location: z.string().min(2, 'Please enter a location')
});
type FormData = z.infer<typeof schema>;

const modes = [
  { id: 'service' as const, label: 'I need a service', icon: Building2 },
  { id: 'materials' as const, label: 'I want materials', icon: Boxes },
  { id: 'business' as const, label: 'I’m a business / professional', icon: BriefcaseBusiness }
];
const placeholders = {
  service: 'e.g. Build my home, renovation, waterproofing, interior, electrical...',
  materials: 'e.g. Cement, TMT steel, tiles, RMC, sanitaryware...',
  business: 'e.g. Contractor, architect, vendor, engineer, consultant...'
};

export function EnquiryForm() {
  const { enquiryMode, setEnquiryMode } = useNirmanUI();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const submit = (data: FormData) => {
    alert(`Requirement captured for demo:\n${data.need}\n${data.location}`);
    reset();
  };
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2 rounded-2xl bg-slate-100 p-1.5">
        {modes.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setEnquiryMode(id)} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${enquiryMode===id ? 'bg-white text-nirman-navy shadow-sm' : 'text-slate-600'}`}>
            <Icon size={17}/>{label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit(submit)} className="card grid gap-3 p-4 lg:grid-cols-[1.45fr_.8fr_auto]">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.12em] text-slate-500"><Search size={15}/>What do you need?</div>
          <input {...register('need')} placeholder={placeholders[enquiryMode]} className="w-full rounded-2xl bg-slate-50 px-4 py-4 outline-none ring-1 ring-slate-200 transition focus:ring-2 focus:ring-nirman-gold"/>
          {errors.need && <p className="mt-1 text-xs font-semibold text-red-600">{errors.need.message}</p>}
        </div>
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.12em] text-slate-500"><MapPin size={15}/>Location</div>
          <input {...register('location')} placeholder="City, area or pincode" className="w-full rounded-2xl bg-slate-50 px-4 py-4 outline-none ring-1 ring-slate-200 transition focus:ring-2 focus:ring-nirman-gold"/>
          {errors.location && <p className="mt-1 text-xs font-semibold text-red-600">{errors.location.message}</p>}
        </div>
        <Button type="submit" className="self-end py-4">Get Started</Button>
      </form>
    </div>
  );
}
