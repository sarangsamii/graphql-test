export type ChildrenProps = {
  window?: () => Window;
  children: React.ReactElement;
};

export type CharacterProps = {
  name: string;
  status: string;
  gender: "Male" | "Female";
  image: string;
};
