// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const CertificateTemplatesSchema = z.object({
  id: z.string().uuid(),
  caId: z.string().uuid(),
  name: z.string(),
  commonName: z.string(),
  ttl: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TCertificateTemplates = z.infer<typeof CertificateTemplatesSchema>;
export type TCertificateTemplatesInsert = Omit<z.input<typeof CertificateTemplatesSchema>, TImmutableDBKeys>;
export type TCertificateTemplatesUpdate = Partial<Omit<z.input<typeof CertificateTemplatesSchema>, TImmutableDBKeys>>;
