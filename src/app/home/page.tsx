
export default function Home() {
    // position: static, absolute, relative, fixed, sticky, z-index
    // flex: gap-0, flex-row, flex-col, items-center, justify-center
    return (
        <main className="min-h-screen w-full font-sans text-gray-800">
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">MM Contabilidade</h1>
                <nav className="space-x-6 text-sm">
                    <a href="#servicos" className="hover:underline">Serviços</a>
                    <a href="#diferenciais" className="hover:underline">Diferenciais</a>
                    <a href="#sobre" className="hover:underline">Sobre Nós</a>
                    <a href="#localizacao" className="hover:underline">Localização</a>
                    <a href="#contato" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Entrar em contato</a>
                </nav>
            </header>

            <section className="bg-blue-50 py-20 text-center px-4">
                <h2 className="text-4xl font-bold mb-4">Soluções contábeis completas</h2>
                <p className="text-xl max-w-2xl mx-auto">para sua empresa crescer com segurança</p>
            </section>

            <section className="py-20 px-4 max-w-4xl mx-auto grid gap-10" id="servicos">
                <div>
                    <h3 className="text-2xl font-bold mb-2">Sua parceira em todos os momentos do seu negócio</h3>
                    <p>Na MM Contabilidade, acompanhamos você em todas as etapas do ciclo empresarial.</p>
                </div>
                <ul className="space-y-4">
                    <li><strong>Abertura de empresa:</strong> cuidamos da documentação e burocracia.</li>
                    <li><strong>Administração inteligente:</strong> gestão financeira eficiente.</li>
                    <li><strong>Consultoria especializada:</strong> soluções sob medida para reduzir custos.</li>
                    <li><strong>Encerramento seguro:</strong> processo tranquilo e sem complicações.</li>
                </ul>
            </section>

            <section className="bg-gray-100 py-20 px-4" id="diferenciais">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Experiência e credibilidade</h4>
                        <p>Anos de atuação no mercado com casos de sucesso comprovados.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Equipe especializada</h4>
                        <p>Profissionais capacitados para atender empresas de todos os portes.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Atendimento personalizado</h4>
                        <p>Soluções adaptadas às necessidades específicas de cada cliente.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-4xl mx-auto" id="sobre">
                <h3 className="text-2xl font-bold mb-4">Quem somos</h3>
                <p className="mb-4">A MM Contabilidade tem mais de uma década de atuação com foco em soluções contábeis estratégicas e personalizadas para empresas de todos os portes.</p>
                <p className="mb-4">Somos referência em contabilidade consultiva e auxiliamos nossos clientes na tomada de decisões financeiras mais assertivas.</p>
                <p>Nosso compromisso é simplificar sua gestão contábil com segurança, conformidade e crescimento sustentável.</p>
            </section>

            <section className="bg-blue-50 py-20 px-4" id="faq">
                <h3 className="text-2xl font-bold mb-6 text-center">Perguntas frequentes</h3>
                <ul className="space-y-4 max-w-3xl mx-auto">
                    <li><strong>Por que devo contratar um contador para cálculos trabalhistas?</strong> Garantia de precisão e conformidade com decisões judiciais.</li>
                    <li><strong>Como saber se preciso de um contador?</strong> Se há dúvidas ou processos judiciais em andamento, é recomendável contar com um especialista.</li>
                    <li><strong>Como é feita a análise dos cálculos?</strong> Com base nos documentos fornecidos e parâmetros legais atualizados.</li>
                    <li><strong>Quanto tempo leva para realizar os cálculos?</strong> Depende da complexidade, mas costuma ser rápido com documentos organizados.</li>
                    <li><strong>Quais documentos são necessários?</strong> Processos judiciais, folhas de pagamento, contratos e demais documentos pertinentes.</li>
                </ul>
            </section>

            <section className="py-20 px-4 text-center" id="localizacao">
                <h3 className="text-2xl font-bold mb-2">Onde estamos localizados</h3>
                <p>Rua Tancredo Neves, 4002</p>
            </section>

            <footer className="bg-gray-800 text-white text-center py-8" id="contato">
                <p className="mb-2">MM CONTABILIDADE todos os direitos reservados.</p>
                <p>Entrar em contato</p>
            </footer>
        </main>
    )
}