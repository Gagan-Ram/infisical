// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretFoldersSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  version: z.number().default(1).nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  envId: z.string().uuid(),
  parentId: z.string().uuid().nullable().optional(),
  isReserved: z.boolean().default(false).nullable().optional(),
  description: z.string().nullable().optional(),
  lastSecretModified: z.date().nullable().optional()
});

export type TSecretFolders = z.infer<typeof SecretFoldersSchema>;
export type TSecretFoldersInsert = Omit<z.input<typeof SecretFoldersSchema>, TImmutableDBKeys>;
export type TSecretFoldersUpdate = Partial<Omit<z.input<typeof SecretFoldersSchema>, TImmutableDBKeys>>;
