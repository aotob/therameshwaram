import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-gold mb-4">THE RAMESHWARAM</h2>
            <p className="text-gray-400 max-w-md mb-6">
              Bhopal's premier luxury wedding and event planner. We turn your dreams into unforgettable experiences with elegance and perfection.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Placeholders */}
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-gold">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-gold">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-gold">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bhopal, Madhya Pradesh, India</li>
              <li>+91 98765 43210</li>
              <li>info@therameshwaram.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Rameshwaram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
