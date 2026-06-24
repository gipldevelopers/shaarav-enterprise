import { HeroSection } from './HeroSection'
import { TrustStrip } from './TrustStrip'
import { IntroSplit } from './IntroSplit'
import { BandSection } from './BandSection'
import { ServicesPreview } from './ServicesPreview'
import { ProcessShowcase } from './ProcessShowcase'
import { SectorMosaic } from './SectorMosaic'
import { InfoTiles } from './InfoTiles'
import { FounderTeaser } from './FounderTeaser'
import { CredentialsSection } from './CredentialsSection'
import { FinalCTA } from './FinalCTA'
import { WhyChooseUs } from './WhyChooseUs'
import { StrategicAdvantage } from './StrategicAdvantage'
import { Testimonials } from './Testimonials'

export function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <IntroSplit />
      <BandSection />
      <ServicesPreview onNavigate={onNavigate} />
      <ProcessShowcase />
      <SectorMosaic />
      
      <WhyChooseUs
        eyebrow="Why Clients Choose Us"
        title="What makes the experience feel more premium."
        items={[
          { title: 'Clarity', text: 'Complex topics are translated into calmer, simpler next steps.' },
          { title: 'Discretion', text: 'Money, family, and financial services matters are handled with care.' },
          { title: 'Consistency', text: 'The tone stays polished, thoughtful, and decision-focused.' },
        ]}
      />
      
      <FounderTeaser onNavigate={onNavigate} />
      <CredentialsSection />
      
      <StrategicAdvantage
        eyebrow="Strategic Advantage"
        title="Structure creates value in more ways than one."
        items={[
          { title: 'Better Alignment', text: 'Financial Services, family, and financial decisions can move together.' },
          { title: 'Faster Action', text: 'A clear framework reduces hesitation and improves momentum.' },
          { title: 'Reduced Friction', text: 'Less confusion means more energy for real progress.' },
        ]}
      />
      
      <Testimonials />
      <FinalCTA onNavigate={onNavigate} />
    </>
  )
}
