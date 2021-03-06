export interface Endpoint extends Selectable {
  Id?: string;
  Url?: string; // ie. /user
  Code?: string;
  Method?: string; // http method
  Input?: string;
  Output?: string;
  Description?: string;
  CreatedAt?: string;
}

export interface Project extends Selectable {
  Id?: string;
  Author?: string;
  Name?: string;
  Recipe?: string;
  ReadMe?: string;
  Mode?: string;
  Endpoints?: Endpoint[];
  Builds?: Build[];
  Tags?: string;
  UpdatedAt?: string;
  Stars?: number;
  Description?: string;
  Public?: boolean;
  Starrers?: User[];
  Imports?: string;
  Packages?: string;
  Types?: string;
  Source?: string;
  OpenSource?: boolean;
  Version?: string;
  Namespace?: string;
}

// not used in backend
export interface Languages extends Selectable {
  Name?: string;
  DisplayName?: string;
  DisplayColor?: string;
}

export interface Dependency extends Selectable {
  Id?: string;
  Type?: string;
  DisplayName?: string;
  Config?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
}

export interface Selectable {
  Selected?: boolean;
}
export interface Build {
  Id: string;
  Output: string;
  Success: boolean;
  ProjectId: string;
  InProgress: boolean;
  CreatedAt: string;
  UpdatedAt?: string;
  Selected?: boolean;
  Version?: string;
}
export interface User {
  Id: string;
  Password: string;
  Nick: string;
  Name: string;
  Email: string;
  CreatedAt: number;
  UpdatedAt: number;
  AvatarLink: string;
  Premium?: boolean;
  Tokens?: Token[];
}

export interface AccessToken {
  Id?: string;
  Token?: string;
  UserId?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
}

export interface Profile {
  Link?: string;
  FullName?: string;
  Location?: string;
  AboutMe?: string;
  Github?: string;
}

export interface Comment {
  Id?: string;
  IssueId?: string;
  Content?: string;
  UserId?: string;
  User?: User;
  CreatedBy?: User;
  Issue?: Issue;
  Index?: number; // not used on the server
  Editing?: boolean; // not used on the server
  CreatedAt?: string;
  UpdatedAt?: string;
}

export interface Issue {
  Id?: string;
  ProjectId?: string;
  Title?: string;
  UserId?: string;
  Comments?: Comment[];
  User?: User;
  CreatedBy?: User;
  CreatedAt?: string;
  UpdatedAt?: string;
}
export interface Token {
  Id?: string;
  Token?: string;
  UserId?: string;
  Name?: string;
  Description?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  Enabled?: boolean;
  Quota?: number;
}
export interface Post {
  Id?: string;
  Title?: string;
  Subtitle?: string;
  UserId?: string;
  Content?: string;
  User?: User;
  CreatedAt?: string;
  UpdatedAt?: string;
  Slug?: string;
  Editing?: boolean; // not used on the server
}

export interface Config {
  SiteUrl?: string;
  StripeKey?: string;
  SendGridKey?: string;
  Path?: string;
  ApiGeneration?: ApiGeneration;
  NpmPublication?: NpmPublication;
  Sitemap?: Sitemap;
}

export interface ApiGeneration {
  GithubOrganisation?: string;
  GithubUser?: string;
  GithubPersonalToken?: string;
  Enabled?: boolean;
}

export interface NpmPublication {
  Enabled?: boolean;
  NpmToken?: string;
  NpmOrganisation?: string;
}

export interface Sitemap {
  Enabled?: boolean;
  Path?: string;
}
