import { Section } from "../../shared/ui/Section";
import { BlockList } from "../../widgets/BlockList";
import { AddButton } from "../../shared/ui/AddButton";

export const HomePage = () => {
  return (
    <Section title="block">
      <BlockList />
      <AddButton />
    </Section>
  );
};

export default HomePage;
