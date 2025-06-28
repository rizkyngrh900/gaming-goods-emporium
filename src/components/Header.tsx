
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, Bell, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg">
              <span className="text-black font-bold text-xl">GGE</span>
            </div>
            <span className="hidden md:block text-xl font-bold">Gaming Goods Emporium</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search games, services, accounts..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Browse</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Sell</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Support</a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-xs">3</Badge>
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <MessageCircle className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-green-500 text-xs">2</Badge>
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-blue-500 text-xs">1</Badge>
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="hidden lg:block">John Doe</span>
                </div>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(true)}>
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600">
                  Join Now
                </Button>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search games, services..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="hover:text-yellow-400 transition-colors">Browse</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Sell</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Support</a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
