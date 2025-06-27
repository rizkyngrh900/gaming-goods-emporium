
import React from 'react';
import { Search, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '2M+' },
    { icon: TrendingUp, label: 'Transactions', value: '50M+' },
    { icon: Shield, label: 'Security Rating', value: '99.9%' },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Game On!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Your ultimate destination for gaming services, accounts, and in-game items. 
            Trade safely with millions of gamers worldwide.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <Input
                placeholder="Search for your favorite game..."
                className="pl-12 pr-32 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-6">
                Search
              </Button>
            </div>
          </div>

          {/* Popular Games */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['World of Warcraft', 'League of Legends', 'Valorant', 'FIFA 24', 'Fortnite', 'CS2'].map((game) => (
              <Button
                key={game}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                {game}
              </Button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
