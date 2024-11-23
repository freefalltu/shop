import classes from './MyButton.module.scss'

interface MyButtonProps {
    children: string
  }

const MyButton: React.FC<MyButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton