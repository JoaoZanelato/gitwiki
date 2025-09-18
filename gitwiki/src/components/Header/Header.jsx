import gitLogo from '../../assets/github.png'
import { HeaderContainer } from "./styles";
function Header() {
  <HeaderContainer>
    <img src={gitLogo} alt="git-logo" width={72} height={72} />
    <h1>GitWiki</h1>
  </HeaderContainer>;
}
export default Header;
