//sector
// Building Permit
// Construction Certificate
// Occupancy Permit
// Planning Permit
// Development Approval Consent
// Endorsed Planning Approval
// Other (Insert Field)

export interface Permit {
  id: string;
  projectId: string;
  name: string;
  sector: string;
  permitType: string;
  value: number;
  manager: string;
  approver: string;
  startDate: Date;
  endDate: Date;
  status: string;
  created: Date;
}
