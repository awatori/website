export default function CompanyOverview() {
  return (
    <main className="mx-14 md:mx-20 lg:mx-36 mt-28 mb-16 min-h-lvh">
      <h1>Company Overview</h1>
      <hr />
      <section className="text-xs md:text-sm">
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4">Company Name</p>
          <p>Awa'Tori</p>
        </div>
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4 shrink-0">Representative</p>
          <p>Oluwabukola Adebimpe Adejobi (Bukky) <br />
            Seiko Mbako</p>
        </div>
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4 shrink-0">Address</p>
          <p>WORLD UDAGAWA BUILDING 6F 36-6 Udagawacho, Shibuya City, <br />150-0042 Tokyo</p>
        </div>
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4">Established</p>
          <p>2019</p>
        </div>
        <div className="flex gap-10 mt-8">
          <p className="font-bold w-1/3 md:w-1/4">Capital</p>
          <p>200,000 JPY</p>
        </div>
      </section>
    </main>
  )
}