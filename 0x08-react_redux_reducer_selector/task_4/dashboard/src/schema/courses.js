import { schema, normalize } from "normalizr";

const courseSchema = new schema.Entity("courses");

export function courseNormalizer(data) {
  return normalize(data, [courseSchema]);
}
