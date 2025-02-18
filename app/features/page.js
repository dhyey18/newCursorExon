export default function Features() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Features
          </span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Intelligent Navigation",
              description: "Advanced AI-powered navigation systems for optimal route planning",
              icon: "🎯",
              details: ["Route optimization", "Weather integration", "Collision avoidance", "Fuel efficiency"]
            },
            {
              title: "Remote Monitoring",
              description: "24/7 real-time monitoring and control of vessel systems",
              icon: "📡",
              details: ["Real-time tracking", "System diagnostics", "Performance metrics", "Alert system"]
            },
            {
              title: "Predictive Maintenance",
              description: "AI-driven maintenance forecasting to prevent system failures",
              icon: "⚙️",
              details: ["Failure prediction", "Maintenance scheduling", "Parts inventory", "Service history"]
            },
            // Add more features as needed
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <span className="mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 