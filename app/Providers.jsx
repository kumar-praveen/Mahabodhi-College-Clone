"use client";

import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function RouteLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {children}

      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-2 bg-white/90 dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <Loader2 className="animate-spin h-10 w-10 text-primary" />
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Loading...
            </p>
          </div>
        </div>
      )}
    </>
  );
}
