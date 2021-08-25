export default async function FetchApi(url = "", givenMethod = "GET") {
  const dataResponse = await fetch(url, { method: givenMethod });
  const status =await dataResponse.status;
  const response = await dataResponse.json()
  return {status:status,data:response};
}
