// Hireloom Integration Configuration
const HIRELOOM_URL = (import.meta as any).env?.VITE_HIRELOOM_BASE_URL || "https://hireloom-official.vercel.app";
const COMPANY_SLUG = "nexacore";

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities?: string[];
  companyName?: string;
  companySlug?: string;
  postedDate: string;
  status: "published" | "draft" | "closed";
}

/**
 * Fetch published jobs specifically for Nexacore from local API proxy.
 * This avoids CORS by using a server-side route.
 */
export const fetchJobsFromHireloom = async (): Promise<Job[]> => {
  try {
    const res = await fetch("/api/hireloom-jobs");
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.statusText}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : data.jobs || [];
  } catch (error) {
    console.error("Hireloom Proxy Fetch Error:", error);
    return [];
  }
};

/**
 * Fetch a single job by ID (Optional, kept for internal details if needed)
 */
export const fetchJobById = async (jobId: string): Promise<Job | null> => {
  const url = `${HIRELOOM_URL}/api/jobs/details/${jobId}`; // Simplified pattern

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Hireloom Job Details Error:", error);
    return null;
  }
};

/**
 * Build the Hireloom redirect URL for application.
 * New pattern: /company/[companySlug]/[jobId]
 */
export const getApplyUrl = (companySlug: string, jobId: string): string => {
  return `${HIRELOOM_URL}/company/${companySlug}/${jobId}`;
};


