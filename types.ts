
export interface VerificationFormData {
  fullName: string;
  dob: string;
  nationality: string;
  occupation: string;
  address: string;
  phone: string;
  email: string;
  paymentMethod: string;
  referenceId: string;
}

export enum Page {
  HOME = 'home',
  VERIFY = 'verify',
  CONFIRMATION = 'confirmation'
}
