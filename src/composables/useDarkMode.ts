// ---------------------------------------------------------------------------
// Day 2 exercise — write this composable yourself first,
// then on Day 3 we'll replace it with VueUse's useDark + useStorage
// ---------------------------------------------------------------------------

// TODO Day 2: implement useDarkMode
//
// It should:
// 1. hold a ref<boolean> called isDark
// 2. expose a toggle() function that flips isDark
// 3. apply / remove a 'dark' class on document.documentElement when isDark changes
//    (hint: use a watch())
// 4. return { isDark, toggle }
//
// Bonus: persist the preference in localStorage
//   (hint: initialise isDark from localStorage.getItem('darkMode'))

import { ref, watch } from 'vue'

export function useDarkMode() {
  // TODO Day 2: replace this stub with your implementation
  const isDark = ref(false)

  function toggle() {
    // TODO Day 2
  }

  watch(isDark, (val) => {
    // TODO Day 2
  })

  return { isDark, toggle }
}
