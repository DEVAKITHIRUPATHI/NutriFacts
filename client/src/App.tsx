import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/contexts/AppContext";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShoppingCart } from "@/components/cart/ShoppingCart";
import { OfflineBanner } from "@/components/layout/OfflineBanner";

import Home from "@/pages/home";
import Foods from "@/pages/foods";
import Nutrition from "@/pages/nutrition";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <OfflineBanner />
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-6">
        {children}
      </main>
      <Footer />
      <ShoppingCart />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => (
        <Layout>
          <Home />
        </Layout>
      )} />
      <Route path="/foods" component={() => (
        <Layout>
          <Foods />
        </Layout>
      )} />
      <Route path="/nutrition" component={() => (
        <Layout>
          <Nutrition />
        </Layout>
      )} />
      <Route path="/about" component={() => (
        <Layout>
          <About />
        </Layout>
      )} />
      {/* Fallback to 404 */}
      <Route component={() => (
        <Layout>
          <NotFound />
        </Layout>
      )} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <CartProvider>
          <Router />
          <Toaster />
        </CartProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
