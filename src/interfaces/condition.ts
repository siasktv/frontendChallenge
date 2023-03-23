//Discipline
// Administration
// Architectural
// Civil
// Commercial
// Electrical
// Environmental
// Fire
// Geotechnical
// Health & Safety
// HVAC
// Hydraulics
// Internal Fitout
// Landscape
// Mechanical
// Project Management
// Structural
// Sustainability
// Traffic
// Vertical Transport
// Other

export interface Condition {
  id: string;
  permitId: string;
  name: string;
  itemNumber: number;
  actionRequired: boolean;
  assigned: string;
  discipline: string;
  dueDate: Date;
  status: string;
  collaborators: string;
  created: Date;
}
