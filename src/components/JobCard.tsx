import { MapPin, Clock, Building2, ArrowRight, ExternalLink } from "lucide-react";
import { getApplyUrl, type Job } from "@/lib/hireloom-api";

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  const daysAgo = Math.floor(
    (Date.now() - new Date(job.postedDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  const applyUrl = getApplyUrl(job.companySlug || "nexacore", job.id);

  return (
    <div
      className="nexacore-card p-6 group cursor-pointer hover:border-primary/50 transition-all duration-300"
      onClick={() => onApply(job)}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-accent text-accent-foreground">
              {job.department}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
              {job.type}
            </span>
          </div>

          <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-200">
            {job.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {daysAgo === 0 ? "Today" : `${daysAgo}d ago`}
            </span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {job.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 whitespace-nowrap"
          >
            Apply Now
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
