// db.ts
import Dexie, { Table } from "dexie";
import { Condition } from "../interfaces/condition";
import { Mail } from "../interfaces/mail";
import { Permit } from "../interfaces/permit";
import { Profile } from "../interfaces/profile";
import { Project } from "../interfaces/project";
import { Upload } from "../interfaces/upload";
import { User } from "../interfaces/user";

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  users!: Table<User>;
  profiles!: Table<Profile>;
  projects!: Table<Project>;
  permits!: Table<Permit>;
  conditions!: Table<Condition>;
  uploads!: Table<Upload>;
  mail!: Table<Mail>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      users: "++id, email", // Primary key and indexed props
      profiles: "++id", // Primary key and indexed props
      projects: "++id, projectOwner", // Primary key and indexed props
      permits: "++id, projectId", // Primary key and indexed props
      conditions: "++id, permitId", // Primary key and indexed props
      uploads: "++id, conditionId", // Primary key and indexed props
      mail: "++id, permitId", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
