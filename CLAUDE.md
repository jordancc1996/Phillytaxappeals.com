# Philly Tax Appeals — Astro Migration Rules

CRITICAL DESIGN PRESERVATION RULE:
This migration must produce a pixel-perfect copy of the live site.
Every component must look identical. Do NOT:
- Change any colors, fonts, font weights, spacing, or padding
- Change any animations or transitions
- Simplify any copy or headlines
- Change the tone of any text
- Remove any sections from any page (except /news, which is
  explicitly excluded per user decision)
- Reorder any sections
The ONLY things that change are:
- React Router -> Astro file-based routing
- Custom PageSEO component -> Astro native <head>
- Client-side rendering -> Static HTML
- react-snap -> removed (Astro replaces it entirely)
- www canonical convention -> apex canonical convention
- /news is EXCLUDED from migration entirely
The Supabase Edge Function (property-assessment) is NOT part of this
migration — it is already live and independent of the frontend host.
Only the React component that calls it needs to be ported, unchanged,
as a client:load island.
If in doubt, copy the existing component exactly and wrap it as a
React island with client:load.

## Process rules for every prompt in this migration

1. Evidence before implementation — show extraction/proposal tables
   first, wait for approval before writing files, unless told to
   build directly.
2. Verify before commit — run the full relevant verification
   checklist (build passes, no leftover www references, canonical/OG/
   JSON-LD present, Supabase env vars wired) before committing.
3. Show real output, not claims — git rev-parse HEAD matching git
   rev-parse origin/main; actual build command output.
4. One dev server at a time — stop all running servers, clear
   node_modules/.vite and .astro/ before starting fresh.
5. This file and CLAUDE.md must always be updated together, in the
   same commit.
