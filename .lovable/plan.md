
# Szallaskepek csereje

## Osszefoglalas
Lecserelem a jelenlegi 5 placeholder kepet a 10 feltoltott valos kepre a "Newquay Fistral Beach View with pool" szallashoz.

## Feltoltott kepek (10 db)
A kepek a szallas kulonbozo reszeit mutatjak:
1. Furdoszoba (modern, kadaval es zuhanyzoval)
2. Etkező terasz kilatassal
3. Nappali TV-vel es kandalloval
4. Nappali kanapeaggyal es tengereszeti diszitessel
5. Kulteri uszoda (delfin mintazattal)
6. Tengerparti panorama
7. Teljesen felszerelt konyha
8. Fo haloszoba (duplaagyas, tengerparti hangulattal)
9. Masodik haloszoba (ket kulon agyas)

## Technikai lepesek

### 1. Kepek masolasa a projektbe
Mind a 10 kepet atmasolom a `src/assets` mappaba, leironevekkel:
- `newquay-bathroom.jpg`
- `newquay-dining.jpg`
- `newquay-living-tv.jpg`
- `newquay-living-sofa.jpg`
- `newquay-pool.jpg`
- `newquay-seaview.jpg`
- `newquay-kitchen.jpg`
- `newquay-bedroom-master.jpg`
- `newquay-bedroom-twin.jpg`

### 2. Adatfajl frissitese
Frissitem a `src/data/accommodations.ts` fajlt:
- Uj import utasitasok a 10 kephez
- A regi 5 placeholder import torlese
- Az `images` tomb frissitese az uj kepekkel

### 3. Regi kepek torlese
Torlom a mar nem hasznalt placeholder kepeket:
- `accommodation-1.jpg`
- `accommodation-2.jpg`
- `accommodation-3.jpg`
- `accommodation-4.jpg`
- `accommodation-5.jpg`

## Eredmeny
A szallas kartyaja es a foglalasi modal az osszes valos kepet fogja megjeleníteni a kepgaleriaban, a tengerparti panoramaval kezdve, mint fo kep.
