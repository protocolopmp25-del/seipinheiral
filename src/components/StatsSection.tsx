export function StatsSection() {
  const stats = [
    {
      percentage: "72",
      description: "Árvores salvas nos próximos quatro anos"
    },
    {
      percentage: "180.000",
      description: "Economia média de folhas por ano"
    },
    {
      percentage: "100%",
      description: "Processos Digitais"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-3xl p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-white mb-3">
              Estatísticas
            </h2>
            <p className="text-white/90">
              Resultados estimados para implementação do SEI
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-3" style={{ fontSize: '3.5rem', lineHeight: '1', fontWeight: '700' }}>
                  {stat.percentage}
                </div>
                <p className="text-white/90">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
