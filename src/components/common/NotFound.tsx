export default function NotFound() {
  return (
    <div className="flex  flex-col items-center justify-center text-center gap-4">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-lg text-gray-500">
        The page you are looking for does not exist.
      </p>

      <a href="/" className="px-4 py-2 bg-black text-white rounded-md">
        Go Home
      </a>
    </div>
  );
}
