export interface Candidate {
  id?: number;
  name: string;
  surname?: string;
  birthday?: Date;
  salaryInDollars?: number;
  candidateState?: CandidateState;
  skills?: Skills[];
  experiences?: CandidateExperience[];
  contacts?: ContactDetails[];
  attachments?: Attachment[];
  responsibilities?: Responsibility[];

}

export interface CandidateState {
  name: string;
}

export interface Skills {
  name: string;
}

export interface Responsibility {
  name: string;
}

export interface Attachment {
  attachmentType: string; // enum: CV, COVER_LETTER, PHOTO
  filePath: string;
}

export interface CandidateExperience {
  dateFrom: Date;
  dateTo: Date;
  jobDescription?: Project;
  jobPosition?: string;
  companyName?: Team;
}

export interface Project {
  id?: number;
  name: string;
}

export interface Team {
  id?: number;
  name: string;
}

export interface ContactDetails {
  contactType: string; // enum: EMAIL, PHONE, SKYPE
  contactDetails: string;
}
