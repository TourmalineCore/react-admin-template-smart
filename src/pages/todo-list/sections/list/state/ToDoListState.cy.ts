describe(`ToDoListState`, () => {
  it(`
  GIVEN initial state with no ToDo items
  WHEN ask for todos
  SHOULD return an empty list 
  `, () => {
    const toDoListState = new ToDoListState();

    expect(toDoListState.todos).to.deep.eq([]);
  });
});
