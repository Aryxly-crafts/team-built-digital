type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Props; callback?: () => void }) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fire a conversion event to whichever analytics tool is present.
 * Safe to call during SSR (no-ops) and when no script has loaded.
 */
export function trackEvent(name: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(name, { props });
    window.gtag?.("event", name, props);
  } catch {
    /* analytics must never break the page */
  }
}

export const trackCta = (channel: "email" | "whatsapp" | "telegram", location: string) =>
  trackEvent("CTA Click", { channel, location });
