import feedListReducer from "./../../src/reducers/feed-list-reducer";

describe("feedListReducer", () => {
  let action;
  const samplePostData = {
      name: "Dingus",
      content: "Here he lay, captain Dingus of the SS DumbAss",
      time: 1500000000000,
      id: 0
  };

  test("Should return default state if no action type is recognized", () => {
    expect(feedListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to feedList", () => {
      const { name, content, time, id } = samplePostData;
    action = {
      type: "ADD_POST",
        name: name,
        content: content,
        time: time,
        id: id
    };
    expect(feedListReducer({}, action)).toEqual({
      [id]: {
          name: name,
          content: content,
          time: time,
          id: id
      }
    });
  });
});
