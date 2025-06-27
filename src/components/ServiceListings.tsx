
import React, { useState } from 'react';
import { Star, Clock, Shield, Filter, Grid, List } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const ServiceListings = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  const services = [
    {
      id: 1,
      title: 'WoW Classic Level 1-60 Power Leveling',
      game: 'World of Warcraft',
      seller: 'ProGamer123',
      price: '$89.99',
      rating: 4.9,
      reviews: 1247,
      deliveryTime: '2-3 days',
      image: '/placeholder.svg',
      verified: true,
      online: true,
      tags: ['Power Leveling', 'Classic', 'Safe']
    },
    {
      id: 2,
      title: 'Valorant Radiant Rank Boost',
      game: 'Valorant',
      seller: 'EliteBooster',
      price: '$149.99',
      rating: 4.8,
      reviews: 892,
      deliveryTime: '1-2 weeks',
      image: '/placeholder.svg',
      verified: true,
      online: false,
      tags: ['Rank Boost', 'Radiant', 'Competitive']
    },
    {
      id: 3,
      title: 'FIFA 24 Ultimate Team Coins',
      game: 'FIFA 24',
      seller: 'CoinMaster',
      price: '$24.99',
      rating: 4.7,
      reviews: 2156,
      deliveryTime: '15 minutes',
      image: '/placeholder.svg',
      verified: true,
      online: true,
      tags: ['Coins', 'Ultimate Team', 'Instant']
    },
    {
      id: 4,
      title: 'League of Legends Coaching Session',
      game: 'League of Legends',
      seller: 'DiamondCoach',
      price: '$39.99',
      rating: 5.0,
      reviews: 534,
      deliveryTime: '24 hours',
      image: '/placeholder.svg',
      verified: true,
      online: true,
      tags: ['Coaching', 'Diamond', '1-on-1']
    },
    {
      id: 5,
      title: 'Fortnite Account with Rare Skins',
      game: 'Fortnite',
      seller: 'SkinCollector',
      price: '$199.99',
      rating: 4.6,
      reviews: 678,
      deliveryTime: 'Instant',
      image: '/placeholder.svg',
      verified: false,
      online: false,
      tags: ['Account', 'Rare Skins', 'OG']
    },
    {
      id: 6,
      title: 'CS2 Global Elite Boost',
      game: 'Counter-Strike 2',
      seller: 'CSPro2024',
      price: '$79.99',
      rating: 4.9,
      reviews: 945,
      deliveryTime: '3-5 days',
      image: '/placeholder.svg',
      verified: true,
      online: true,
      tags: ['Rank Boost', 'Global Elite', 'Safe']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-gray-900">Featured Services</h2>
            <p className="text-gray-600">Handpicked services from verified sellers</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <Input placeholder="Search services..." className="flex-1 min-w-64" />
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Game" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wow">World of Warcraft</SelectItem>
              <SelectItem value="valorant">Valorant</SelectItem>
              <SelectItem value="lol">League of Legends</SelectItem>
              <SelectItem value="fifa">FIFA 24</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-25">Under $25</SelectItem>
              <SelectItem value="25-50">$25 - $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="over-100">Over $100</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Service Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:scale-105">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-4xl font-bold opacity-20">
                      {service.game.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/50 text-white">{service.game}</Badge>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {service.verified && (
                      <Badge className="bg-green-500">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {service.online && (
                      <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{service.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({service.reviews})</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">by {service.seller}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListings;
