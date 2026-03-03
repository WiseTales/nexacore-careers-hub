import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import JobCard from "@/components/JobCard";
import ApplicationModal from "@/components/ApplicationModal";
import { fetchJobs, type Job } from "@/lib/hireloom-api";

const COMPANY_SLUG = "nexacore";

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    fetchJobs(COMPANY_SLUG)
      .then(setJobs)
      .catch(() => setError("Unable to load positions right now. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = jobs.filter(
    (j) =>
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      (j.location ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (j.job_type ?? "").toLowerCase().includes(search.toLowerCase())
  );

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
              Open Positions at NexaCore
            </h1>
            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-2xl">
              We're building the future of technology. Browse our openings and apply
              directly — your application goes straight to our hiring team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by title, location, or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>
          </div>

          {/* States */}
          {loading && (
            <div className="flex justify-center py-20">
              <Loader2 size={32} className="animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center py-20 text-center">
              <AlertCircle size={40} className="text-destructive mb-4" />
              <p className="text-muted-foreground">{error}</p>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              {search ? "No positions match your search." : "No open positions right now. Check back soon!"}
            </p>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} onApply={setSelectedJob} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </Layout>
  );
};

export default Careers;
