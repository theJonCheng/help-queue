import ticketListReducer from "../../reducers/ticket-list-reducer";

describe("ticketListReducer", () => {
  let action;

  const currentState = {
    1: {
      names: "Homer and Bart",
      location: "Moe's Tavern",
      issue: "out of Duff Beer",
      id: 1,
    },
    2: {
      names: "Marge and Lisa",
      location: "Try 'n Save",
      issue: "coupon expired",
      id: 2,
    },
  };

  const ticketData = {
    names: "Homer and Bart",
    location: "Moe's Tavern",
    issue: "out of Duff Beer",
    id: 1,
  };

  test("Should return default state if no action type is recognized", () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new ticket data to mainTicketList", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      id: id,
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });

  test("Should successfully delete a ticket", () => {
    action = {
      type: "DELETE_TICKET",
      id: 1,
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: "Marge and Lisa",
        location: "Try 'n Save",
        issue: "coupon expired",
        id: 2,
      },
    });
  });
});
