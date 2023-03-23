export interface Mail {
  id: string;
  to: string;
  from: string;
  permitId: string;
  subject: string;
  message: string;
  created: Date;
}
