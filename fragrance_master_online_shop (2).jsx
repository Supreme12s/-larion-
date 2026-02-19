import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productsData = [
  {
    id: 1,
    name: "Imperial Noir",
    price: 129.99,
    description: "Deep oud, black pepper, and smoked vanilla.",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
  },
  {
    id: 2,
    name: "Velvet Elixir",
    price: 119.99,
    description: "Soft jasmine, golden amber, and sandalwood.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de"
  },
  {
    id: 3,
    name: "Royal Obsession",
    price: 149.99,
    description: "Saffron, dark rose, and warm musk.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f"
  }
];

// Luxury Logo Component for Élarion
function ElarionLogo({ size = 40 }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFD700, #C9A227, #FFF3B0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "black",
          fontSize: size * 0.5,
          boxShadow: "0 0 30px rgba(255,215,0,0.6)"
        }}
      >
        É
      </motion.div>
      <span className="tracking-[0.3em] font-extralight text-lg">ÉLARION</span>
    </div>
  );
}

export default function ElarionLuxury() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [scrolled, setScrolled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setShowIntro(false), 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (!form.name || !form.email || !form.address) return;
    alert("Order placed successfully! (Demo Mode)");
    setCart([]);
    setCheckoutOpen(false);
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black text-white font-light tracking-wide">

      {/* Élarion Luxury Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-center"
            >
              <div
                className="mx-auto mb-6"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FFD700, #C9A227, #FFF3B0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 50,
                  color: "black",
                  boxShadow: "0 0 60px rgba(255,215,0,0.8)"
                }}
              >
                É
              </div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="text-5xl tracking-[0.6em] font-extralight"
              >
                ÉLARION
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <div className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <ElarionLogo />
          <div className="flex items-center gap-6">
            <ShoppingCart />
            <span className="text-yellow-500 font-medium">${total.toFixed(2)}</span>
            <Button
              className="bg-yellow-500 text-black rounded-full px-6"
              onClick={() => setCheckoutOpen(true)}
              disabled={cart.length === 0}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover scale-105"
          src="https://cdn.coverr.co/videos/coverr-perfume-bottle-5794/1080p.mp4"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-7xl font-extralight tracking-[0.4em]"
          >
            ÉLARION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="mt-8 text-zinc-300 text-lg tracking-[0.3em]"
          >
            POWER • ELEGANCE • LEGACY
          </motion.p>

          <Button
            className="mt-12 bg-yellow-500 text-black rounded-full px-10 py-4 text-lg"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            Discover Collection
          </Button>
        </div>
      </div>

      {/* Shop */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-extralight tracking-[0.3em]">EXCLUSIVE COLLECTION</h2>
        </div>

        <div className="flex justify-center mb-16">
          <Input
            placeholder="Search fragrance..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md bg-zinc-900 border-zinc-800 text-white rounded-full px-6"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {filteredProducts.map((product) => (
            <motion.div key={product.id} whileHover={{ y: -10 }}>

              <Card className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden">

                <img src={product.image} className="w-full h-80 object-cover" />

                <CardContent className="p-8 text-center">

                  <h3 className="text-2xl mb-3">{product.name}</h3>

                  <p className="text-zinc-400 mb-6">{product.description}</p>

                  <span className="text-yellow-500 text-lg block mb-4">
                    ${product.price.toFixed(2)}
                  </span>

                  <Button
                    className="bg-yellow-500 text-black rounded-full px-8"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>

                </CardContent>

              </Card>

            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
}