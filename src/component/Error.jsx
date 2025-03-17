import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const isComponentError = error && error.message && !error.status;

  return (
    <div
      role="alert"
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          {isComponentError
            ? "Application Error"
            : `HTTP ${error.status || "Error"}`}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {isComponentError
            ? error.message
            : error.statusText || "Unknown error occurred"}
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
