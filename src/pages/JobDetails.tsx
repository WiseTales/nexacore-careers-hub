import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Briefcase, Building2, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { fetchJobById, getApplyUrl, type Job } from "@/lib/hireloom-api";

const JobDetails = () => {
  const { companySlug, jobId } = useParams<{ companySlug: string; jobId: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!jobId) return;
      try {
        const data = await fetchJobById(jobId);
        setJob(data);
      } catch (err) {
        console.error("Failed to load job:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [jobId]);

  if (loading) {
    return (
      <Layout>
        <section className="nexacore-section">
          <div className="nexacore-container max-w-3xl">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-secondary rounded w-1/4" />
              <div className="h-8 bg-secondary rounded w-2/3" />
              <div className="h-4 bg-secondary rounded w-1/2" />
              <div className="h-32 bg-secondary rounded" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!job) {
    return (
      <Layout>
        <section className="nexacore-section">
          <div className="nexacore-container max-w-3xl text-center py-20">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Position Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              This job may have been filled or removed.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft size={16} />
              Back to all positions
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const applyUrl = getApplyUrl(companySlug || job.companySlug || "nexacore", job.id);

  return (
    <Layout>
      {/* Hero */}
      <section className="nexacore-hero py-20 sm:py-28">
        <div className="nexacore-container relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 text-sm text-background/60 hover:text-background/90 mb-6 transition-colors"
            >
              <ArrowLeft size={14} />
              All Positions
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-background">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-background/70">
              {job.companyName && (
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={14} />
                  {job.companyName}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={14} />
                {job.type}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Description */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                About This Role
              </h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Responsibilities
                </h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Details */}
            <div className="nexacore-card p-6">
              <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                Job Details
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Department</dt>
                  <dd className="font-medium text-foreground mt-0.5">{job.department}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Employment Type</dt>
                  <dd className="font-medium text-foreground mt-0.5">{job.type}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-foreground mt-0.5">{job.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Posted</dt>
                  <dd className="font-medium text-foreground mt-0.5">
                    {new Date(job.postedDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Apply CTA */}
            <div className="text-center pt-4">
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
              >
                Apply on Hireloom
                <ExternalLink size={16} />
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                You'll be redirected to Hireloom to complete your application.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetails;
