import districts from '~/assets/json/districts.json';
export default defineEventHandler(async (event) => {
  return districts;
});
