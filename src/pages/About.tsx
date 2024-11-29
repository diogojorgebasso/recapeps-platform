export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Sobre Nós</h1>
                <p className="text-lg leading-relaxed mb-6">
                    Bem-vindo à nossa plataforma! Somos apaixonados por ajudar pessoas a
                    alcançar seus objetivos por meio de ferramentas inovadoras e
                    acessíveis. Nosso foco está em criar soluções simples e intuitivas
                    que tornam o aprendizado e a organização mais eficazes.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
                <p className="text-lg leading-relaxed mb-6">
                    Nossa missão é fornecer uma plataforma que capacite indivíduos a
                    aprender de maneira eficiente, organizar ideias e alcançar o sucesso
                    em seus objetivos pessoais e profissionais.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Por que nos Escolher?</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-medium">Facilidade de Uso:</span> Nossas
                        ferramentas são projetadas com simplicidade e usabilidade em mente.
                    </li>
                    <li>
                        <span className="font-medium">Tecnologia Avançada:</span> Usamos as
                        melhores práticas e tecnologias para garantir eficiência.
                    </li>
                    <li>
                        <span className="font-medium">Apoio ao Cliente:</span> Estamos aqui
                        para ajudar você em cada etapa da sua jornada.
                    </li>
                </ul>
                <div className="mt-8 text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Fale Conosco
                    </a>
                </div>
            </div>
        </div>
    );
}
