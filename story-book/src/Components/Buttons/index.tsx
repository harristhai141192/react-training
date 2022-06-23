import './index.css'

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large'
  label: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const buttonMode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
    type='button'
    className={['storybook-button', `storybook-button--${size}`, buttonMode].join(' ')}
    style={{backgroundColor}}
    {...props}
    >
      {label}
    </button>
  )
}

export default Button