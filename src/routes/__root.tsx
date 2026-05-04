import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-gradient-gold">404</h1>
        <h2 className="mt-4 text-2xl font-display">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury hover:scale-105 transition-transform">Return Home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shaarav Global Ventures — Premium Indian Spice Exporter" },
      { name: "description", content: "Premium whole and powdered Indian spices exported globally. Pure flavors, ethical sourcing, world-class quality from Shaarav Global Ventures." },
      { name: "author", content: "Shaarav Global Ventures" },
      { property: "og:title", content: "Shaarav Global Ventures — Premium Indian Spice Exporter" },
      { property: "og:description", content: "Pure flavors. Global reach. Authentic Indian spices for the world's finest kitchens." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
