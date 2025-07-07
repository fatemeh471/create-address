import { useRoute } from "vue-router";
import { computed } from "vue";

export function useRouteChecker(paths: string[]) {
  const route = useRoute();
  return computed(() =>
    paths.some((path) => route.path.includes(path))
  );
}
