import * as React from "react";
import { Mail } from "../interfaces/mail";
import { db } from "../store/db";
import { delay, MOCK_DELAY } from "../utils/delay";

export const useMail = (permitId: string, limit: number, offset: number) => {
  const [mails, setMails] = React.useState<Mail[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const getMail = async (id: string): Promise<Mail | undefined> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      return await db.mail.get(id);
    } catch (e: any) {
      setError("Could not fetch mail");
    } finally {
      setIsLoading(false);
    }
  };

  const listMail = async (
    permitId: string,
    limit: number,
    offset: number
  ): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      const mails = await db.mail
        .where("permitId")
        .equals(permitId)
        .limit(limit)
        .offset(offset)
        .toArray();
      setMails(mails);
    } catch (e: any) {
      setError("Could not list mails");
    } finally {
      setIsLoading(false);
    }
  };

  const createMail = async (mail: Mail): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.mail.add({
        id: mail.id,
        permitId: mail.permitId,
        to: mail.to,
        from: mail.from,
        subject: mail.subject,
        message: mail.message,
        created: new Date(),
      });
      setMails([...mails, mail]);
    } catch (e: any) {
      setError("Could not list mails");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteMail = async (mail: Mail): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.mail.delete(mail.id);
      setMails(mails.filter((p) => p.id !== mail.id));
    } catch (e: any) {
      setError("Could not delete mail");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mails,
    getMail,
    listMail,
    createMail,
    deleteMail,
    isLoading,
    error,
  };
};
