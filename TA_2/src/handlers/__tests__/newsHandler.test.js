/* eslint-disable no-undef */
const newsService = require("../../services/newsService");

jest.mock("../../services/newsService", () => ({
  getTopHeadlinesService: jest.fn(),
  getNewsByQuery: jest.fn(),
}));

const newsHandler = require("../../handlers/newsHandler");

const reply = {
  send: async (el) => el,
  status: async (el) => el,
};
const request = {
  headers: {
    authorization: "abc",
  },
  query: {},
};

const requestWithQuery = {
  headers: {
    authorization: "abc",
  },
  query: {
    search: "trump",
  },
};
describe("News Handler test", () => {
  beforeEach(() => {
    newsService.getTopHeadlinesService.mockClear();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should return news data for a logged in user", async () => {
    newsService.getTopHeadlinesService.mockImplementation(() => {
      return {
        count: 1,
        data: [
          {
            link: "",
            headline: "",
          },
        ],
      };
    });
    let response = await newsHandler(request, reply);
    expect(response).toEqual({
      count: 1,
      data: [
        {
          link: "",
          headline: "",
        },
      ],
    });
  });
  it("should return news data according to search query", async () => {
    newsService.getNewsByQuery.mockImplementation(() => {
      return {
        count: 1,
        data: [
          {
            link: "",
            headline: "",
          },
        ],
      };
    });
    let response = await newsHandler(requestWithQuery, reply);
    expect(response).toEqual({
      count: 1,
      data: [
        {
          link: "",
          headline: "",
        },
      ],
    });
  });
});
