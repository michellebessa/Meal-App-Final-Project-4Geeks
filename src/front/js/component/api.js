export async function mealPlannerApi(data) {
  const response = await fetch(process.env.BACKEND_URL + "/api/mealplanner", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const payload = await response.json();
  return payload;
}

export async function mealShopApi(data) {
  const response = await fetch(process.env.BACKEND_URL + "/api/mealshop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const payload = await response.json();
  return payload;
}
