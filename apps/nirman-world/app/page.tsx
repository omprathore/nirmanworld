import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Lifecycle } from '@/components/lifecycle';
import { Transparency } from '@/components/transparency';
import { HowItWorks } from '@/components/how-it-works';
import { Business } from '@/components/business';
import { Projects } from '@/components/projects';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function HomePage(){
  return <><Header/><main><Hero/><Services/><Lifecycle/><Transparency/><HowItWorks/><Business/><Projects/><CTA/></main><Footer/></>;
}
