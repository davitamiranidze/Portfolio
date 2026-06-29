export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-6 sm:py-8 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs leading-6 text-zinc-600 sm:text-sm dark:text-zinc-500">
          © {new Date().getFullYear()} Daviti Amiranidze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
