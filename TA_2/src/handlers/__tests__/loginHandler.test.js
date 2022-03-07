/* eslint-disable no-undef */
const loginService = require("../../services/loginService");
const authorizeService = require("../../services/authorizeService");
jest.mock("../../dbConnection/postgres.js", () => ({
  sequelize: {
    define: () => {
      return { sync: async () => {} };
    },
    authenticate: () => jest.fn(),
  },
}));

jest.mock("../../services/loginService");
jest.mock("../../services/authorizeService");

const loginHandler = require("../../handlers/loginHandler");

const reply = {
  send: async (el) => el,
  status: async (el) => el,
};
const request = {
    body: {
        data: {
          emailId: "test5@test.com",
          password: "password",
        },
      },
}
describe("LoginHandler test", () => {

  beforeEach(() => {
    authorizeService.mockClear();
    loginService.mockClear();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should login a user with correct credentials and return jwt token", async () => {
    loginService.mockImplementation(() => {
       return request
    });
    authorizeService.mockImplementation(() => {
      return { token: "token" };
    });
    let response = await loginHandler(request, reply);
    expect(response.token).toBe("token");
  });

  it("should give User Not Found error if user not found in database ", async () => {
    loginService.mockImplementation(() => {
      return undefined;
    });
    let response = await loginHandler(request, reply);
    expect(response).toBe("User Not Found");
  });

  it("should give error if token is malformed/expired", async () => {
    try {
      loginService.mockImplementation(() => {
        return request
      });
      authorizeService.mockImplementation(() => {
        return Promise.reject({
          response: { status: 403 },
          message: "jwt expired",
        });
      });
      let response = await loginHandler(request, reply);
      expect(response.token).toBe("token");
    } catch (e) {
      expect(e.message).toBe("jwt expired");
    }
  });
});
