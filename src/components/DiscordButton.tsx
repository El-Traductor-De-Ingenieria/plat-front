import '@styles/discordButton.scss'

interface Props {
    text: string
}

export function DiscordButton({ text }: Props) {
    return (
        <div className='container'>
        <a href="http://localhost:3000/api/auth/login">
            <button>{ text }</button>
        </a>
        </div>
    );
}