import { render } from "@testing-library/react";
import * as React from "react";
import data from "../../../public/data/users.json";
import { User } from "../../types/User";
import { Table } from "./Table";

describe("Users - Table", () => {
  let container: HTMLElement;
  const users = data as User[];

  beforeEach(() => {
    container = render(<Table data={users} />).container;
  });

  test("it should list display column headings", () => {
    const expectedValues = ["Name", "Balance", "Age", "Picture"];
    const tableHeaders = container.querySelectorAll("th");

    expectedValues.forEach((headerText, index) => {
      expect(tableHeaders[index].innerHTML).toBe(headerText);
    });
  });

  test("it should output each user's name", () => {
    const expectedValues = users.map(
      ({ name: { first, last } }) => `${first} ${last}`
    );
    const tableCells = container.querySelectorAll("td:nth-child(1)");

    expectedValues.forEach((name, index) => {
      expect(tableCells[index].innerHTML).toBe(name);
    });
  });

  test("it should output each user's balance", () => {
    const expectedValues = users.map(({ balance }) => balance);
    const tableCells = container.querySelectorAll("td:nth-child(2)");

    expectedValues.forEach((balance, index) => {
      expect(tableCells[index].innerHTML).toBe(balance);
    });
  });

  test("it should output each user's age", () => {
    const expectedValues = users.map(({ age }) => age);
    const tableCells = container.querySelectorAll("td:nth-child(3)");

    expectedValues.forEach((age, index) => {
      expect(tableCells[index].innerHTML).toBe(age.toString());
    });
  });

  test("it should output each user's picture", () => {
    const tableCells = container.querySelectorAll("td:nth-child(4)");

    expect.assertions(2 * users.length);

    users.forEach((user, index) => {
      const image = tableCells[index].querySelector("img");

      if (image) {
        expect(image.getAttribute("alt")).toBe(
          `${user.name.first} ${user.name.last}`
        );
        expect(image.getAttribute("src")).toBe(user.picture);
      }
    });
  });
});
