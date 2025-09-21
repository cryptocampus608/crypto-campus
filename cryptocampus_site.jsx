import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CryptoCampus() {
  return (
    <div className="min-h-screen bg-black text-purple-100 font-sans flex flex-col items-center px-6 py-12">
      {/* Hero Section */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-purple-500 mb-8 drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        CRYPTO CAMPUS 💹
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-purple-200 max-w-2xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Welcome to our exclusive trading server! Focused on graphical analysis and building a profitable crypto community.
      </motion.p>

      {/* How it Works Section */}
      <Card className="bg-purple-950/40 border border-purple-800 rounded-xl max-w-3xl w-full mb-10">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">How It Works ⚡</h2>
          <ul className="space-y-3 text-purple-200 text-sm md:text-base">
            <li>📊 Signals & Trades – CEOs submit trades and analyses.</li>
            <li>👥 Member Participation – Everyone can share trades & insights.</li>
            <li>📈 Copy Trading – Copy trades directly from the group.</li>
            <li>📰 News – Real-time market updates.</li>
            <li>💬 Open Chat – Ask anything, we’re here to help.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Benefits Section */}
      <Card className="bg-purple-950/40 border border-purple-800 rounded-xl max-w-2xl w-full mb-10">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">🎁 Benefits</h2>
          <ul className="space-y-2 text-purple-200 text-sm md:text-base">
            <li>Exclusive giveaway for members 🎉</li>
            <li>First month <span className="text-green-400 font-bold">FREE ✅</span></li>
          </ul>
        </CardContent>
      </Card>

      {/* Pricing Section with Separate Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
        <Card className="bg-purple-950/40 border border-purple-800 rounded-xl text-center">
          <CardContent className="p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-purple-300 mb-3">Monthly</h3>
            <p className="text-purple-200 mb-4">€17,99/month</p>
            <Button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              Subscribe
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-purple-950/40 border border-purple-800 rounded-xl text-center">
          <CardContent className="p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-purple-300 mb-3">Quarterly</h3>
            <p className="text-purple-200 mb-4">€43,99 (10% off)</p>
            <Button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              Subscribe
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-purple-950/40 border border-purple-800 rounded-xl text-center">
          <CardContent className="p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-purple-300 mb-3">Annual</h3>
            <p className="text-purple-200 mb-4">€179,99 (15% off)</p>
            <Button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              Subscribe
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Community Section */}
      <Card className="bg-purple-950/40 border border-purple-800 rounded-xl max-w-3xl w-full mb-12">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Community 💬</h2>
          <ul className="space-y-2 text-purple-200 text-sm md:text-base">
            <li>📊 Signals – Real-time trading.</li>
            <li>📈 Analysis – Market research and strategies.</li>
            <li>💬 Community – Exchange ideas, learn, and grow together.</li>
            <li>⚠️ Read the 📜 rules & ❓ how-it-works channels first.</li>
          </ul>
          <p className="mt-4 text-purple-300 text-sm">👉 Our mission is to grow together and maintain a healthy, profitable community.</p>
          <p className="mt-2 text-purple-400 font-semibold">Happy trading! 💰🔥</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="text-center text-xs text-purple-400 py-6 mt-12 border-t border-purple-800">
        © {new Date().getFullYear()} CRYPTO CAMPUS — All rights reserved
      </footer>
    </div>
  );
}
