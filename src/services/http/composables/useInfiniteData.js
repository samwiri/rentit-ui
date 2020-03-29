import { ref } from "@vue/composition-api";
import http from "../api";

export default initialUrl => {
  const url = ref();

  url.value = initialUrl;

  const results = ref([]);

  const handler = $state => {
    if (!url.value) {
      return $state.complete();
    }

    http
      .get(url.value)
      .then(({ data }) => {
        url.value = data.next_page_url;
        results.value = [...results.value, ...data.data];
        $state.loaded();

        if (!url.value) {
          $state.complete();
        }
      })
      .catch(() => {
        $state.error();
      });
  };

  const prependResult = value => {
    results.value = [value, ...results.value];
  };

  return { results, handler, url, prependResult };
};
