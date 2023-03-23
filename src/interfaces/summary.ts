export interface TaskSummary {
  all: number;
  notAssigned: number;
  inProgress: number;
  pending: number;
  overdue: number;
  rejected: number;
  approved: number;
}

export interface ConditionSummary {
  all: number;
  notAssigned: number;
  inProgress: number;
  pending: number;
  overdue: number;
  rejected: number;
  approved: number;
}

export interface PermitSummary {
  all: number;
  active: number;
  archived: number;
}

export const getDefaultPermitSummary = () => {
  return {
    all: 0,
    active: 0,
    archived: 0,
  } as PermitSummary;
};

export const getDefaultConditionSummary = () => {
  return {
    all: 0,
    notAssigned: 0,
    inProgress: 0,
    pending: 0,
    overdue: 0,
    approved: 0,
  } as ConditionSummary;
};

export const getDefaultTaskSummary = () => {
  return {
    all: 0,
    notAssigned: 0,
    inProgress: 0,
    pending: 0,
    overdue: 0,
    approved: 0,
  } as TaskSummary;
};
