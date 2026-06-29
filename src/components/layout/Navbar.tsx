import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight transition hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Portfolio<span className="text-zinc-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex rounded-full border border-zinc-300 p-2 transition hover:border-black md:hidden dark:border-zinc-700 dark:hover:border-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" />

            <Dialog.Content className="fixed right-0 top-0 z-50 h-screen w-[82vw] max-w-80 border-l border-zinc-200 bg-white p-6 shadow-2xl outline-none md:hidden dark:border-zinc-800 dark:bg-black">
              <Dialog.Close asChild>
                <div className="flex justify-end">
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="rounded-full border border-zinc-300 p-2 transition hover:border-black dark:border-zinc-700 dark:hover:border-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </Dialog.Close>

              <nav className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Dialog.Close asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </Dialog.Close>
                ))}
              </nav>

              <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <ThemeToggle />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
