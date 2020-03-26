import get from "lodash/get";

export const extractResponseErrorMessage = (response, defaultValue = "Something went wrong") =>
  get(response, "response.data.message", get(response, "message", defaultValue));
