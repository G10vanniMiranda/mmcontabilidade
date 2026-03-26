import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Differentials } from '@/components/Differentials'
import Hero from '@/components/Hero'
import { Location } from '@/components/Location'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Differentials />
      <About />
      <Contact />
      <Location />
    </main>
  )
}
