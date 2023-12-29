type S4 = {
  name: string
}
type S8 = {
  name: string
  brandNames: string[]
}

function DrugList({ drugs, title, source }: { drugs: S4[] | S8[]; title: string; source: string }) {
  return (
    <section>
      <h2 className="text-center space-x-1 py-3 text-2xl sticky top-0 bg-white border-b border-dashed border-gray-400">
        <span className="font-semibold">{title}</span>
        <span>
          (
          <span className="text-blue-600 underline">
            <a href={source}>source</a>
          </span>
          )
        </span>
      </h2>

      <article className="leading-8">
        {drugs.map((drug) => {
          const typedDrug = drug as S4 | S8
          return (
            <div key={typedDrug.name}>
              <span className="font-medium">{typedDrug.name}</span>

              {"brandNames" in typedDrug && typedDrug.brandNames.length > 0 && (
                <span className="ml-1 text-neutral-500">
                  (
                  {typedDrug.brandNames.map((brandName, index) => (
                    <span key={brandName}>{(index ? ", " : "") + brandName}</span>
                  ))}
                  )
                </span>
              )}
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default function DrugsPage({ s4, s8 }: { s4: S4[]; s8: S8[] }) {
  return (
    <div className="flex flex-col items-center px-6 pt-3 pb-20 justify-items-center">
      <div className="text-3xl font-semibold">Schedule 4 and 8 drugs</div>
      <div>(2023-12-29)</div>

      <div className="flex flex-col sm:flex-row gap-6 pt-3">
        <DrugList
          drugs={s4}
          title="S4"
          source="https://www.health.nsw.gov.au/pharmaceutical/Pages/sch4d.aspx"
        />

        <DrugList
          drugs={s8}
          title="S8"
          source="https://www.health.nsw.gov.au/pharmaceutical/Pages/drugs-of-addiction-sch8.aspx"
        />
      </div>
    </div>
  )
}
