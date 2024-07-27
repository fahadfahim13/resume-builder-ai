export const introductionForms = [
  { name: "fullName", title: "Full Name", placeholder: "i.e. John Doe" },
  {
    name: "title",
    title: "Professional Title",
    placeholder: "i.e. Software Engineer | Programmer | Coder",
  },
  { name: "address", title: "Address", placeholder: "i.e. Dhaka, Bangladesh" },
  { name: "phone", title: "Phone", placeholder: "i.e. +123456" },
  { name: "email", title: "Email", placeholder: "i.e. johndoe@gmail.com" },
];

export const experienceForms = (part?: string) => [
  {
    name: "companyName",
    title: part === "projects" ? "Project Name" : "Company Name",
    placeholder:
      part === "projects"
        ? "i. e. E-Commerce Web Application"
        : "i.e. Company IT Solutions Ltd.",
  },
  {
    name: "jobTitle",
    title: part === "projects" ? "Tech Stack" : "Job Title",
    placeholder:
      part === "projects"
        ? "i.e. React, Redux, Node, TypeScript, AWS, PostgreSQL, etc."
        : "i.e. Full Stack Software Engineers",
  },
  {
    name: "duration",
    title: part === "projects" ? "Project URL" : "Duration",
    placeholder:
      part === "projects"
        ? "i.e. project.url.com"
        : "i.e. 01 Jan, 2020 - 1 Jan, 2024",
  },
  { name: "description", title: "Description", placeholder: "" },
];

export interface ExperienceType {
  name: string;
  title?: string;
  placeholder?: string;
  values: any[];
}

export const experienceFields: ExperienceType[] = [
  {
    name: "title",
    title: "Professional Experience",
    placeholder: "i.e. Experience",
    values: [],
  },
  {
    name: "companies",
    values: [experienceForms("companies")],
  },
];
