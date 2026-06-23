export interface ButtonPrimaryProps {
  label: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}
