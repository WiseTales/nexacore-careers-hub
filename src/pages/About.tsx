import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Lightbulb, Rocket } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We challenge the status quo and embrace creative thinking to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Great products are built by great teams. We foster open communication and mutual respect.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description: "Every decision starts with the customer. We measure success by the value we deliver.",
  },
  {
    icon: Rocket,
    title: "Bias for Action",
    description: "We move fast, ship often, and learn from every iteration to stay ahead of the curve.",
  },
];

const About = () => {
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
              About NexaCore
            </h1>
            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-2xl">
              Founded in 2021, NexaCore is a technology company on a mission to simplify enterprise
              operations through intelligent, scalable software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NexaCore was born from a simple observation: businesses spend too much time
                  wrestling with fragmented tools and outdated systems. Our founders—engineers
                  and product leaders from leading tech companies—set out to build a unified
                  platform that just works.
                </p>
                <p>
                  Today, we serve hundreds of companies across industries, from fast-growing
                  startups to Fortune 500 enterprises. Our platform processes millions of
                  transactions daily, helping teams focus on what matters most: building
                  exceptional products and experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { stat: "200+", label: "Enterprise clients" },
                { stat: "50M+", label: "Transactions/day" },
                { stat: "150+", label: "Team members" },
                { stat: "99.99%", label: "Uptime SLA" },
              ].map((item) => (
                <div key={item.label} className="nexacore-card p-6 text-center">
                  <div className="font-display text-3xl font-bold text-primary">{item.stat}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="nexacore-section">
        <div className="nexacore-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="nexacore-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses of every size with intelligent, intuitive technology that
                eliminates operational friction and accelerates growth. We believe the best software
                should feel invisible—working seamlessly so teams can focus on innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="nexacore-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where technology adapts to people—not the other way around. We envision a
                future where every organization, regardless of scale, has access to enterprise-grade
                tools that are powerful yet simple to use.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we build and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="nexacore-card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
