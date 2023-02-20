import AnotherComponent from './anotherComponent'

function FirstComponent() {
  // Algum comentário

  return (
    <div className="Firstcomponent">
      {/*Comentário no JSX*/}
      <p>Primeiro componente</p>
      {2 + 2}
      <AnotherComponent />
    </div>
  )
}

export default FirstComponent
