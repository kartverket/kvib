import { ButtonHTMLAttributes } from 'react';
import styled from "styled-components";

const StyledButton = styled.button<Pick<Props, 'primary' | 'size'>>`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Are am I a primary buttom man? */
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export const Button = ({ 
  primary = false,
  size = 'medium',
  children,
  ...props
 }: Props ) => (
  <StyledButton {...props} primary={primary} size={size}>{children}</StyledButton>
)
