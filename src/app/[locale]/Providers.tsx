"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import { AnimatePresence } from "framer-motion";

interface PageProps {
  children: ReactNode;
}

export default function Providers({ children }: PageProps) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as any, { key: index });
        })}
      </AnimatePresence>
    </ThemeProvider>
  );
}
