import './register.css'

export default function Register() {
    return (
        <div className="register-form">
            <h2>Регистрация</h2>
            <form >
                <label htmlFor="username">Потребителско име</label>
                <input type="text" id="username" name="username" placeholder="username" />
                <label htmlFor="email">Имейл</label>
                <input type="email" id="email" name="email" placeholder="email" />

                <label htmlFor="password">Парола</label> 
                <input type="password" id="password" name="password"
                    placeholder="******"/>
                    <label htmlFor="confirm-password">Потвърди паролата</label> 
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="******"/>
                  
                    <button type="submit">Регистрация</button>
            </form>
        </div>
    )
}