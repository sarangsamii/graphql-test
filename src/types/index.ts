export type ChildrenProps = {
  window?: () => Window;
  children: React.ReactElement;
};

export type CharacterProps = {
  id:string;
  name: string;
  onUpdate:(arg:{id:string,name:string})=>void;
};


export type AddDialogProps = {
  onSubmit: (arg:string)=>void;
};

