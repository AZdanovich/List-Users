import { API_URL, userListElementId } from "./vars.js";

export async function fetchUsers() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Ошибка при получении данных: ${response.statusText}`);
    }

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Ошибка:", error);
    document.getElementById(
      userListElementId
    ).innerHTML = `<li>Произошла ошибка: ${error.message}</li>`;
  }
}

export function displayUsers(users) {
  const userList = document.getElementById(userListElementId);
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name} (${user.email})`;
    userList.appendChild(listItem);
  });
}
