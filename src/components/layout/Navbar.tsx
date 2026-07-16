import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import ThemeToggle from "../ui/ThemeToggle";
import { navLinks } from "../../data/navbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex rounded-full border border-zinc-300 p-2 transition hover:border-black md:hidden dark:border-zinc-700 dark:hover:border-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </Dialog.Trigger>

          <AnimatePresence>
            {open && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild forceMount>
                  <motion.div
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </Dialog.Overlay>

                <Dialog.Content asChild forceMount>
                  <motion.div
                    className="fixed right-0 top-0 z-50 h-screen w-[82vw] max-w-80 border-l border-zinc-200 bg-white shadow-2xl outline-none md:hidden dark:border-zinc-800 dark:bg-black"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 32,
                    }}
                  >
                    <Dialog.Title className="sr-only">
                      Navigation menu
                    </Dialog.Title>

                    <div className="flex h-[72px] items-center justify-end px-4 sm:px-6">
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Close menu"
                          className="rounded-full border border-zinc-300 p-2 transition hover:border-black dark:border-zinc-700 dark:hover:border-white"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <div className="px-6 pb-6">
                      <nav className="mt-8 flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.08 + index * 0.05,
                              duration: 0.2,
                            }}
                          >
                            <Dialog.Close asChild>
                              <a
                                href={link.href}
                                className="block text-lg font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
                              >
                                {link.label}
                              </a>
                            </Dialog.Close>
                          </motion.div>
                        ))}
                      </nav>

                      <motion.div
                        className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <ThemeToggle />
                      </motion.div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </header>
  );
}