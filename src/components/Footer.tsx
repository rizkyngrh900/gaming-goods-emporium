
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerSections = [
    {
      title: 'Popular Games',
      links: [
        'World of Warcraft',
        'League of Legends',
        'Valorant',
        'FIFA 24',
        'Fortnite',
        'Counter-Strike 2'
      ]
    },
    {
      title: 'Services',
      links: [
        'Power Leveling',
        'Rank Boosting',
        'Coaching',
        'Account Trading',
        'In-Game Currency',
        'Achievement Services'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Contact Us',
        'Dispute Resolution',
        'Safety Tips',
        'How to Buy',
        'How to Sell'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Press',
        'Blog',
        'Affiliate Program',
        'Terms of Service'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-purple-100">Get the latest deals and gaming news delivered to your inbox</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <Input
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder-purple-200 rounded-r-none"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-l-none px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg">
                  <span className="text-black font-bold text-xl">G2G</span>
                </div>
                <span className="text-2xl font-bold">GameMarket</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The world's leading marketplace for gaming services. Trade safely, game better.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="my-8 bg-gray-700" />

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <span className="text-gray-400">support@gamemarket.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span className="text-gray-400">Global Support Available</span>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 GameMarket. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
