import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-heading font-bold text-8xl gradient-text mb-4">404</p>
        <h1 className="font-heading font-bold text-2xl tracking-tight text-gray-900 mb-3">
          Page not found
        </h1>
        <p className="text-muted mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
          style={{ color: '#ffffff' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
