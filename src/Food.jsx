const Food = () => {
  const food = [
    { id: crypto.randomUUID(), fruit: '🍏 Apple' },
    { id: crypto.randomUUID(), fruit: '🍊 Orange' },
    { id: crypto.randomUUID(), fruit: '🍍 Pineapple' },
  ];

  return (
    <ul>
      {food.map((item) => {
        return <li key={item.id}>{item.fruit}</li>;
      })}
    </ul>
  );
};

export default Food;
