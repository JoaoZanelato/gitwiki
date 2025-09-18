import { Container } from "./styles";
import ItemRepo from "../components/ItemRepo/ItemRepo";
import Input from "../components/Input/Input";
import { useState } from "react";
import Button from "../components/Button/Button";
import { api } from "../services/api";
import Header from "../components/Header/Header";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    window.alert("Repositório não encontrado ou já adicionado");
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter((repo) => !repo.id));
    console.log("Removendo Registro");
  };

  return (
    <Container>
      <Header />
      <Input
        value={currentRepo}
        onChange={(evt) => setCurrentRepo(evt.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, key) => (
        <ItemRepo key={key} repo={repo} remove={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
