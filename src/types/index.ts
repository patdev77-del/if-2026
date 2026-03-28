// ---------------------------------------------------------------------------
// Shared types — introduced on Day 3
// ---------------------------------------------------------------------------

// TODO Day 3: fill out the Repo interface to match the GitHub API response
// Hint: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
export interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  topics: string[]
}

// TODO Day 3 (optional): add more types as you need them
