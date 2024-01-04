// schema/courses.js
import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');

const coursesSchema = [course];

export function coursesNormalizer(data) {
  return normalize(data, coursesSchema);
}
