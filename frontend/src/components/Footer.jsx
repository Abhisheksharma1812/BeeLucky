 export default function Footer() {
   return (
 <footer id="contact" className=" bg-gray-950 text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Newsletter */}
        <div className="contact-form relative  text-center   -mt-20 p-8 shadow-lg mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            To Get Updated  <span className="text-pink-500">Subscribe Now!</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-lg w-full sm:w-96 text-black outline-none"
            />
            <button className="px-6 py-3 bg-green-500 hover:bg-green-400 rounded-lg font-bold transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center  pt-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">🎮 GameVerse</h3>
            <p className="text-sm text-gray-400">© 2025 GameVerse. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="#home" className="hover:text-pink-400">Home</a>
            <a href="#games" className="hover:text-pink-400">Games</a>
            <a href="#about" className="hover:text-pink-400">About us</a>
            {/*<a href="#terms" className="hover:text-pink-400">Terms of Service</a> */}
          </div>

          {/* Social Icons 
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-pink-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-pink-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>*/}
        </div>
      </div>
    </footer>    
   );
 }