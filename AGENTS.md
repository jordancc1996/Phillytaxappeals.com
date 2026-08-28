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

Scope notes (user decision, overrides the above where they conflict):
- /tools is entirely excluded from this migration, same as /news.
  Do not port /tools, /tools/real-estate-estimator,
  PropertyAssessmentTool.tsx, or any Supabase client/env/integration.
  There must be no Supabase dependency anywhere in this project.
- The 4 county pages use the same site Navigation and Footer as
  Contact (source per-page chrome). /tools remains excluded.

## Process rules for every prompt in this migration

1. Evidence before implementation — show extraction/proposal tables
   first, wait for approval before writing files, unless told to
   build directly.
2. Verify before commit — run the full relevant verification
   checklist (build passes, no leftover www references, canonical/OG/
   JSON-LD present, no Supabase dependency) before committing.
3. Show real output, not claims — git rev-parse HEAD matching git
   rev-parse origin/main; actual build command output.
4. One dev server at a time — stop all running servers, clear
   node_modules/.vite and .astro/ before starting fresh.
5. This file and CLAUDE.md must always be updated together, in the
   same commit.

## Content Publishing Rules

Every new page or piece of content added to this site MUST pass the
5-location keyword check before being committed. (This site has no
blog/article directory as of this migration — if one is added later,
apply this to every new article too.)

### The 5-Location Keyword Rule

PRIMARY TARGET KEYWORD must appear in ALL FIVE locations:
1. TITLE — starts with keyword, format "[Keyword] - [Angle]",
   no em dashes, no site name
2. META TITLE — same as title + " | Philly Tax Appeals"
3. META DESCRIPTION — keyword in first 5-7 words, 150-160 chars,
   one specific number/date/dollar amount, no em dashes
4. URL/SLUG — reflects the keyword (never change existing slugs
   without explicit approval)
5. FIRST SENTENCE of intro/opening — keyword in first 10 words,
   specific and informative, no em dashes

### Workflow for Every New Page/Article

STEP 1: Identify primary keyword — show it to the human
STEP 2: Check all 5 locations — show this table:
  Keyword: [keyword]
  Title ✓/✗ | MetaTitle ✓/✗ | Description ✓/✗ | Slug ✓/✗ | Intro ✓/✗
STEP 3: Fix all ✗ before writing the file
STEP 4: Human approves
STEP 5: Write file and commit

NEVER commit a page with any ✗ in the 5-location check.

### Red Flags to Catch Automatically
- Description copy-pasted from a different page
- First sentence starting with context not keyword
- Title that buries keyword at the end
- Description under 140 or over 165 characters
- Em dashes in any SEO field
- First sentence starting with "This page will..." or "In this
  guide..."

