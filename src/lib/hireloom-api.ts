export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  postedDate: string;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description:
      "Build and maintain our customer-facing web applications using React, TypeScript, and modern frontend tooling. Collaborate with design and product teams to deliver exceptional user experiences.",
    postedDate: "2026-01-28",
  },
  {
    id: "2",
    title: "Backend Engineer",
    location: "Remote (US)",
    type: "Full-time",
    department: "Engineering",
    description:
      "Design, build, and scale our core backend services. Work with microservices architecture, cloud infrastructure, and help shape the technical direction of the platform.",
    postedDate: "2026-01-25",
  },
  {
    id: "3",
    title: "Product Designer",
    location: "New York, NY (On-site)",
    type: "Full-time",
    department: "Design",
    description:
      "Lead end-to-end design for key product areas. Create wireframes, prototypes, and high-fidelity designs that align with business goals and user needs.",
    postedDate: "2026-02-01",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    location: "Remote (Global)",
    type: "Full-time",
    department: "Infrastructure",
    description:
      "Manage and optimize our cloud infrastructure on AWS. Implement CI/CD pipelines, monitoring, and security best practices to ensure system reliability.",
    postedDate: "2026-01-30",
  },
  {
    id: "5",
    title: "Data Analyst",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    department: "Analytics",
    description:
      "Transform raw data into actionable insights. Build dashboards, analyze user behavior, and collaborate with stakeholders to drive data-informed decisions.",
    postedDate: "2026-02-03",
  },
  {
    id: "6",
    title: "Marketing Manager",
    location: "Remote (US)",
    type: "Full-time",
    department: "Marketing",
    description:
      "Develop and execute go-to-market strategies for our products. Manage campaigns across digital channels and drive brand awareness and lead generation.",
    postedDate: "2026-02-05",
  },
];

// Simulates fetching jobs from Hireloom backend
export const fetchJobsFromHireloom = async (): Promise<Job[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  return mockJobs;
};

// Simulates submitting application to Hireloom backend
export interface ApplicationData {
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone?: string;
  resumeFile?: File;
}

export const submitApplicationToHireloom = async (
  data: ApplicationData
): Promise<{ success: boolean; message: string }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // In production, this would POST to Hireloom's API endpoint:
  // const response = await fetch('https://api.hireloom.com/v1/applications', {
  //   method: 'POST',
  //   body: formData,
  // });

  console.log("Application submitted to Hireloom:", {
    jobId: data.jobId,
    jobTitle: data.jobTitle,
    name: data.name,
    email: data.email,
    phone: data.phone,
    resumeFileName: data.resumeFile?.name,
  });

  return {
    success: true,
    message: "Application submitted successfully!",
  };
};
