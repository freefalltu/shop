import { ReactNode } from 'react'
import cn from 'classnames'
import cl from './MyButton.module.scss'

interface MyButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    view?: 'text' | 'icon';
    size?: 'big' | 'small';
  }

const MyButton: React.FC<MyButtonProps> = ({
    children,
    className,
    onClick,
    view = 'text',
    size = 'small',
    }) => {
    return (
        <button className={cn(className, cl[view], cl[size])} onClick={onClick}>
            {children}
        </button>
    )
}

export default MyButton