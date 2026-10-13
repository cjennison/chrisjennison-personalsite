import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Private, role-tailored resume variants.
 * Content lives in the gitignored private/resumes/variants/<id>.json and is only
 * readable outside production, so tailoring never ships with the public site.
 */
export interface ResumeVariant {
  id: string;
  /** Target job title; used in the PDF title and file name */
  targetTitle: string;
  /** Output file name written to private/resumes/ */
  fileName: string;
  headline: string;
  summary: string;
  /** Ordered achievements; wrap the lead phrase in <b>…</b> */
  achievements: string[];
  /** Bullets per role id; unlisted roles fall back to Profile.onePage.roles */
  roles?: Record<string, string[]>;
  /** Replaces the skills section when provided */
  skills?: { title: string; items: string[] }[];
}

export interface PrivateContact {
  email?: string;
  phone?: string;
}

const VARIANTS_DIR = path.join(process.cwd(), "private", "resumes", "variants");

export const PRIVATE_RESUMES_ENABLED = process.env.NODE_ENV !== "production";

export async function loadResumeVariant(
  id: string,
): Promise<ResumeVariant | null> {
  // Ids are file names; reject anything that could escape the variants folder
  if (!PRIVATE_RESUMES_ENABLED || !/^[a-z0-9-]+$/.test(id)) return null;

  try {
    const raw = await readFile(path.join(VARIANTS_DIR, `${id}.json`), "utf8");
    return JSON.parse(raw) as ResumeVariant;
  } catch {
    return null;
  }
}

/** Email and phone from .env.local (RESUME_EMAIL / RESUME_PHONE), never in production */
export function getPrivateContact(): PrivateContact | null {
  if (!PRIVATE_RESUMES_ENABLED) return null;
  const email = process.env.RESUME_EMAIL;
  const phone = process.env.RESUME_PHONE;
  return email || phone ? { email, phone } : null;
}
