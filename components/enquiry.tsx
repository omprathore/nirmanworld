'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({ requirement:z.string().min(5,'Tell us what you need'), location:z.string().min(2,'Enter a location') });
type FormData = z.infer<typeof schema>;

export default function Enquiry(){
 const {register,handleSubmit,formState:{errors}}=useForm<FormData>({resolver:zodResolver(schema)});
 const submit=(data:FormData)=>alert(`Requirement captured for demo: ${data.requirement} — ${data.location}`);
 return <form onSubmit={handleSubmit(submit)} className="mt-8 rounded-3xl bg-white p-4 shadow-2xl border border-slate-200 grid md:grid-cols-[1fr_.55fr_auto] gap-3">
   <div><input {...register('requirement')} className="w-full rounded-2xl bg-slate-50 px-5 py-4 outline-none" placeholder="What construction service do you need?" />{errors.requirement&&<p className="text-red-600 text-xs mt-1">{errors.requirement.message}</p>}</div>
   <div><input {...register('location')} className="w-full rounded-2xl bg-slate-50 px-5 py-4 outline-none" placeholder="City, area or pincode" />{errors.location&&<p className="text-red-600 text-xs mt-1">{errors.location.message}</p>}</div>
   <button className="rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white">Get Started</button>
 </form>
}
