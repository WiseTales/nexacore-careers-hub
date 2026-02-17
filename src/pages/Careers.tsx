import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="nexacore-hero py-24 sm:py-32">
        <div className="nexacore-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-background">
              Careers at NexaCore
            </h1>
            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-2xl">
              We're building the future of technology solutions. Join our team of innovators
              and help shape how businesses operate in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Redirect Section */}
      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="nexacore-card p-10 sm:p-16 text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-primary" size={32} />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Ready to make an impact? Click the button below to view our open positions
              on our official career portal and start your journey with NexaCore.
            </p>
            <a
              href="https://hireloom1234.vercel.app/careers/nexacore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/25"
            >
              Apply Now
              <ExternalLink size={20} />
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              You will be redirected to our external career portal.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
