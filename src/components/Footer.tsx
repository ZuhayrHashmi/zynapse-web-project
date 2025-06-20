import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zd-teal-dark text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-display font-bold text-zd-teal-light">Zynapse</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming business through Agentic AI solutions. 
              Expert AI consultancy for intelligent automation and data-driven decision making.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Agentic AI Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Business Intelligence</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">AI Consultancy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#articles" className="text-gray-300 hover:text-white transition-colors">Articles</a></li>
              <li><a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Zynapse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
