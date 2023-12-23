export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const body = await readBody(event)

  return {
    query,
    keyword: body.keyword
  }
})
