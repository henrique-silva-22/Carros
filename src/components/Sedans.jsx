import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {
  return (
    <section className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="icone dos carros sedans" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://www.webmotors.com.br/carros/estoque/volkswagen/polo%20sedan?idcmp=s08%253Ac03%253A4059ff00caaf42d9a1545d0b89e0a37f&tipoveiculo=carros&anunciante=Concessionária%7CLoja&carroceria=Sedã&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwqpSwBhClARIsADlZ_Tm3Oq3qX544VMwvk8QuQZx5LrR4AuHhZoCH5qOWc0_uaH7tJnJ8zzsaArY8EALw_wcB&estadocidade=estoque&marca1=VOLKSWAGEN&modelo1=POLO%20SEDAN&idcmpint=t1:c17:m07:webmotors:modelo::volkswagen%20polo%20sedan&autocomplete=sedan&autocompleteTerm=VOLKSWAGEN%20POLO%20SEDAN"target="_blank">  ver mais</a>
        </section>
  )
}
