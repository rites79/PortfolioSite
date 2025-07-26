import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Go Home
        </button>
      </Link>
    </div>
  );
}