const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-blue-600/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Stay Updated with Crypto Trends
          </h3>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white">CT</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CoinTracker
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Empowering investors with real-time cryptocurrency data and market
              insights since 2020.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                support@cointracker.com
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +1 (800) 123-4567
              </div>
            </div>
          </div>

          {/* Market Tools */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">
              Market Tools
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  <span className="bg-gray-800 p-1 rounded">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  Live Market Analysis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  <span className="bg-gray-800 p-1 rounded">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>
                  Advanced Charts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  <span className="bg-gray-800 p-1 rounded">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Portfolio Tracker
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Apps */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Mobile Apps</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-xl transition-all duration-300 w-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.736-1.48 3.49-2.94 1.214-1.73 1.715-3.394 1.746-3.484-.039-.013-3.65-1.386-3.697-5.426-.033-3.387 2.774-5.013 2.907-5.077-1.594-2.33-4.064-2.586-4.936-2.644-2.246-.17-4.355 1.271-5.55 1.271zm-1.024-3.815c1.476-1.786 3.355-3.09 3.834-3.081.031.015 1.622.65 2.586 2.363-.069.044-1.794 1.157-3.078 3.082-.019.027-.038.054-.057.08-.4-.112-1.09-.32-1.979-.32-.883 0-1.522.196-1.886.32-.018-.027-.038-.054-.057-.081-1.247-1.897-2.873-3.023-3.546-3.038.045-.003 3.509.003 5.213 3.594z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-xl transition-all duration-300 w-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.77 1.24A.723.723 0 011.046.279l15.734 14.49a.722.722 0 01-.238 1.199L9.58 18.894l-2.854 4.098a.725.725 0 01-1.204.074L1.77 1.24zM23.498 5.316L7.35 19.777l10.12-3.007a.723.723 0 01.766.18l5.435 5.864a.724.724 0 01-.23 1.136l-3.29 1.438a.725.725 0 01-.93-.34l-8.49-15.95 15.646-9.404a.723.723 0 011.05.216l.002.003a.723.723 0 01-.14.915zM.262 23.897a.724.724 0 01-.234-1.002L5.89 13.68l2.8 5.264-8.428 5.953z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Follow Us</h4>
              <div className="flex gap-4">
                {["twitter", "github", "linkedin", "facebook"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="p-2.5 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor">
                        <use href={`/sprite.svg#${platform}`} />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Legal</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Privacy Policy",
                  "Terms of Use",
                  "Cookie Policy",
                  "Disclaimer",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm text-gray-400">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                <span className="text-sm text-gray-400">Secure Platform</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {["visa", "mastercard", "bitcoin", "ethereum"].map((payment) => (
                <div
                  key={payment}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor">
                    <use href={`/payment-icons.svg#${payment}`} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CoinTracker. All rights reserved.
            <span className="mx-2">|</span>
            Market data provided by CoinGecko API
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
