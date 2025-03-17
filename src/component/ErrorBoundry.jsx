import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const CustomErrorBoundaryUI = ({ error, resetErrorBoundary }) => {
  return (
    <div
      role="alert"
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <div className="relative max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Unexpected Error
            </h2>
            <p className="text-gray-600 text-lg">
              Oops! Something went wrong. Please try again or contact support if
              the problem persists.
            </p>
            <div className="bg-red-50 p-4 rounded-lg text-left mt-4">
              <code className="text-sm text-red-700 font-mono break-words">
                {error.message}
              </code>
            </div>
          </div>

          <button
            onClick={resetErrorBoundary}
            className="mt-6 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-medium shadow-lg hover:shadow-red-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorBoundaryUI}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
