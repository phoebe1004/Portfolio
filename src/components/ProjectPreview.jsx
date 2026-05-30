// Safe abstract visuals for experience cards.
// These intentionally avoid real SPMC screenshots or sensitive system details.

function InventoryPreview() {
  return (
    <div className="mb-6 h-36 overflow-hidden rounded-sm bg-[#132832] p-4">
      {/* Abstract inventory header and asset icon. */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="preview-pulse h-2 w-20 rounded-full bg-[#ff745f]" />
          <div className="mt-2 h-2 w-12 rounded-full bg-white/20" />
        </div>
        <div className="preview-float grid h-9 w-9 place-items-center rounded-sm border border-white/15 text-[#ff8a78]">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
            <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5zM4 7.5l8 4.5 8-4.5M12 12v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_0.7fr_0.5fr] gap-2">
        {/* Fake table rows represent inventory records without exposing real data. */}
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="contents">
            <span className="preview-row h-5 rounded-sm bg-white/10" style={{ animationDelay: `${row * 120}ms` }} />
            <span className="preview-row h-5 rounded-sm bg-white/8" style={{ animationDelay: `${row * 120 + 80}ms` }} />
            <span className="preview-row h-5 rounded-sm bg-[#ff745f]/35" style={{ animationDelay: `${row * 120 + 160}ms` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProcurementPreview() {
  return (
    <div className="mb-6 h-36 overflow-hidden rounded-sm bg-[#132832] p-4">
      <div className="grid h-full grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
        {/* PR, CAF, and ABC are shown as connected workflow cards. */}
        {['PR', 'CAF', 'ABC'].map((label, index) => (
          <div key={label} className="contents">
            <div className="preview-card rounded-sm border border-white/12 bg-white/[0.04] p-3" style={{ animationDelay: `${index * 180}ms` }}>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-black text-[#ff8a78]">{label}</span>
                <span className="preview-pulse h-2 w-2 rounded-full bg-[#ff745f]" />
              </div>
              <div className="space-y-2">
                <div className="h-1.5 rounded-full bg-white/25" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
            {index < 2 && <span className="h-px w-5 bg-[#ff745f]/80" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function WebsitePreview() {
  return (
    <div className="mb-6 h-36 overflow-hidden rounded-sm bg-[#132832] p-4">
      {/* Browser mockup for the public BCC Rail website work. */}
      <div className="preview-browser h-full rounded-sm border border-white/12 bg-[#0c1a22]">
        <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-3">
          <span className="h-2 w-2 rounded-full bg-[#ff745f]" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-2 h-2 w-24 rounded-full bg-white/10" />
        </div>

        <div className="grid h-[calc(100%-1.75rem)] grid-cols-[0.8fr_1fr] gap-3 p-3">
          <div className="space-y-2">
            <div className="preview-pulse h-3 w-20 rounded-full bg-[#ff745f]" />
            <div className="h-2 rounded-full bg-white/20" />
            <div className="h-2 w-3/4 rounded-full bg-white/15" />
            <div className="mt-3 h-5 w-16 rounded-sm bg-[#ff745f]/45" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="preview-tile rounded-sm bg-white/10" />
            <div className="preview-tile rounded-sm bg-white/8" style={{ animationDelay: '120ms' }} />
            <div className="preview-tile rounded-sm bg-[#ff745f]/30" style={{ animationDelay: '240ms' }} />
            <div className="preview-tile rounded-sm bg-white/10" style={{ animationDelay: '360ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectPreview({ type }) {
  // Pick the visual that matches the resume item's preview key.
  if (type === 'inventory') return <InventoryPreview />
  if (type === 'procurement') return <ProcurementPreview />

  return <WebsitePreview />
}

export default ProjectPreview
