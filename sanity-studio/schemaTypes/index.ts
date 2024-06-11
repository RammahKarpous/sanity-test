import { blockContent } from "./blockContent";
import { duration } from "./duration";
import { milestone } from "./milestone";
import { post } from "./post";
import { workExperience } from "./workExperience";
import { project } from "./project";
import { timeline } from "./timeline";
import { home } from "./home";
import { settings } from "./settings";

export const schemaTypes = [
  // Singetons
  home,
  settings,

  // Documents
  workExperience,
  blockContent,
  duration,
  milestone,
  post,
  project,
  timeline,
];
