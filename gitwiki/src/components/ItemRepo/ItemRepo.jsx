import { ItemContainer } from "./styles";
function ItemRepo({ repo, remove }) {
  const handleRemove = () => {
    remove(repo.id);
  };

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="blank">
        Ver repositório
      </a>{" "}
      <br />
      <a href="#" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
