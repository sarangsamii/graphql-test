export type ChildrenProps = {
  window?: () => Window;
  children: React.ReactElement;
};

export type CharacterProps = {
  name: string;
};


export type AddDialogProps = {
  onSubmit: (arg:string)=>void;
};

