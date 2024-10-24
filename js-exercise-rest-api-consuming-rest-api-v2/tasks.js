// import json from "body-parser/lib/types/json";

function task1() {
  return fetch("http://localhost:3000");
  // .then((response) => response.json())
}

async function task2() {
  const response = await fetch("http://localhost:3000/task2", {
    method: "PATCH"
  });

  return response.json();
}

function task3() {
  return fetch("http://localhost:3000/task3?user_id=3&role=admin", {
    method: "POST",
  });
}

function task4() {
  const data = {
    username: "admin",
    password: "password"
  };

  return fetch("http://localhost:3000/task4", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}

export { task1, task2, task3, task4 };
