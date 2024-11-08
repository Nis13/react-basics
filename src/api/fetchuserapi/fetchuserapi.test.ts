import { describe, it, expect, vi } from "vitest";
import { useFetchUserApi } from "./fetchuserapi";

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
}));

vi.mock("axios", async (importActual) => {
  const actual = await importActual<typeof import("axios")>();
  const mockAxios = {
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
      })),
    },
  };
  return mockAxios;
});

describe("useFetchUserApi", () => {
  it("should return user data when the API call is successful", async () => {
    const mockData = [
      {
        id: 1,
        name: "abc",
        email: "aba@mail.com",
        password: "Password",
        role: "admin",
      },
      {
        id: 2,
        name: "abc2",
        email: "aba2@mail.com",
        password: "Password2",
        role: "user",
      },
    ];

    mocks.get.mockResolvedValueOnce({
      data: mockData,
    });

    const result = await useFetchUserApi();
    expect(mocks.get).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });
});
