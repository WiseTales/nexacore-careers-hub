import { motion } from "framer-motion";
import { MapPin, Banknote, Clock } from "lucide-react";
import type { Job } from "@/lib/hireloom-api";

interface JobCardProps {
  job: Job;
  index: number;
  onApply: (job: Job) => void;
}

const JobCard = ({ job, index, onApply }: JobCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="nexacore-card p-6 sm:p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
  >
    <h3 className="font-display text-xl font-bold text-foreground">{job.title}</h3>

    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
      {job.location && (
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} className="text-primary" /> {job.location}
        </span>
      )}
      {job.salary && (
        <span className="inline-flex items-center gap-1.5">
          <Banknote size={14} className="text-primary" /> {job.salary}
        </span>
      )}
      {job.job_type && (
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} className="text-primary" /> {job.job_type}
        </span>
      )}
    </div>

    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
      {job.description}
    </p>

    <button
      onClick={() => onApply(job)}
      className="mt-auto self-start inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
    >
      Apply Now
    </button>
  </motion.div>
);

export default JobCard;
