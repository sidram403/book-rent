import { Shield, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted By Thousands',
    description: 'We have helped thousands of families find their dream homes'
  },
  {
    icon: Clock,
    title: 'Quick & Easy',
    description: 'Streamlined process to help you find properties quickly'
  },
  {
    icon: Award,
    title: 'Premium Service',
    description: 'Providing premium real estate services since 1990'
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Our agents are highly experienced professionals'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">
            Discover why we're the best choice for your real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 rounded-full bg-emerald-100 mb-4">
                <feature.icon className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}