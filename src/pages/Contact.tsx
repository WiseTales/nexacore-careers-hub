import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-2xl">
              Have questions about NexaCore? We'd love to hear from you. Reach out and our team
              will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email Us",
                detail: "hello@nexacore.io",
                sub: "We respond within 24 hours",
              },
              {
                icon: Phone,
                title: "Call Us",
                detail: "+1 (555) 123-4567",
                sub: "Mon-Fri, 9am-6pm PST",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                detail: "123 Innovation Blvd",
                sub: "San Francisco, CA 94105",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="nexacore-card p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-foreground font-medium">{item.detail}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
