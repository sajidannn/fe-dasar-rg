function mapUsers(users) {
  const data = users.map((user) => user)

  return {
    data: data,
    count: data.length
  };
}

export function mapArticles(articles) {
  const data = articles.map((article) => article)

  return {
    data: data,
    count: data.length
  };
}

export default mapUsers;
