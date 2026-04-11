import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-heading text-8xl text-copper-500 font-light mb-4">404</p>
        <h1 className="font-heading text-2xl text-charcoal-900 font-light mb-3">
          Page not found
        </h1>
        <p className="text-charcoal-500 text-sm font-light mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/30 px-8 py-3 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
