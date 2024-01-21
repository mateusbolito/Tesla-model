import { Burger, Container, Footer, Header, Logo } from "./styles";
import { useTransform } from "framer-motion";

import useWrapperScroll from "../Model/useWrapperScroll";

export function UniqueOverlay() {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💜</a>
          </li>
          <li>
            <a href="#">by Mateus Bolito</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}
