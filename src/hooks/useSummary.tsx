import * as React from "react";
import {
  getDefaultPermitSummary,
  getDefaultTaskSummary,
  PermitSummary,
  ConditionSummary,
  TaskSummary,
  getDefaultConditionSummary,
} from "../interfaces/summary";
import { db } from "../store/db";
import { delay, MOCK_DELAY } from "../utils/delay";

export const useSummary = () => {
  const [summaryPermits, setSummaryPermits] = React.useState<PermitSummary>();
  const [summaryConditons, setSummaryConditions] =
    React.useState<ConditionSummary>();
  const [summaryTasks, setSummaryTasks] = React.useState<TaskSummary>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const listPermitSummarys = async (projectId: string): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);

      const summary = getDefaultPermitSummary();
      const permits = await db.permits
        .where("projectId")
        .equals(projectId)
        .toArray();

      //Permit summary
      summary.all = permits.length;
      summary.active = permits.filter((p) => p.status === "ACTIVE").length;
      summary.archived = permits.filter((p) => p.status === "ARCHIVED").length;

      setSummaryPermits(summary);
    } catch (e: any) {
      setError("Could not list summarys");
    } finally {
      setIsLoading(false);
    }
  };

  const listConditionSummarys = async (projectId: string): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);

      const summary = getDefaultConditionSummary();
      const permits = await db.permits
        .where("projectId")
        .equals(projectId)
        .toArray();

      for (const p of permits) {
        //Conditions overview
        const conditions = await db.conditions
          .where("permitId")
          .equals(p.id)
          .toArray();

        summary.all += conditions.length;
        summary.notAssigned += conditions.filter(
          (p) => p.status === "NOT_ASSIGNED"
        ).length;
        summary.inProgress += conditions.filter(
          (p) => p.status === "IN_PROGRESS"
        ).length;
        summary.pending += conditions.filter(
          (p) => p.status === "PENDING"
        ).length;
        summary.overdue += conditions.filter(
          (p) => p.status === "OVERDUE"
        ).length;
        summary.rejected += conditions.filter(
          (p) => p.status === "REJCETED"
        ).length;
        summary.approved += conditions.filter(
          (p) => p.status === "APPROVED"
        ).length;
      }

      setSummaryConditions(summary);
    } catch (e: any) {
      setError("Could not list summarys");
    } finally {
      setIsLoading(false);
    }
  };

  const listTaskSummarys = async (
    userId: string,
    projectId: string
  ): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);

      const summary = getDefaultTaskSummary();
      const permits = await db.permits
        .where("projectId")
        .equals(projectId)
        .toArray();

      for (const p of permits) {
        //Task overview
        const tasks = await db.conditions
          .where("permitId")
          .equals(p.id)
          .and((item) => item.assigned === userId)
          .toArray();

        summary.all += tasks.length;
        summary.notAssigned += tasks.filter(
          (p) => p.status === "NOT_ASSIGNED"
        ).length;
        summary.inProgress += tasks.filter(
          (p) => p.status === "IN_PROGRESS"
        ).length;
        summary.pending += tasks.filter((p) => p.status === "PENDING").length;
        summary.overdue += tasks.filter((p) => p.status === "OVERDUE").length;
        summary.overdue += tasks.filter((p) => p.status === "REJECTED").length;
        summary.notAssigned += tasks.filter(
          (p) => p.status === "APPROVED"
        ).length;
      }

      setSummaryTasks(summary);
    } catch (e: any) {
      setError("Could not list summarys");
    } finally {
      setIsLoading(false);
    }
  };
  return {
    summaryPermits,
    listPermitSummarys,
    summaryConditons,
    listConditionSummarys,
    summaryTasks,
    listTaskSummarys,
    isLoading,
    error,
  };
};
