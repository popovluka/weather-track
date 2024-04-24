# Vremenska prognoza za gradove

Ova React TypeScript aplikacija omogućava vam praćenje vremenske prognoze za različite gradove. Možete dodavati gradove, videti trenutnu temperaturu i vlažnost vazduha, kao i premještati gradove na vrh liste ili ih ukloniti.


`\ \        /          |   |                |                  |              
 \ \  \   / _ \  _` | __| __ \   _ \  __|  __|  __| _` |  __| |  /  _ \  __| 
  \ \  \ /  __/ (   | |   | | |  __/ |     |   |   (   | (      <   __/ |    
   \_/\_/ \___|\__,_|\__|_| |_|\___|_|    \__|_|  \__,_|\___|_|\_\\___|_|    `
                                                                             

## Kako koristiti

1. Klonirajte ovaj repozitorijum na vaš lokalni sistem koristeći `git clone`.
2. U terminalu, unesite `cd naziv-foldera` kako biste ušli u direktorijum projekta.
3. Instalirajte sve potrebne zavisnosti pokretanjem `npm install`.
4. Pokrenite aplikaciju koristeći `npm start`.
5. Otvorite pretraživač i idite na `http://localhost:3000` da biste videli aplikaciju u akciji.

## Funkcionalnosti

- **Pregled svih gradova:** Vidite sve dodate gradove sa informacijama o temperaturi i vlažnosti vazduha.
- **Uklanjanje gradova:** Uklonite gradove sa liste ukoliko više nisu potrebni.
- **Premještanje gradova na vrh liste:** Premještajte gradove na vrh liste kako biste istakli važnije ili često praćene gradove.

## Tehnički detalji

- **React i TypeScript:** Aplikacija je izgrađena koristeći React biblioteku sa TypeScript podrškom, što omogućava strogu tipizaciju i bolju sigurnost prilikom razvoja.
- **Komponentna struktura:** Aplikacija je organizovana u nekoliko komponenti radi lakšeg održavanja i skaliranja.
- **Stanje aplikacije:** Stanje aplikacije se upravlja koristeći React-ov Hook `useState` radi praćenja dodatih gradova i ažuriranja liste.
- **Interakcija sa korisnikom:** Korisnička interakcija omogućena je putem interaktivnih elemenata poput dugmadi za dodavanje i uklanjanje gradova, kao i premještanje na vrh liste.

