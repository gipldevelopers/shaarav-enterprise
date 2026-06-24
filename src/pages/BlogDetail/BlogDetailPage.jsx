import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

function DetailSection({ title, text, points, image, reverse = false }) {
  return (
    <section className="section page-shell story-layout">
      {!reverse ? (
        <>
          <div className="story-layout__copy story-layout__copy--card">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="detail-points">
              {points.map((point) => (
                <div key={point} className="detail-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <article
            className="image-panel image-panel--portrait"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.48)), url(${image})`,
            }}
          />
        </>
      ) : (
        <>
          <article
            className="image-panel image-panel--portrait"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.48)), url(${image})`,
            }}
          />
          <div className="story-layout__copy story-layout__copy--card">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="detail-points">
              {points.map((point) => (
                <div key={point} className="detail-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export function BlogDetailPage({ post, onNavigate }) {
  const getImageByCategory = (category) => {
    if (category === 'Property') return media.realEstate
    if (category === 'Family Office') return media.family
    return media.financial
  }

  return (
    <>
      <div className="page-shell !mt-32 -mb-24 relative z-10">
        <button 
          onClick={() => onNavigate('blog')}
          className="button button--secondary !py-2 !px-4 !min-h-[2.5rem] flex items-center gap-2 cursor-pointer hover:bg-black/5 !text-black"
        >
          ← Back to Blog
        </button>
      </div>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        text={post.summary}
        image={getImageByCategory(post.category)}
      />

      <DetailSection
        title="Why this topic matters."
        text="The blog detail experience should feel useful and editorial, not generic. Each article supports a more informed and premium brand impression while still staying practical."
        points={[
          'Focused on actual decision-making rather than vague inspiration',
          'Written for financial services owners, HNIs, families, and investors',
          'Structured to support trust and clarity quickly',
        ]}
        image={getImageByCategory(post.category)}
      />

      <InfoTiles
        eyebrow="Key Takeaways"
        title="A concise way to absorb the main message."
        items={[
          { title: 'Context', text: 'Good decisions begin with understanding the real situation properly.' },
          { title: 'Structure', text: 'A simple framework often creates more progress than more information.' },
          { title: 'Judgment', text: 'The strongest decisions balance opportunity, timing, and discipline.' },
        ]}
      />

      <section className="section page-shell quote-block">
        <blockquote>Insight is valuable when it changes how you think about the next decision.</blockquote>
      </section>

      <InfoTiles
        eyebrow="Where to Go Next"
        title="Reading is helpful. Personal advice is better when the decision is significant."
        items={[
          { title: 'Discuss', text: 'Use the article as a starting point for a more direct consulting conversation.' },
          { title: 'Clarify', text: 'Translate general insight into something relevant to your own context.' },
          { title: 'Act', text: 'Move forward with stronger structure and more confidence.' },
        ]}
      />
    </>
  )
}
