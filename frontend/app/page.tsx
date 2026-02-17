import Navbar from "./components/Navbar";
import ContentCard from "./components/ContentCard";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* Top cyan bar extending to right edge */}
      <div className="fixed top-0 right-0 w-[200px] h-8 bg-cyan-600 z-40"></div>
      
      <Navbar />
      <main className="pt-48 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large card on the left */}
            <ContentCard 
              size="large" 
              className="lg:col-span-2 min-h-[600px]"
              imageSrc="/systeminfo4test.png"
              headline="Omarchy set to release a major update soon"
              href="/articles/omarchy-update"
            />

            {/* Two smaller cards on the right */}
            <div className="flex flex-col gap-6">
              <ContentCard size="small" className="min-h-[288px]" />
              <ContentCard size="small" className="min-h-[288px]" />
            </div>
          </div>

          {/* Latest News Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400">
                Latest News
              </h2>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            {/* News Articles List */}
            <div className="space-y-6">
              {/* Article 1 */}
              <div className="flex gap-6 pb-6 border-b border-zinc-800">
                <div className="w-40 h-24 bg-zinc-800 flex-shrink-0">
                  {/* Placeholder for image */}
                </div>
                <div className="flex-1">
                  <p className="text-cyan-400 text-sm font-[family-name:var(--font-jersey)] mb-2">
                    VENTURE
                  </p>
                  <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100 underline mb-2 hover:text-cyan-400 transition-colors">
                    <a href="#">Have money, will travel: a16z's hunt for the next European unicorn</a>
                  </h3>
                  <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                    Anna Heim - 6 hours ago
                  </p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="flex gap-6 pb-6 border-b border-zinc-800">
                <div className="w-40 h-24 bg-zinc-800 flex-shrink-0">
                  {/* Placeholder for image */}
                </div>
                <div className="flex-1">
                  <p className="text-cyan-400 text-sm font-[family-name:var(--font-jersey)] mb-2">
                    AI
                  </p>
                  <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100 underline mb-2 hover:text-cyan-400 transition-colors">
                    <a href="#">How Ricursive Intelligence raised $335M at a $4B valuation in 4 months</a>
                  </h3>
                  <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                    Julie Bort - 8 hours ago
                  </p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="flex gap-6 pb-6 border-b border-zinc-800">
                <div className="w-40 h-24 bg-zinc-800 flex-shrink-0">
                  {/* Placeholder for image */}
                </div>
                <div className="flex-1">
                  <p className="text-cyan-400 text-sm font-[family-name:var(--font-jersey)] mb-2">
                    AI
                  </p>
                  <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100 underline mb-2 hover:text-cyan-400 transition-colors">
                    <a href="#">Flapping Airplanes on the future of AI: 'We want to try really radically different things'</a>
                  </h3>
                  <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                    Russell Brandom - 11 hours ago
                  </p>
                </div>
              </div>

              {/* Article 4 */}
              <div className="flex gap-6 pb-6">
                <div className="w-40 h-24 bg-zinc-800 flex-shrink-0">
                  {/* Placeholder for image */}
                </div>
                <div className="flex-1">
                  <p className="text-cyan-400 text-sm font-[family-name:var(--font-jersey)] mb-2">
                    AI
                  </p>
                  <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100 underline mb-2 hover:text-cyan-400 transition-colors">
                    <a href="#">Microsoft's the next European unicorn: 'I don't think OpenClaw is all that exciting'</a>
                  </h3>
                  <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                    Kyle Wiggers - 12 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mt-16 border-t border-zinc-800"></div>

          {/* Upcoming Events Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400">
                Upcoming Events
              </h2>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            {/* Events List */}
            <div className="space-y-8">
              {/* Event Group Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-100">
                  StrictlyVC 2026 Events
                </h3>
                <div className="flex flex-col items-end gap-2">
                  <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Waitlist Now
                  </button>
                  <p className="text-red-500 text-sm font-[family-name:var(--font-jersey)]">
                    Be the first to know when StrictlyVC events go live
                  </p>
                </div>
              </div>

              {/* Event 1 */}
              <div className="flex items-center justify-between pb-8 border-b border-zinc-800">
                <div className="flex-1">
                  <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-100 mb-3">
                    TechCrunch Founder Summit 2026
                  </h3>
                  <div className="flex items-center gap-4 text-zinc-400 text-lg font-[family-name:var(--font-jersey)]">
                    <span className="flex items-center gap-2">
                      <span>📍</span> Boston, Massachusetts
                    </span>
                    <span className="flex items-center gap-2">
                      <span>📅</span> June 23, 2026
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Register Now
                  </button>
                  <p className="text-red-500 text-sm font-[family-name:var(--font-jersey)]">
                    Save up to $300 with Super Early Bird rates
                  </p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex items-center justify-between pb-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-100 mb-3">
                    TechCrunch Disrupt 2026
                  </h3>
                  <div className="flex items-center gap-4 text-zinc-400 text-lg font-[family-name:var(--font-jersey)]">
                    <span className="flex items-center gap-2">
                      <span>📍</span> San Francisco, CA
                    </span>
                    <span className="flex items-center gap-2">
                      <span>📅</span> October 13 – 15, 2026
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-3">
                    <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-colors font-[family-name:var(--font-jersey)] text-lg">
                      Register Now
                    </button>
                    <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                      Exhibit Now
                    </button>
                  </div>
                  <p className="text-red-500 text-sm font-[family-name:var(--font-jersey)]">
                    Save up to $680 with limited-time Super Early Bird rates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mt-16 border-t border-zinc-800"></div>
        </div>

        {/* Top cyan bar before Newsletters - extends to screen edge */}
        <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-16">
          <div className="relative">
            <div className="absolute left-0 right-0 h-8 bg-cyan-600" style={{ marginLeft: '30%' }}></div>
            <div className="h-8"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Newsletters Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400 mb-2">
                  Newsletters
                </h2>
                <p className="text-xl text-zinc-300 font-[family-name:var(--font-jersey)]">
                  Subscribe for the industry's biggest tech news
                </p>
              </div>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 mt-8">
              {/* Newsletter Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="border border-zinc-700 rounded-lg p-6 hover:border-zinc-500 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100">
                      TechCrunch<br />Daily News
                    </h3>
                    <button className="w-8 h-8 rounded-full bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center text-white text-xl transition-colors">
                      +
                    </button>
                  </div>
                  <p className="text-zinc-400 font-[family-name:var(--font-jersey)] text-base">
                    Every weekday and Sunday, you can get the best of TechCrunch's coverage.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="border border-zinc-700 rounded-lg p-6 hover:border-zinc-500 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100">
                      Startups<br />Weekly
                    </h3>
                    <button className="w-8 h-8 rounded-full bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center text-white text-xl transition-colors">
                      +
                    </button>
                  </div>
                  <p className="text-zinc-400 font-[family-name:var(--font-jersey)] text-base">
                    Startups are the core of TechCrunch, so get our best coverage delivered weekly.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="border border-zinc-700 rounded-lg p-6 hover:border-zinc-500 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100">
                      TechCrunch<br />Week in Review
                    </h3>
                    <button className="w-8 h-8 rounded-full bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center text-white text-xl transition-colors">
                      +
                    </button>
                  </div>
                  <p className="text-zinc-400 font-[family-name:var(--font-jersey)] text-base">
                    Get the best of our coverage, delivered to your inbox every Saturday.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="border border-zinc-700 rounded-lg p-6 hover:border-zinc-500 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-[family-name:var(--font-jersey)] text-zinc-100">
                      TechCrunch<br />Mobility
                    </h3>
                    <button className="w-8 h-8 rounded-full bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center text-white text-xl transition-colors">
                      +
                    </button>
                  </div>
                  <p className="text-zinc-400 font-[family-name:var(--font-jersey)] text-base">
                    TechCrunch Mobility is your destination for transportation news and insight.
                  </p>
                </div>
              </div>

              {/* Subscription Form */}
              <div className="border border-zinc-700 rounded-lg p-6">
                <p className="text-xl font-[family-name:var(--font-jersey)] text-zinc-100 mb-4">
                  No newsletters selected.
                </p>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-transparent border-2 border-red-500 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-red-400 font-[family-name:var(--font-jersey)] text-lg mb-4"
                />
                <button className="w-full px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-zinc-400 rounded-lg transition-colors font-[family-name:var(--font-jersey)] text-lg mb-3">
                  Subscribe
                </button>
                <p className="text-sm text-zinc-500 font-[family-name:var(--font-jersey)]">
                  By submitting your email, you agree to our{' '}
                  <a href="#" className="text-cyan-400 underline hover:text-cyan-300">Terms</a>
                  {' '}and{' '}
                  <a href="#" className="text-cyan-400 underline hover:text-cyan-300">Privacy Notice</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom cyan bars after Newsletters */}
      <div className="relative overflow-hidden">
        {/* Darker cyan bar - extends from middle-left to right */}
        <div className="absolute left-0 top-0 w-[70%] h-8 bg-cyan-600"></div>
        {/* Lighter cyan bar - extends from left */}
        <div className="absolute left-0 top-8 w-[35%] h-8 bg-cyan-300"></div>
        <div className="h-16"></div>
      </div>

      <main className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Separator */}
          <div className="mt-16 border-t border-zinc-800"></div>

          {/* Video Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400">
                Video
              </h2>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            {/* Featured Video */}
            <div className="relative h-[500px] mb-4 bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer">
              {/* Video background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900"></div>
              
              {/* Play button overlay */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-cyan-600 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors z-10">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Video info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-cyan-400 text-sm font-[family-name:var(--font-jersey)] mb-3 uppercase tracking-wide">
                  STARTUPS
                </p>
                <h3 className="text-5xl font-[family-name:var(--font-jersey)] text-white mb-4 leading-tight">
                  Go-to-market strategies for an AI era
                </h3>
                <p className="text-zinc-300 text-lg font-[family-name:var(--font-jersey)] mb-4 max-w-3xl">
                  In the season finale of Build Mode, Lawrence Seyram Peterson sits down with Nana Kwesi Essel, partner and COO of GTMfund, to discuss go-to-market strategies for the AI era.
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-zinc-400 font-[family-name:var(--font-jersey)]">
                    January 8, 2026
                  </p>
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors font-[family-name:var(--font-jersey)] text-lg flex items-center gap-2">
                    Watch on YouTube
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* More Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-zinc-900 p-6 rounded-lg">
              {/* Video 1 */}
              <div className="space-y-3">
                <h4 className="text-lg font-[family-name:var(--font-jersey)] text-zinc-100 leading-tight hover:text-cyan-400 transition-colors cursor-pointer">
                  Why top talent is walking away from OpenAI and xAI
                </h4>
                <p className="text-zinc-400 text-sm font-[family-name:var(--font-jersey)]">
                  3 days ago - 37 min
                </p>
              </div>

              {/* Video 2 */}
              <div className="space-y-3">
                <h4 className="text-lg font-[family-name:var(--font-jersey)] text-zinc-100 leading-tight hover:text-cyan-400 transition-colors cursor-pointer">
                  Who will own your company's AI layer? Glean's CEO explains
                </h4>
                <p className="text-zinc-400 text-sm font-[family-name:var(--font-jersey)]">
                  Feb 11, 2026 - 28 min
                </p>
              </div>

              {/* Video 3 */}
              <div className="space-y-3">
                <h4 className="text-lg font-[family-name:var(--font-jersey)] text-zinc-100 leading-tight hover:text-cyan-400 transition-colors cursor-pointer">
                  How Elon Musk is rewriting the rules on founder power
                </h4>
                <p className="text-zinc-400 text-sm font-[family-name:var(--font-jersey)]">
                  Feb 6, 2026
                </p>
              </div>

              {/* Video 4 */}
              <div className="space-y-3">
                <h4 className="text-lg font-[family-name:var(--font-jersey)] text-zinc-100 leading-tight hover:text-cyan-400 transition-colors cursor-pointer">
                  A16z just raised $1.7B for AI infrastructure. Here's where it's going.
                </h4>
                <p className="text-zinc-400 text-sm font-[family-name:var(--font-jersey)]">
                  Feb 4, 2026 - 30 min
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mt-16 border-t border-zinc-800"></div>

          {/* Security Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400">
                Cybersecurity
              </h2>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Large security article */}
              <div className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-zinc-800">
                  {/* Placeholder for image */}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded border-2 border-white flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-[family-name:var(--font-jersey)] uppercase tracking-wide">
                      IN BRIEF
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-4xl font-[family-name:var(--font-jersey)] text-white leading-tight mb-4 hover:text-cyan-400 transition-colors">
                      Homeland Security reportedly sent hundreds of subpoenas seeking to unmask anti-ICE accounts
                    </h3>
                  </a>
                  <p className="text-zinc-300 font-[family-name:var(--font-jersey)]">
                    Anthony Ha - 2 days ago
                  </p>
                </div>
              </div>

              {/* Regular security article */}
              <div className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer bg-white">
                <div className="absolute inset-0 bg-zinc-200">
                  {/* Placeholder for image */}
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-cyan-600 text-sm font-[family-name:var(--font-jersey)] mb-3 uppercase tracking-wide">
                      CYBERSECURITY.
                    </p>
                    <a href="#">
                      <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-900 leading-tight mb-3 hover:text-cyan-600 transition-colors">
                        Indian pharmacy chain giant exposed customer data and internal systems
                      </h3>
                    </a>
                    <p className="text-zinc-600 font-[family-name:var(--font-jersey)]">
                      Jagmeet Singh - 3 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mt-16 border-t border-zinc-800"></div>

          {/* Apps Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400">
                Apps
              </h2>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Large apps article */}
              <div className="relative h-[650px] rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-zinc-800">
                  {/* Placeholder for image */}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white text-sm font-[family-name:var(--font-jersey)] mb-4 uppercase tracking-wide">
                    APPS
                  </p>
                  <a href="#">
                    <h3 className="text-4xl font-[family-name:var(--font-jersey)] text-white leading-tight mb-4 hover:text-cyan-400 transition-colors">
                      Airbnb plans to bake in AI features for search, discovery and support
                    </h3>
                  </a>
                  <p className="text-zinc-300 font-[family-name:var(--font-jersey)]">
                    Ivan Mehta - 3 days ago
                  </p>
                </div>
              </div>

              {/* Regular apps article */}
              <div className="relative h-[650px] rounded-lg overflow-hidden group cursor-pointer bg-white">
                <div className="absolute inset-0 bg-zinc-200">
                  {/* Placeholder for image */}
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-cyan-600 text-sm font-[family-name:var(--font-jersey)] mb-3 uppercase tracking-wide">
                      AI
                    </p>
                    <a href="#">
                      <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-900 leading-tight mb-3 hover:text-cyan-600 transition-colors">
                        Airbnb says a third of its customer support is now handled by AI in the US and Canada
                      </h3>
                    </a>
                    <p className="text-zinc-600 font-[family-name:var(--font-jersey)]">
                      Sarah Perez - 3 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mt-16 border-t border-zinc-800"></div>

          {/* Transportation Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400">
                Transportation
              </h2>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Large transportation article */}
              <div className="relative h-[550px] rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-zinc-800">
                  {/* Placeholder for image */}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white text-sm font-[family-name:var(--font-jersey)] mb-4 uppercase tracking-wide">
                    TRANSPORTATION
                  </p>
                  <a href="#">
                    <h3 className="text-4xl font-[family-name:var(--font-jersey)] text-white leading-tight mb-4 hover:text-cyan-400 transition-colors">
                      TechCrunch Mobility: Rivian's savior
                    </h3>
                  </a>
                  <p className="text-zinc-300 font-[family-name:var(--font-jersey)]">
                    Kirsten Korosec - 1 day ago
                  </p>
                </div>
              </div>

              {/* Regular transportation article */}
              <div className="relative h-[550px] rounded-lg overflow-hidden group cursor-pointer bg-white">
                <div className="absolute inset-0 bg-zinc-200">
                  {/* Placeholder for image */}
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-cyan-600 text-sm font-[family-name:var(--font-jersey)] mb-3 uppercase tracking-wide">
                      STARTUPS
                    </p>
                    <a href="#">
                      <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-900 leading-tight mb-3 hover:text-cyan-600 transition-colors">
                        What the Epstein files reveal about EV startups and Silicon Valley
                      </h3>
                    </a>
                    <p className="text-zinc-600 font-[family-name:var(--font-jersey)]">
                      Anthony Ha - 1 day ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mt-16 border-t border-zinc-800"></div>

          {/* Podcasts Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-6xl font-[family-name:var(--font-jersey)] text-cyan-400">
                Podcasts
              </h2>
              <button className="px-6 py-3 border-2 border-zinc-500 rounded-full text-zinc-300 hover:text-zinc-100 hover:border-zinc-400 transition-colors font-[family-name:var(--font-jersey)] text-xl flex items-center gap-2">
                See More
                <span className="text-sm">↗</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Podcast 1 - Build Mode */}
              <div className="bg-white rounded-lg overflow-hidden h-[480px] flex flex-col">
                <div className="h-[240px] bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center">
                  {/* Placeholder for podcast cover */}
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-900 mb-3">
                    Build Mode
                  </h3>
                  <p className="text-zinc-600 font-[family-name:var(--font-jersey)] text-base mb-4 flex-1">
                    Build Mode is a survival guide for early-stage founders navigating th...
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                      🎙️ 7 Episodes
                    </p>
                    <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                      Updated: Jan 8, 2026
                    </p>
                  </div>
                  <a href="#" className="text-zinc-900 font-[family-name:var(--font-jersey)] text-lg underline hover:text-cyan-600 transition-colors flex items-center gap-2">
                    Explore All
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>

              {/* Podcast 2 - Equity */}
              <div className="bg-white rounded-lg overflow-hidden h-[480px] flex flex-col">
                <div className="h-[240px] bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                  {/* Placeholder for podcast cover */}
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-900 mb-3">
                    Equity
                  </h3>
                  <p className="text-zinc-600 font-[family-name:var(--font-jersey)] text-base mb-4 flex-1">
                    Equity is TechCrunch's flagship podcast about the business of...
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                      🎙️ 1063 Episodes
                    </p>
                    <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                      Updated: Feb 13, 2026
                    </p>
                  </div>
                  <a href="#" className="text-zinc-900 font-[family-name:var(--font-jersey)] text-lg underline hover:text-cyan-600 transition-colors flex items-center gap-2">
                    Explore All
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>

              {/* Podcast 3 - StrictlyVC Download */}
              <div className="bg-white rounded-lg overflow-hidden h-[480px] flex flex-col">
                <div className="h-[240px] bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center">
                  {/* Placeholder for podcast cover */}
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-3xl font-[family-name:var(--font-jersey)] text-zinc-900 mb-3">
                    StrictlyVC Download
                  </h3>
                  <p className="text-zinc-600 font-[family-name:var(--font-jersey)] text-base mb-4 flex-1">
                    Each week, StrictlyVC's host and TechCrunch Editor-in-Chief Connie...
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                      🎙️ 54 Episodes
                    </p>
                    <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
                      Updated: Feb 3, 2026
                    </p>
                  </div>
                  <a href="#" className="text-zinc-900 font-[family-name:var(--font-jersey)] text-lg underline hover:text-cyan-600 transition-colors flex items-center gap-2">
                    Explore All
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Social */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <Logo />
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 1 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    The Peterson Project
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Staff
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Advertise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Recruit Yard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    RSS Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Epstein
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Kindle Scribe
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Reddit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    GPT-4o
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    Tech Layoffs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors font-[family-name:var(--font-jersey)] text-lg">
                    ChatGPT
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 font-[family-name:var(--font-jersey)] text-sm">
              © 2026 the-peterson-project team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
