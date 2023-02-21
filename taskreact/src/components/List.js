const List = () => {
  const items = [
    {
      id: 1,
      name: 'Wesley'
    },
    {
      id: 2,
      name: 'Icaro'
    },
    {
      id: 3,
      name: 'Lima'
    }
  ]

  return (
    <div>
      {items.map(item => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  )
}

export default List
