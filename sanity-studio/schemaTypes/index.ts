import { blockContent } from "./blockContent";
import { duration } from "./duration";
import { milestone } from "./milestone";
import { post } from "./post";
import { workExperience } from "./workExperience";
import { project } from "./project";
import { timeline } from "./timeline";
import { home } from "./home";
import { settings } from "./settings";
import { mission } from "./mission";
import { ourValues } from "./values";

export const schemaTypes = [
  // Singetons
  home,
  settings,
  mission,

  // Documents
  workExperience,
  blockContent,
  ourValues,
  duration,
  milestone,
  post,
  project,
  timeline,
];
