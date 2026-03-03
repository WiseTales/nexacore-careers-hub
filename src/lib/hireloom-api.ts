const HIRELOOM_BASE = "https://hireloom1234.vercel.app";

export interface Job {
  id: string;
  title: string;
  location: string;
  salary?: string;
  job_type?: string;
  description: string;
  responsibilities?: string;
  company_name?: string;
  status?: string;
}

export interface ApplicationPayload {
  job_id: string;
  company_slug: string;
  full_name: string;
  email: string;
  phone: string;
  resume_url: string;
  cover_letter: string;
}

export async function fetchJobs(companySlug: string): Promise<Job[]> {
  const res = await fetch(`${HIRELOOM_BASE}/api/public/jobs/${companySlug}`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  const data = await res.json();
  return Array.isArray(data) ? data : data.jobs ?? [];
}

export async function submitApplication(payload: ApplicationPayload): Promise<void> {
  const res = await fetch(`${HIRELOOM_BASE}/api/public/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Failed to submit application");
  }
}
