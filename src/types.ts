interface Requirements {
  stacks: string[];
  softSkills: string[];
  degree: boolean;
  minYears: number;
}

interface Contact {
  person: string;
  phone: string;
}

interface Followups {
  date: Date | undefined; // date
  type: "email" | "phone" | "interview";
  sumary: string;
  current: boolean;
}

export default interface AppForm {
  title: string;
  link: string; //date
  postedAt: string;
  company: string;
  area: string;
  description: string;
  fromRecruiter: boolean;
  requirements: Requirements;
  applied: boolean;
  appliedAt: string; //date
  coverLetter: string; //file, how to store file in database
  resume: string; //file
  contact: Contact;
  followUps: Followups[];
  terminated: boolean;
}
