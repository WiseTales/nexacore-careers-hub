import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import JobCard from "@/components/JobCard";
import { fetchJobsFromHireloom, getApplyUrl, type Job } from "@/lib/hireloom-api";

const Careers = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobsFromHireloom();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleApply = (job: Job) => {
    const url = getApplyUrl(job.companySlug || "nexacore", job.id);
    window.open(url, "_blank");
  };
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
              Join a team of passionate builders. We're looking for talented individuals who want to
              make a real impact on how businesses operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Jobs */}
      <section className="nexacore-section nexacore-grid-bg">
        <div className="nexacore-container">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${selectedDepartment === dept
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <Briefcase size={16} />
            <span>
              {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} available
            </span>
          </div>

          {/* Job List */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive font-medium">Failed to fetch jobs. Please try again later.</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed rounded-xl border-muted/20">
              <p className="text-xl font-medium text-foreground">No positions available.</p>
              <p className="text-muted-foreground mt-2">Check back later or follow our updates.</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <JobCard job={job} onApply={handleApply} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No positions match your search. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Careers;

