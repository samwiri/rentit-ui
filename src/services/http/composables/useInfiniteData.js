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

        if (!url.value) {
          return $state.complete();
        }
        $state.loaded();
      })
      .catch(() => {
        $state.error();
      });
  };

  return { results: results, handler, url: url };
};
