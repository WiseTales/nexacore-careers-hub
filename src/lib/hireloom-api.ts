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

// Default company slug for NexaCore
const COMPANY_SLUG = "nexacore";

/**
 * Note: We are using process.env as requested. 
 * For Vite environments, you may need to define process.env in vite.config.ts 
 * or use import.meta.env.VITE_HIRELOOM_BASE_URL.
 */
const getBaseUrl = () => {
  // Try to get from process.env (Next.js style) or import.meta.env (Vite style)
  const url = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_HIRELOOM_BASE_URL) || 
              (import.meta as any).env?.VITE_HIRELOOM_BASE_URL || 
              "https://api.hireloom.app";
  return url.replace(/\/$/, ""); // Remove trailing slash if any
};

// Fetch published jobs from Hireloom public API
export const fetchJobsFromHireloom = async (): Promise<Job[]> => {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/public/jobs?companySlug=${COMPANY_SLUG}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.statusText}`);
    }
    const data = await res.json();
    // Assuming Hireloom returns { jobs: Job[] } or a direct array
    return Array.isArray(data) ? data : data.jobs || [];
  } catch (error) {
    console.error("Hireloom API Error:", error);
    return [];
  }
};

// Fetch a single job by ID
export const fetchJobById = async (jobId: string): Promise<Job | null> => {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/public/jobs/${jobId}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch job details: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Hireloom API Error:", error);
    return null;
  }
};

// Build the Hireloom-hosted apply URL
export const getApplyUrl = (companySlug: string, jobId: string): string => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/apply/${companySlug}/${jobId}`;
};

