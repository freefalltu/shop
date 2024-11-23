import cl from './MyInput.module.scss'

const MyInput = () => {
    return (
        <input type='text' className={cl.input} placeholder='Search by title' />
    )
}

export default MyInput