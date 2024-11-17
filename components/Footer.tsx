import SocialIcon from "./social-icons";

<meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/>

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <p>Leao</p>
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href="https://github.com/leurjim" size={6} />
                    <SocialIcon kind="github" href="" size={6} />
                </div>
                <p>PTMR</p>
            </div>
        </footer>
    )
}