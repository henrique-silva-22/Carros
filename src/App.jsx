import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <section className="lg:flex">

        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="icone dos carros sedans" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/carros/estoque/volkswagen/polo%20sedan?idcmp=s08%253Ac03%253A4059ff00caaf42d9a1545d0b89e0a37f&tipoveiculo=carros&anunciante=Concessionária%7CLoja&carroceria=Sedã&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwqpSwBhClARIsADlZ_Tm3Oq3qX544VMwvk8QuQZx5LrR4AuHhZoCH5qOWc0_uaH7tJnJ8zzsaArY8EALw_wcB&estadocidade=estoque&marca1=VOLKSWAGEN&modelo1=POLO%20SEDAN&idcmpint=t1:c17:m07:webmotors:modelo::volkswagen%20polo%20sedan&autocomplete=sedan&autocompleteTerm=VOLKSWAGEN%20POLO%20SEDAN"target="_blank">  ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={iconSuvs} alt="icone do carro suvs" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs" target="_blank" >ver mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={iconLuxury} alt="icone do carro luxo" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">ver mais</a>
        </div>
      </section>

    </main>
  )
}
