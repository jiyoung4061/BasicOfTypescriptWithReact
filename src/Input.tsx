import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({value, onChange}) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange}/>
);

interface IFormProps {
    onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({ children, onFormSubmit }) => ( //기본적으로 모든 React Component는 children이라는 props를 가짐
  <form onSubmit={onFormSubmit}>{children}</form>
);
