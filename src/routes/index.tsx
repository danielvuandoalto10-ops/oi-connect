import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#ff2d8d] px-6 py-10 text-black">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="w-full max-w-3xl rounded-3xl border-4 border-black bg-white p-8 shadow-[12px_12px_0_#000] sm:p-12">
          <div className="mb-8 inline-flex rounded-full border-2 border-black bg-[#ff2d8d] px-4 py-2 text-sm font-bold uppercase tracking-wider">
            Oi Connect
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Controle de Baixas e Entregas
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-zinc-700">
            Registre, organize e encontre rapidamente os comprovantes das suas
            entregas, com informações, responsáveis, datas, horários e fotos.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["📦", "Baixas", "Cadastre cada entrega"],
              ["🔎", "Pesquisa", "Encontre uma entrega"],
              ["📸", "Comprovantes", "Guarde as fotos"],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border-2 border-black bg-pink-50 p-5"
              >
                <div className="text-3xl">{icon}</div>
                <h2 className="mt-3 font-black">{title}</h2>
                <p className="mt-1 text-sm text-zinc-600">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
