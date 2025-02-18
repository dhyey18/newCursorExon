import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-5xl mx-auto">
        {/* Social Proof Section - Fade in from top */}
        <div className="flex items-center gap-2 mb-4 animate-fade-in-down">
          <div className="flex -space-x-2">
            {/* Avatars with staggered animation */}
            <div className="w-8 h-8 rounded-full bg-gray-300 animate-slide-in-left" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-8 h-8 rounded-full bg-gray-400 animate-slide-in-left" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-8 h-8 rounded-full bg-gray-500 animate-slide-in-left" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 animate-pulse">
              {"★".repeat(5)}
            </div>
            <span className="text-sm text-gray-600">loved by 1,000+ users</span>
          </div>
        </div>

        {/* Hero Section with Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Centralize your
              <br />
              <span className="relative">
                digital life
                <div className="absolute bottom-2 -z-10 w-full h-4 bg-blue-200/60 animate-width-expand"></div>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Gather your links, documents, and digital resources in one beautiful hub. 
              Your personal command center for everything online!
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center w-full sm:w-auto bg-white border rounded-full p-2 pr-0 flex-1 sm:flex-initial hover:shadow-lg transition-shadow duration-300">
                <span className="text-gray-400 px-3">centralhub.io/</span>
                <input
                  type="text"
                  placeholder="username"
                  className="flex-1 outline-none px-2"
                />
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  Claim
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Preview Card */}
          <div className="relative animate-float">
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
              {/* Profile Header */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full mb-4 relative overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center animate-pulse-slow">
                  <span className="text-white text-4xl font-semibold">D</span>
                </div>
                <h2 className="text-2xl font-bold animate-fade-in" style={{ animationDelay: '1s' }}>Dhyey Patel</h2>
                <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '1.1s' }}>Full Stack Developer</p>
                <p className="text-sm text-gray-500 mt-1 animate-fade-in" style={{ animationDelay: '1.2s' }}>Building amazing things with code</p>
              </div>

              {/* Social Links with hover animations */}
              <div className="flex justify-center gap-4 mb-8">
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#0077B5]/10 flex items-center justify-center hover:bg-[#0077B5]/20 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-[#0077B5]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#E4405F]/10 flex items-center justify-center hover:bg-[#E4405F]/20 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a href="#" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#333]/10 flex items-center justify-center hover:bg-[#333]/20 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-[#333]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
              </div>

              {/* Link Buttons with hover effect */}
              <div className="space-y-3">
                <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-[1.02] transform">
                  My Portfolio
                </button>
                <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] transform">
                  Latest Project
                </button>
                <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-[1.02] transform">
                  Contact Me
                </button>
              </div>

              {/* Featured Content */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <h3 className="font-medium mb-2">Featured Content</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-video bg-gray-200 rounded-lg"></div>
                  <div className="aspect-video bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Preview */}
        <div className="relative">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="font-semibold">Your Hub</h3>
                    <p className="text-sm text-gray-500">Organize everything in one place</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-100 rounded-lg p-3">Links</div>
                  <div className="bg-blue-100 rounded-lg p-3">Documents</div>
                  <div className="bg-green-100 rounded-lg p-3">Social Media</div>
                  <div className="bg-yellow-100 rounded-lg p-3">Resources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Banner with slide-in animation */}
      <div className="fixed bottom-0 left-0 right-0 bg-amber-100 py-4 animate-slide-in-up">
        <div className="max-w-4xl mx-auto flex justify-around items-center text-sm font-medium">
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 bg-amber-200 rounded-full"></span>
            FULLY CUSTOMIZABLE
          </span>
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 bg-amber-200 rounded-full"></span>
            INSTANT SETUP
          </span>
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 bg-amber-200 rounded-full"></span>
            POWERFUL FEATURES
          </span>
        </div>
      </div>
    </div>
  );
}
