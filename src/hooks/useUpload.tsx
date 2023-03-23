import * as React from "react";
import { Upload } from "../interfaces/upload";
import { db } from "../store/db";
import { delay, MOCK_DELAY } from "../utils/delay";

export const useUpload = () => {
  const [uploads, setUploads] = React.useState<Upload[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const listUploads = async (
    conditionId: string,
    limit: number,
    offset: number
  ): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      const uploads = await db.uploads
        .where("conditionId")
        .equals(conditionId)
        .limit(limit)
        .offset(offset)
        .toArray();
      setUploads(uploads);
    } catch (e: any) {
      setError("Could not list uploads");
    } finally {
      setIsLoading(false);
    }
  };

  const createUpload = async (upload: Upload): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.uploads.add({
        id: upload.id,
        conditionId: upload.conditionId,
        name: upload.name,
        owner: upload.owner,
        created: new Date(),
      });
      setUploads([...uploads, upload]);
    } catch (e: any) {
      setError("Could not list uploads");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUpload = async (upload: Upload): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.uploads.delete(upload.id);
      setUploads(uploads.filter((p) => p.id !== upload.id));
    } catch (e: any) {
      setError("Could not delete upload");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    uploads,
    listUploads,
    createUpload,
    deleteUpload,
    isLoading,
    error,
  };
};
