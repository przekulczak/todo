import { http, HttpResponse } from "msw";

const todosPage1 = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  { userId: 1, id: 8, title: "quo adipisci enim quam ut ab", completed: true },
  { userId: 1, id: 9, title: "molestiae perspiciatis ipsa", completed: false },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  { userId: 1, id: 11, title: "vero rerum temporibus dolor", completed: true },
  { userId: 1, id: 12, title: "ipsa repellendus fugit nisi", completed: true },
  { userId: 1, id: 13, title: "et doloremque nulla", completed: false },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
  { userId: 1, id: 15, title: "ab voluptatum amet voluptas", completed: true },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
  },
];

const todosPage2 = [
  { userId: 4, id: 61, title: "odit optio omnis qui sunt", completed: true },
  {
    userId: 4,
    id: 62,
    title: "et placeat et tempore aspernatur sint numquam",
    completed: false,
  },
  {
    userId: 4,
    id: 63,
    title: "doloremque aut dolores quidem fuga qui nulla",
    completed: true,
  },
  {
    userId: 4,
    id: 64,
    title: "voluptas consequatur qui ut quia magnam nemo esse",
    completed: false,
  },
  {
    userId: 4,
    id: 65,
    title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
    completed: false,
  },
  {
    userId: 4,
    id: 66,
    title: "rerum eum molestias autem voluptatum sit optio",
    completed: false,
  },
  {
    userId: 4,
    id: 67,
    title: "quia voluptatibus voluptatem quos similique maiores repellat",
    completed: false,
  },
  {
    userId: 4,
    id: 68,
    title: "aut id perspiciatis voluptatem iusto",
    completed: false,
  },
  {
    userId: 4,
    id: 69,
    title:
      "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
    completed: false,
  },
  {
    userId: 4,
    id: 70,
    title: "ut sequi accusantium et mollitia delectus sunt",
    completed: false,
  },
  { userId: 4, id: 71, title: "aut velit saepe ullam", completed: false },
  {
    userId: 4,
    id: 72,
    title: "praesentium facilis facere quis harum voluptatibus voluptatem eum",
    completed: false,
  },
  {
    userId: 4,
    id: 73,
    title: "sint amet quia totam corporis qui exercitationem commodi",
    completed: true,
  },
  {
    userId: 4,
    id: 74,
    title: "expedita tempore nobis eveniet laborum maiores",
    completed: false,
  },
  {
    userId: 4,
    id: 75,
    title: "occaecati adipisci est possimus totam",
    completed: false,
  },
  { userId: 4, id: 76, title: "sequi dolorem sed", completed: true },
  {
    userId: 4,
    id: 77,
    title:
      "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
    completed: false,
  },
  {
    userId: 4,
    id: 78,
    title: "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
    completed: false,
  },
  { userId: 4, id: 79, title: "eum ipsa maxime ut", completed: true },
  {
    userId: 4,
    id: 80,
    title: "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
    completed: false,
  },
];

export const handlers = [
  http.get("*/todos", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("_page") || "1";
    const limit = url.searchParams.get("_limit") || "20";

    return HttpResponse.json(page === "1" ? todosPage1 : todosPage2);
  }),

  http.put("*/todos/:id", () => {
    return HttpResponse.json({
      userId: 4,
      id: 62,
      title: "et placeat et tempore aspernatur sint numquam",
      completed: false,
    });
  }),
];
