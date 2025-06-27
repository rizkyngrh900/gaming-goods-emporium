
import React from 'react';
import { Shield, CreditCard, Headphones, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Advanced encryption and fraud protection keep your payments safe',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: CreditCard,
      title: 'Buyer Protection',
      description: 'Money-back guarantee if service is not delivered as promised',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support in multiple languages',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Award,
      title: 'Verified Sellers',
      description: 'All sellers go through strict verification process',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Trusted by millions of gamers worldwide',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Most services delivered within 24 hours',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Gamers Trust Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most secure and reliable platform for gaming services, 
            trusted by over 2 million users worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2M+</div>
              <div className="text-purple-200">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50M+</div>
              <div className="text-purple-200">Completed Orders</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-purple-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
