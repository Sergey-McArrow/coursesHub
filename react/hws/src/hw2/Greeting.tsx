import { FC } from 'react';

type TGreetingProps = {
  name: string;
};

export const Greeting: FC<TGreetingProps> = ({ name }) => {
  return <h1>Привет, {name}!</h1>;
};
