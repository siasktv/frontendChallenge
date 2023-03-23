import * as React from "react";
import { Condition } from "../interfaces/condition";
import { db } from "../store/db";
import { delay, MOCK_DELAY } from "../utils/delay";

export const useCondition = () => {
  const [conditions, setConditions] = React.useState<Condition[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const getCondition = async (id: string): Promise<Condition | undefined> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      return await db.conditions.get(id);
    } catch (e: any) {
      setError("Could not fetch condition");
    } finally {
      setIsLoading(false);
    }
  };

  const listConditions = async (
    permitId: string,
    limit: number,
    offset: number
  ): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      const conditions = await db.conditions
        .where("permitId")
        .equals(permitId)
        .limit(limit)
        .offset(offset)
        .toArray();
      setConditions(conditions);
    } catch (e: any) {
      setError("Could not list conditions");
    } finally {
      setIsLoading(false);
    }
  };

  const createCondition = async (condition: Condition): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.conditions.add({
        id: condition.id,
        permitId: condition.permitId,
        name: condition.name,
        itemNumber: condition.itemNumber,
        actionRequired: condition.actionRequired,
        assigned: condition.assigned,
        discipline: condition.discipline,
        dueDate: condition.dueDate,
        status: condition.status,
        collaborators: condition.collaborators,
        created: condition.created,
      });
      setConditions([...conditions, condition]);
    } catch (e: any) {
      setError("Could not list conditions");
    } finally {
      setIsLoading(false);
    }
  };

  const updateCondition = async (condition: Condition): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.conditions.update(condition.id, {
        name: condition.name,
        itemNumber: condition.itemNumber,
        actionRequired: condition.actionRequired,
        assigned: condition.assigned,
        discipline: condition.discipline,
        dueDate: condition.dueDate,
        status: condition.status,
        collaborators: condition.collaborators,
      });
      setConditions(
        conditions.map((c) => {
          if (c.id === condition.id) {
            return condition;
          }
          return c;
        })
      );
    } catch (e: any) {
      setError("Could not update condition");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCondition = async (condition: Condition): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.conditions.delete(condition.id);
      setConditions(conditions.filter((p) => p.id !== condition.id));
    } catch (e: any) {
      setError("Could not delete condition");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    conditions,
    getCondition,
    listConditions,
    createCondition,
    updateCondition,
    deleteCondition,
    isLoading,
    error,
  };
};
