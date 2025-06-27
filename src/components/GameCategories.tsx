
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GameCategories = () => {
  const categories = [
    {
      name: 'MMORPG',
      image: '/placeholder.svg',
      count: '2,341',
      trending: true,
      games: ['World of Warcraft', 'Final Fantasy XIV', 'Lost Ark']
    },
    {
      name: 'MOBA',
      image: '/placeholder.svg',
      count: '1,892',
      trending: true,
      games: ['League of Legends', 'Dota 2', 'Heroes of the Storm']
    },
    {
      name: 'FPS',
      image: '/placeholder.svg',
      count: '3,567',
      trending: false,
      games: ['Valorant', 'CS2', 'Overwatch 2']
    },
    {
      name: 'Sports',
      image: '/placeholder.svg',
      count: '987',
      trending: false,
      games: ['FIFA 24', 'NBA 2K24', 'Madden NFL 24']
    },
    {
      name: 'Battle Royale',
      image: '/placeholder.svg',
      count: '2,156',
      trending: true,
      games: ['Fortnite', 'PUBG', 'Apex Legends']
    },
    {
      name: 'Mobile Games',
      image: '/placeholder.svg',
      count: '4,321',
      trending: false,
      games: ['Mobile Legends', 'PUBG Mobile', 'Clash of Clans']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover services across your favorite gaming genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:scale-105">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {category.name.charAt(0)}
                    </div>
                  </div>
                  {category.trending && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                      Trending
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    <Badge variant="secondary" className="text-sm">
                      {category.count} services
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {category.games.map((game, gameIndex) => (
                      <div key={gameIndex} className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        • {game}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
