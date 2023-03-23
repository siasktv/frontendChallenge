import * as React from "react";
import { Permit } from "../interfaces/permit";
import { db } from "../store/db";
import { delay, MOCK_DELAY } from "../utils/delay";

export const usePermit = (projectId: string, limit: number, offset: number) => {
  const [permits, setPermits] = React.useState<Permit[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    listPermits(projectId, limit, offset);
  }, [projectId, limit, offset]);

  const getPermit = async (permit: Permit): Promise<Permit | undefined> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      return await db.permits.get(permit.id);
    } catch (e: any) {
      setError("Could not fetch permit");
    } finally {
      setIsLoading(false);
    }
  };

  const listPermits = async (
    projectId: string,
    limit: number,
    offset: number
  ): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      const permits = await db.permits
        .where("projectId")
        .equals(projectId)
        .limit(limit)
        .offset(offset)
        .toArray();
      setPermits(permits);
    } catch (e: any) {
      setError("Could not list permits");
    } finally {
      setIsLoading(false);
    }
  };

  const createPermit = async (permit: Permit): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.permits.add({
        id: permit.id,
        projectId: permit.projectId,
        name: permit.name,
        created: new Date(),
      });
      setPermits([...permits, permit]);
    } catch (e: any) {
      setError("Could not list permits");
    } finally {
      setIsLoading(false);
    }
  };

  const updatePermit = async (permit: Permit): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.permits.update(permit.id, {
        name: permit.name,
      });
      setPermits(
        permits.map((c) => {
          if (c.id === permit.id) {
            return permit;
          }
          return c;
        })
      );
    } catch (e: any) {
      setError("Could not update permit");
    } finally {
      setIsLoading(false);
    }
  };

  const deletePermit = async (permit: Permit): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.permits.delete(permit.id);
      setPermits(permits.filter((p) => p.id !== permit.id));
    } catch (e: any) {
      setError("Could not delete permit");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    permits,
    getPermit,
    listPermits,
    createPermit,
    updatePermit,
    deletePermit,
    isLoading,
    error,
  };
};
