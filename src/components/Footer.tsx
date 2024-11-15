export default function Footer() {
    return (
        <footer id="contact" className="w-full py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Recapeps. Todos os direitos reservados.</p>
                <a href="mailto:contato@recapeps.com" className="hover:underline">contato@recapeps.com</a>
            </div>
        </footer>
    )
}