// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="block mb-8">
              <Image
                src="/assets/images/codesk.png"
                alt="Codesk"
                width={160}
                height={60}
                className="h-12 sm:h-14 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Premium shared office spaces designed for professionals who demand excellence. Enterprise-grade workspaces for serious business.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-600 mb-8">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Services</Link></li>
              <li><Link href="/about" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/locations" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Locations</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-600 mb-8">Locations</h3>
            <ul className="space-y-4">
              <li><Link href="/locations/dhaka" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Dhaka Division</Link></li>
              <li><Link href="/locations/chittagong" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Chittagong</Link></li>
              <li><Link href="/locations/sylhet" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Sylhet</Link></li>
              <li><Link href="/locations/rajshahi" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">Rajshahi</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-600 mb-8">Contact</h3>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@codesk.com" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">
                  hello@codesk.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+8801234567890" className="text-sm text-gray-700 hover:text-[#8BC53F] transition-colors duration-300">
                  +880 (1) 2345-67890
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Address</p>
                <p className="text-sm text-gray-700">
                  Nārāyanganj<br />
                  Dhaka Division, Bangladesh
                </p>
              </div>

              {/* Social Icons - Restrained & Professional */}
              <div className="flex space-x-3 pt-2">
                {[
                  { href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', name: 'Facebook' },
                  { href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', name: 'Twitter' },
                  { href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', name: 'LinkedIn' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-gray-200 hover:bg-[#8BC53F] text-gray-600 hover:text-white rounded-md flex items-center justify-center transition-all duration-300 flex-shrink-0"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Institutional & Minimal */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-8">
          <p className="text-center text-xs text-gray-500">
            © {currentYear} Codesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}