import { PageHero } from '../../components/common/PageHero'
import { media } from '../../constants/data'

export function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        text="The framework and conditions under which we provide our services."
        image={media.boardroom}
      />
      
      <section className="page-shell !my-16">
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.05rem', color: 'var(--color-text)' }}>
          <p style={{ color: 'var(--color-accent-strong)', fontWeight: 600 }}>
            Effective Date: {new Date().getFullYear()}
          </p>
          
          <p>
            Welcome to Shaarav Enterprise. By accessing or using our website and consulting services, you agree to comply with and be bound by the following terms and conditions. Please read these carefully before engaging with our services.
          </p>
          
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent-strong)' }}>1. Scope of Services</h3>
            <p>
              Shaarav Enterprise provides strategic, financial, and enterprise consulting services. The specific scope, deliverables, and timelines of services will be outlined in separate, formal agreements with our clients. Information provided on this website is for general guidance and does not constitute formal financial advice.
            </p>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent-strong)' }}>2. Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, images, and consulting materials, is the exclusive property of Shaarav Enterprise and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written consent.
            </p>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent-strong)' }}>3. Limitation of Liability</h3>
            <p>
              While we strive to provide accurate and actionable advice, Shaarav Enterprise shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or website. Financial Services decisions remain the sole responsibility of the client.
            </p>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent-strong)' }}>4. Modifications</h3>
            <p>
              We reserve the right to modify or replace these terms at any time at our sole discretion. Your continued use of the website and services following the posting of any changes constitutes acceptance of those updated terms.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
