import * as React from "react";
import { Profile } from "../interfaces/profile";
import { db } from "../store/db";
import { delay, MOCK_DELAY } from "../utils/delay";

export const useProfile = () => {
  const [profiles, setProfiles] = React.useState<Profile[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const getProfile = async (id: string): Promise<Profile | undefined> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      return await db.profiles.get(id);
    } catch (e: any) {
      setError("Could not fetch profile");
    } finally {
      setIsLoading(false);
    }
  };

  const listProfiles = async (
    permitId: string,
    limit: number,
    offset: number
  ): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      const profiles = await db.profiles
        .where("permitId")
        .equals(permitId)
        .limit(limit)
        .offset(offset)
        .toArray();
      setProfiles(profiles);
    } catch (e: any) {
      setError("Could not list profiles");
    } finally {
      setIsLoading(false);
    }
  };

  const createProfile = async (profile: Profile): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.profiles.add({
        id: profile.id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
        membershipType: profile.membershipType,
        licenses: profile.licenses,
        billingData: profile.billingData,
        language: profile.language,
        organisation: profile.organisation,
        dob: profile.dob,
        country: profile.country,
        state: profile.state,
        created: new Date(),
      });
      setProfiles([...profiles, profile]);
    } catch (e: any) {
      setError("Could not list profiles");
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profile: Profile): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.profiles.update(profile.id, {
        id: profile.id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        phone: profile.phone,
        membershipType: profile.membershipType,
        licenses: profile.licenses,
        billingData: profile.billingData,
        language: profile.language,
        organisation: profile.organisation,
        dob: profile.dob,
        country: profile.country,
        state: profile.state,
      });
      setProfiles(
        profiles.map((c) => {
          if (c.id === profile.id) {
            return profile;
          }
          return c;
        })
      );
    } catch (e: any) {
      setError("Could not update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProfile = async (profile: Profile): Promise<void> => {
    try {
      setIsLoading(true);
      delay(MOCK_DELAY);
      await db.profiles.delete(profile.id);
      setProfiles(profiles.filter((p) => p.id !== profile.id));
    } catch (e: any) {
      setError("Could not delete profile");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    profiles,
    getProfile,
    listProfiles,
    createProfile,
    updateProfile,
    deleteProfile,
    isLoading,
    error,
  };
};
