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

// Hireloom public API base (swap for real endpoint in production)
const HIRELOOM_API_BASE = "https://api.hireloom.app";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description:
      "Build and maintain our customer-facing web applications using React, TypeScript, and modern frontend tooling. Collaborate with design and product teams to deliver exceptional user experiences.",
    responsibilities: [
      "Architect and build performant React applications",
      "Collaborate with designers and product managers",
      "Mentor junior engineers and conduct code reviews",
      "Improve CI/CD pipelines and developer tooling",
    ],
    companyName: "NexaCore",
    companySlug: COMPANY_SLUG,
    postedDate: "2026-01-28",
    status: "published",
  },
  {
    id: "2",
    title: "Backend Engineer",
    location: "Remote (US)",
    type: "Full-time",
    department: "Engineering",
    description:
      "Design, build, and scale our core backend services. Work with microservices architecture, cloud infrastructure, and help shape the technical direction of the platform.",
    responsibilities: [
      "Design and implement RESTful and GraphQL APIs",
      "Optimize database queries and data pipelines",
      "Ensure system reliability with monitoring and alerting",
      "Contribute to architectural decisions and technical roadmap",
    ],
    companyName: "NexaCore",
    companySlug: COMPANY_SLUG,
    postedDate: "2026-01-25",
    status: "published",
  },
  {
    id: "3",
    title: "Product Designer",
    location: "New York, NY (On-site)",
    type: "Full-time",
    department: "Design",
    description:
      "Lead end-to-end design for key product areas. Create wireframes, prototypes, and high-fidelity designs that align with business goals and user needs.",
    responsibilities: [
      "Own end-to-end design for key product areas",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Maintain and evolve the design system",
    ],
    companyName: "NexaCore",
    companySlug: COMPANY_SLUG,
    postedDate: "2026-02-01",
    status: "published",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    location: "Remote (Global)",
    type: "Full-time",
    department: "Infrastructure",
    description:
      "Manage and optimize our cloud infrastructure on AWS. Implement CI/CD pipelines, monitoring, and security best practices to ensure system reliability.",
    responsibilities: [
      "Manage AWS cloud infrastructure and Kubernetes clusters",
      "Build and maintain CI/CD pipelines",
      "Implement monitoring, alerting, and incident response",
      "Drive security best practices across the engineering org",
    ],
    companyName: "NexaCore",
    companySlug: COMPANY_SLUG,
    postedDate: "2026-01-30",
    status: "published",
  },
  {
    id: "5",
    title: "Data Analyst",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    department: "Analytics",
    description:
      "Transform raw data into actionable insights. Build dashboards, analyze user behavior, and collaborate with stakeholders to drive data-informed decisions.",
    responsibilities: [
      "Build and maintain dashboards and reports",
      "Analyze user behavior and product metrics",
      "Partner with stakeholders to define KPIs",
      "Develop data models and ETL processes",
    ],
    companyName: "NexaCore",
    companySlug: COMPANY_SLUG,
    postedDate: "2026-02-03",
    status: "published",
  },
  {
    id: "6",
    title: "Marketing Manager",
    location: "Remote (US)",
    type: "Full-time",
    department: "Marketing",
    description:
      "Develop and execute go-to-market strategies for our products. Manage campaigns across digital channels and drive brand awareness and lead generation.",
    responsibilities: [
      "Develop and execute multi-channel marketing campaigns",
      "Drive brand awareness and lead generation",
      "Analyze campaign performance and optimize ROI",
      "Collaborate with sales and product teams on GTM strategy",
    ],
    companyName: "NexaCore",
    companySlug: COMPANY_SLUG,
    postedDate: "2026-02-05",
    status: "published",
  },
];

// Fetch published jobs from Hireloom public API
export const fetchJobsFromHireloom = async (): Promise<Job[]> => {
  // In production, replace with:
  // const res = await fetch(`${HIRELOOM_API_BASE}/api/public/jobs?companySlug=${COMPANY_SLUG}`);
  // const data = await res.json();
  // return data.jobs;

  await new Promise((resolve) => setTimeout(resolve, 800));
  return mockJobs.filter((job) => job.status === "published");
};

// Fetch a single job by ID
export const fetchJobById = async (jobId: string): Promise<Job | null> => {
  // In production, replace with:
  // const res = await fetch(`${HIRELOOM_API_BASE}/api/public/jobs/${jobId}`);
  // if (!res.ok) return null;
  // return res.json();

  await new Promise((resolve) => setTimeout(resolve, 400));
  return mockJobs.find((job) => job.id === jobId && job.status === "published") ?? null;
};

// Build the Hireloom-hosted apply URL
export const getApplyUrl = (companySlug: string, jobId: string): string => {
  return `https://hireloom.app/apply/${companySlug}/${jobId}`;
};
