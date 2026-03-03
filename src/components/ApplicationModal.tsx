import { useState } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { submitApplication, type Job } from "@/lib/hireloom-api";

const schema = z.object({
  full_name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  resume_url: z.string().trim().url("Must be a valid URL").max(500),
  cover_letter: z.string().trim().max(2000).optional(),
});

interface Props {
  job: Job;
  onClose: () => void;
}

const ApplicationModal = ({ job, onClose }: Props) => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    resume_url: "",
    cover_letter: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      await submitApplication({
        job_id: job.id,
        company_slug: "nexacore",
        full_name: result.data.full_name,
        email: result.data.email,
        phone: result.data.phone || "",
        resume_url: result.data.resume_url,
        cover_letter: result.data.cover_letter || "",
      });
      setSuccess(true);
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-lg bg-card rounded-2xl shadow-2xl border overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">Apply for {job.title}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{job.location}</p>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
              <X size={18} className="text-muted-foreground" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">
            {success ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="mx-auto text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Application submitted successfully!
                </h3>
                <p className="text-muted-foreground text-sm">We'll be in touch soon.</p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.form && (
                  <p className="text-sm text-destructive bg-destructive/10 rounded-lg p-3">{errors.form}</p>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input
                    className={inputClass}
                    placeholder="John Doe"
                    value={form.full_name}
                    onChange={(e) => update("full_name", e.target.value)}
                  />
                  {errors.full_name && <p className="text-xs text-destructive mt-1">{errors.full_name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Resume URL *</label>
                  <input
                    type="url"
                    className={inputClass}
                    placeholder="https://drive.google.com/your-resume"
                    value={form.resume_url}
                    onChange={(e) => update("resume_url", e.target.value)}
                  />
                  {errors.resume_url && <p className="text-xs text-destructive mt-1">{errors.resume_url}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Cover Letter</label>
                  <textarea
                    className={`${inputClass} min-h-[100px] resize-y`}
                    placeholder="Tell us why you'd be a great fit..."
                    value={form.cover_letter}
                    onChange={(e) => update("cover_letter", e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ApplicationModal;
