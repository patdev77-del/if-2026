# Vue Portfolio Workshop

Your personal portfolio site — built over 3 days, live from minute one.

---

## Recommended tooling

### Editor

[Visual Studio Code](https://code.visualstudio.com/) is strongly recommended for this workshop. The Vue ecosystem has first-class VS Code support and the plugins below make a significant difference.

### VS Code extensions

Install these before day 1:

| Extension                                                                                               | ID                       | Why                                                                                       |
| ------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)                         | `Vue.volar`              | Syntax highlighting, TypeScript support, and IntelliSense inside `.vue` files. Essential. |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | `esbenp.prettier-vscode` | Auto-formats on save using the project's `.prettierrc` config.                            |

You can install both at once by pasting this into your terminal:

```bash
code --install-extension Vue.volar
code --install-extension esbenp.prettier-vscode
```

### Enable format on save

Add this to your VS Code `settings.json` (`Cmd+Shift+P` → "Open User Settings JSON"):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

This means you never have to run `npm run format` manually — every save is auto-formatted.

### Browser extension

Install [Vue Devtools](https://devtools.vuejs.org/) for Chrome or Firefox. It lets you inspect component state, reactive refs, and the router from the browser. You'll use it constantly during the exercises.

---

## Quick start

### 1. Fork this repo

Click **Fork** in the top-right corner of this page. This creates your own copy at:
`https://github.com/plipp/informatica-vue-2026`

### 2. Enable GitHub Pages

In your forked repo go to **Settings → Pages** and set:

- Source: **GitHub Actions**

### 3. Update the base URL

Open `vite.config.ts` and replace the `base` value with your repo name:

```ts
base: '/informatica-vue-2026/'
```

### 4. Clone, install, and run locally

```bash
git clone https://github.com/plipp/informatica-vue-2026.git
cd informatica-vue-2026
npm install
npm run dev
```

### 5. Push to trigger your first deploy

```bash
git add .
git commit -m "initial setup"
git push
```

Go to **Actions** in your repo — watch the workflow run. In about a minute your portfolio is live at:
`https://plipp.github.io/informatica-vue-2026/`

**Share your URL in the workshop!**

---

## Project structure

```
src/
├── assets/
│   └── main.css          # base styles + CSS variables (pre-built)
├── components/
│   └── ProjectCard.vue   # Day 2 exercise — build this component
├── composables/
│   ├── useDarkMode.ts    # Day 2 exercise — write this composable
│   └── useGithub.ts      # Day 3 exercise — write this composable
├── types/
│   └── index.ts          # Day 3 — shared TypeScript interfaces
├── views/
│   ├── HomeView.vue      # Day 1 exercise — hero section
│   ├── ProjectsView.vue  # Day 3 exercise — GitHub repos
│   └── ContactView.vue   # Day 3 optional — contact form
├── App.vue               # Day 2 exercise — navbar + dark mode
├── main.ts               # pre-built — router wired up, do not edit
└── vite-env.d.ts         # pre-built — type declaration file for CSS modules
```

---

## Day-by-day exercises

Here's the updated day 1 section of the README:

---

### Day 1 — Vue basics

**Goal:** A live hero section with your name, bio, and a reactive skills list.

All exercises are in `src/views/HomeView.vue`. Look for `// TODO Day 1` comments.

#### Part A — Reactivity and templates

1. Replace `name` and `bio` with your own values
2. Replace the `skills` array with your own skills
3. Display `name` and `bio` in the template using `{{ }}`
4. Render the skills list using `v-for`
5. Wire up the `newSkill` input with `v-model`
6. Implement `addSkill()` to push a new skill into the list and clear the input

#### Part B — `computed`, `watch`, and `onMounted`

7. Add a `computed` property `skillCount` that returns the number of skills — then update the heading in the template from `Skills` to `Skills ({{ skillCount }})`
8. Use `onMounted` to load previously saved skills from `localStorage` (key: `"portfolio-skills"`) — hint: use `JSON.parse()` to convert the string back to an array
9. Use `watch` to save `skills` to `localStorage` whenever the list changes — hint: `JSON.stringify()` to convert to a string, and pass `{ deep: true }` as the third argument

Add a skill, refresh the page — your skills survive the reload. That's exactly what VueUse's `useStorage` does automatically on day 3. By writing it by hand first, you'll know exactly what it's doing under the hood.

#### Bonus

10. Add a `removeSkill(index)` function and a delete button next to each skill — watch the count update automatically

When you're happy — commit and push. Your hero section is live. ✓

---

### Day 2 — Components and composables _(morning only)_

**Goal:** A dark mode toggle, a reusable ProjectCard component, and your first composable.

#### Part A — Dark mode composable (`src/composables/useDarkMode.ts`)

Implement `useDarkMode()` so it:

- holds a `ref<boolean>` called `isDark`
- exposes a `toggle()` function
- uses `watch()` to add/remove the `dark` class on `document.documentElement`
- **Bonus:** persist the preference with `localStorage`

#### Part B — Wire it up in `App.vue`

1. Import `useDarkMode` and destructure `{ isDark, toggle }`
2. Replace the placeholder button with a working toggle
3. Show a sun/moon icon depending on `isDark` — use `v-if` / `v-else`

#### Part C — ProjectCard component (`src/components/ProjectCard.vue`)

1. Define typed props using `defineProps<{ repo: Repo }>()`  
   _(import the `Repo` type from `@/types`)_
2. Build the card template — display name, description, language, stars, and topics
3. Make the project name a link to `repo.html_url` using `:href`
4. Use `v-if` to only show description if it exists (`repo.description`)
5. Use `v-for` to render topic tags

Commit and push when done — dark mode and cards are now live. ✓

---

### Day 3 — Router, data, and VueUse

**Goal:** Routed pages, real GitHub repos fetched from the API, dark mode persisted via VueUse.

#### Part A — Vue Router _(covered in lecture)_

Router is already wired up in `main.ts`. Explore:

- `useRouter()` and `useRoute()` in a component
- Add an active style to the current nav link (hint: `.router-link-active` is already in the CSS)
- **Bonus:** add a 404 catch-all route

#### Part B — GitHub API composable (`src/composables/useGithub.ts`)

1. Implement `fetchRepos()` using `fetch()` and `async/await`
2. Set `loading = true` before the request, `false` after
3. Type the return value: `repos: Ref<Repo[]>`
4. Handle errors — set the `error` ref with a readable message
5. Use your composable in `ProjectsView.vue`

#### Part C — Replace useDarkMode with VueUse

Now that you've written `useDarkMode` by hand, replace it with VueUse:

```ts
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark() // persists to localStorage automatically
const toggle = useToggle(isDark)
```

Notice how much shorter it is — and it handles system preference too.

#### Part D — useStorage

Use `useStorage` from VueUse to persist the user's GitHub username so they don't have to re-enter it:

```ts
import { useStorage } from '@vueuse/core'

const username = useStorage('github-username', 'your-default-username')
```

Commit and push. Your full portfolio is live. ✓

---

### Day 3 OPTIONAL — Contact form and page transitions

Only tackle these if you have time. They are self-contained and won't break anything if skipped.

#### Optional A — Contact form (`src/views/ContactView.vue`)

1. Add `ref`s for `name`, `email`, and `message`
2. Wire up `v-model` on each input field
3. Add a `computed` property `isValid` — true when all fields are non-empty and email contains `@`
4. Disable the submit button when `!isValid` using `:disabled`
5. On submit, show a success message using `v-if`

#### Optional B — Page transitions

In `App.vue`, wrap `<RouterView />` with Vue's `<Transition>` component:

```html
<Transition name="page" mode="out-in">
  <RouterView />
</Transition>
```

Then uncomment the `.page-enter-active` CSS block at the bottom of `src/assets/main.css`.

---

## Using AI as a learning tool

AI tools like Claude or ChatGPT are excellent at generating Vue code. But they are unreliable at knowing _when_ that code is subtly wrong — that's your job. The exercises below are designed to make you a better _evaluator_ of AI output, not just a consumer of it.

**The rule throughout this workshop:** you can ask AI for hints and explanations, but not for solutions. Ask it to explain concepts, critique your code, or describe bugs — then implement the fix yourself.

---

### AI exercises — Day 1

#### Concept check: `ref` vs `reactive`

Before writing the skills list exercise, ask Claude to explain the difference between `ref()` and `reactive()`. Then **close the chat** and implement it yourself using only what you remember. Compare your result with what Claude described.

> **Suggested prompt:**
> Explain the difference between ref() and reactive() in Vue 3. Give me one concrete example of when you'd use each. Don't write my component for me — just explain the concepts.

#### Spot the bug: broken `v-for`

Ask Claude to generate a Vue component with a skills list using `v-for` — but intentionally ask it to skip the `:key` binding. Paste the result back and ask: "What's wrong with this component?" Try to spot the issue yourself before Claude answers.

> **Suggested prompt:**
> Generate a Vue 3 component with a list of skills using v-for. Keep it simple — just a ul with li items.

#### Ask for a hint, not the answer

When you get stuck implementing `addSkill()`, you are not allowed to ask Claude to write it for you. Ask for a hint only. If you're still stuck, ask for one more hint — but not the full solution.

> **Suggested prompt:**
> I'm trying to add an item to a ref array in Vue 3 when a button is clicked. Give me a hint about what method I should use — don't write the function for me.

---

### AI exercises — Day 2

#### Explain it back

After the composable lecture, ask Claude to explain what a composable is. Then, without looking at the answer, explain it in your own words to the person next to you. Ask Claude to critique your explanation.

> **Suggested prompt:**
> Here's my explanation of what a Vue composable is: [your words]. Is this accurate? What's missing or imprecise?

#### Review AI-generated props

Ask Claude to generate a `ProjectCard` component. Before using any of it, review the output against these questions: Are props typed? Is `defineProps` used correctly? Is there any prop mutation? Are all `v-for` items keyed? Fix anything that needs fixing.

> **Suggested prompt:**
> Generate a Vue 3 ProjectCard component in TypeScript that accepts a repo prop with name, description, html_url, language, stargazers_count, and topics fields. Use the Composition API and defineProps with generics.

#### Anti-pattern hunt

Ask Claude to generate a component with 3 deliberate Vue anti-patterns hidden inside it. Try to find all three before asking Claude to reveal them. Common ones: mutating props, missing `:key`, logic in template that should be a `computed`.

> **Suggested prompt:**
> Generate a Vue 3 component with exactly 3 subtle anti-patterns or mistakes hidden inside it. Don't tell me what they are yet — I want to find them myself first.

---

### AI exercises — Day 3

#### Type the API response yourself first

Before looking at the GitHub API docs, ask Claude to generate a TypeScript interface for a GitHub repo object. Then check it against the real API response at `https://api.github.com/users/plipp/repos`. What did Claude get right? What did it miss or hallucinate?

> **Suggested prompt:**
> Generate a TypeScript interface for a GitHub repository object returned by the GitHub REST API. Include the most commonly used fields only.

#### VueUse vs hand-rolled

You've written `useDarkMode` by hand and now replaced it with VueUse. Ask Claude what `useDark` handles that your version probably doesn't. Compare the answer with your own implementation.

> **Suggested prompt:**
> I wrote a useDarkMode composable that toggles a .dark class and saves to localStorage. What does VueUse's useDark handle that my version probably doesn't? Be specific.

#### Debug with words first

Intentionally break your `useGithub` composable so `loading` never becomes `false`. Describe the bug to Claude **in words only — no code**. Can it diagnose the issue from a description alone? Then paste the code and see if the diagnosis changes.

> **Suggested prompt:**
> In my Vue composable, I set loading = true before a fetch call, but loading never goes back to false even after the data arrives. What are the most likely causes? Don't ask me for code yet — just list the possibilities.

#### Portfolio review _(closing ritual)_

At the end of day 3, paste your completed `HomeView.vue` or `ProjectCard.vue` into Claude and ask for a code review. Evaluate whether you agree with each suggestion. Implement at least one improvement — and push it live before presentations.

> **Suggested prompt:**
> Review this Vue 3 component I wrote during a workshop. I'm a beginner. Point out anything that's non-idiomatic, could be improved, or is a potential bug. Be specific and explain why each suggestion matters.

---

## Tips

- **Stuck?** Ask your instructor for a hint — or check the solution repo (link shared after the workshop)
- **TypeScript errors?** Read them carefully — they usually tell you exactly what's missing
- **Vite HMR** updates the page instantly as you save — no need to refresh

---

## Tech stack

| Tool                                                 | Purpose                        |
| ---------------------------------------------------- | ------------------------------ |
| [Vue 3](https://vuejs.org)                           | UI framework (Composition API) |
| [Vite](https://vitejs.dev)                           | Dev server + build tool        |
| [TypeScript](https://www.typescriptlang.org)         | Type safety                    |
| [Vue Router 4](https://router.vuejs.org)             | Client-side routing            |
| [VueUse](https://vueuse.org)                         | Composable utilities           |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD deploy                   |
| [GitHub Pages](https://pages.github.com)             | Hosting                        |
