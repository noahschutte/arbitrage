store.subscribe(() => {
  const market = store.getState();
  console.log(market);
});
