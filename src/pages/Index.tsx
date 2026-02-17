import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our platform processes data in real-time, enabling rapid decisions and seamless operations.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with global security standards to protect your data.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Infrastructure designed to scale across continents, serving millions of users worldwide.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />

        <div className="relative nexacore-container py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight">
              Join NexaCore —{" "}
              <span className="nexacore-gradient-text">Innovating the Future</span>
            </h1>

            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-xl">
              We're building the next generation of technology solutions. Join our team of innovators
              and help shape how businesses operate in the digital age.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://nexacore.hireloom1234.com/careers"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Apply Now
                <ArrowRight size={16} />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border border-background/20 text-background/90 hover:bg-background/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Why NexaCore?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We combine deep technical expertise with a passion for innovation to deliver
              solutions that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="nexacore-card p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nexacore-section">
        <div className="nexacore-container">
          <div className="nexacore-hero rounded-2xl p-10 sm:p-16 text-center relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-background relative z-10">
              Ready to Build the Future?
            </h2>
            <p className="mt-4 text-background/70 max-w-lg mx-auto relative z-10">
              Explore our current opportunities and start your journey with NexaCore.
            </p>
            <a
              href="https://nexacore.hireloom1234.com/careers"
              className="relative z-10 inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
