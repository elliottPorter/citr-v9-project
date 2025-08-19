export default async function getPastOrders(page) {
  console.log('fetch is called')
  // const response = await fetch(`/api/past-orders?page=${page}`);
  const response = await fetch(`/api/past-orders`);
  const data = await response.json();
  console.log(data);
  return data;
}
