import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { subscribeToNewsletter } from "@/lib/supabase-store";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribing(true);

    try {
      await subscribeToNewsletter(email.trim().toLowerCase());
      toast.success("🎉 Subscribed successfully!");
      setEmail("");
    } catch (err: any) {
      if (err?.code === "23505") {
        toast.error("You're already subscribed.");
      } else {
        toast.error("Subscription failed. Please try again.");
      }
    }

    setSubscribing(false);
  };

  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4">

        {/* Newsletter Section */}
        <div className="mb-12 p-6 rounded-xl border border-border bg-muted/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-bash tracking-wider neon-text mb-1">
                Subscribe to our Newsletter
              </h3>
              <p className="text-bash text-muted-foreground max-w-md">
                Get updates on new projects, tech insights, and startup stories.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 text-bash rounded-md bg-background border border-border focus:outline-none focus:border-primary w-full md:w-64"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="px-4 py-2 text-xs bg-primary text-primary-foreground rounded-md hover:opacity-90 transition disabled:opacity-50"
              >
                {subscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Tech-Venture" className="w-8 h-8" />
              <span className="font-display text-xl neon-text tracking-wider">
                TECH-VENTURE
              </span>
            </div>
            <p className="text-bash text-muted-foreground max-w-xs">
              A young startup building bold digital experiences with passion and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-accent text-xl text-primary tracking-wider uppercase mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-1">
              {["/services", "/projects", "/about", "/blogs", "/faqs", "/contact"].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className="text-bash text-muted-foreground hover:text-primary transition-colors py-1 capitalize"
                >
                  {path.slice(1)}
                </Link>
              ))}
            </div>
          </div>

{/* Contact Section */}
<div>
  <p className="font-accent text-xl text-primary tracking-wider uppercase mb-4">
    Contact
  </p>

  <div className="flex items-center gap-5">

    {/* Email */}
    <a
      href="mailto:techventure04@gmail.com"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Mail className="w-5 h-5" />
    </a>

    {/* Phone */}
    <a
      href="tel:+919328621177"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Phone className="w-5 h-5" />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/919328621177"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-green-500 transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-pink-500 transition-colors"
    >
      <Instagram className="w-5 h-5" />
    </a>

    {/* Facebook */}
    <a
      href="https://facebook.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-blue-600 transition-colors"
    >
      <Facebook className="w-5 h-5" />
    </a>

  </div>
</div>

        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-center gap-1 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Tech-Venture. All rights reserved.
          </p>
          <Link
            to="/admin"
            className="text-muted-foreground/20 hover:text-primary/40 transition-colors duration-700 text-xs select-none"
          >
            ⚙
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
