test('criando um snapshot de um objeto', () => {
    const text = JSON.stringify({ id: 1, userName: "Andre", access: true });
    expect(text).toMatchSnapshot();
});