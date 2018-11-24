export class Candidate {
  id?: number;
  name: string;
  surname?: string;
  birthday?: string;
  salaryInDollars?: number;
  candidateState?: CandidateState;
  skills?: Skill[];
  experiences?: CandidateExperience[];
  contacts?: ContactDetails[];
  attachments?: Attachment[];

  // FIXME: temporary solution
  constructor(id: number, name: string, photoUrl: string) {
    // FIXME: temporary solution
    this.id = id;
    this.name = name;
    this.attachments = [ new Attachment(AttachmentType.PHOTO, photoUrl) ];
  }
}

export interface CandidateState {
  name: string;
}

export interface Skill {
  name: string;
}

export interface CandidateExperience {
  dateFrom: string;
  dateTo: string;
}

export interface Notes {
  interviewer: string;
  date: string;
  noteText: string;
}

export interface ContactDetails {
  contactType: ContactType;
  contactDetails: string;
}

export enum ContactType {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  SKYPE = 'SKYPE'
}


export class Attachment {
  attachmentType: AttachmentType;
  filePath: string;

  constructor(attachmentType: AttachmentType, filePath: string) {
    this.attachmentType = attachmentType;
    this.filePath = filePath;
  }
}

export enum AttachmentType {
  CV = 'CV',
  COVER_LETTER = 'COVER_LETTER',
  PHOTO = 'PHOTO'
}
