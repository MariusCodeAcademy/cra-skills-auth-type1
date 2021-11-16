## Darysime tik React projektą - back-endą jums pateikiu.

Apie React: Pradedame nuo create-react-app, įsidiegiame styled-components (CSS frameworkų naudoti negalime), react-router-dom (naudosim lazy loading) ir kitus reikalingus modulius. Būtina naudoti DotEnv. Dizainas svarbu, stenkitės palaikyti bendrą tvarką.

### BASE_URL = https://react-test-sejo6.ondigitalocean.app/

##Kokius puslapius sukurt?

## Register

Šis puslapis turės meniu juostą (logotipas, login ir register nuorodos), formą su el. paštu ir slaptažodžiu – įvedus kreipiasi į serverį (https://react-test-sejo6.ondigitalocean.app/v1/auth/register). Sėkminga ar nesėkminga registracija išmeta notificationą (įskaičiuoti visus įmanomus error handlingus). Serveris grąžina tik du: 200 arba 400.

## Login

Šis puslapis turės meniu juostą (logotipas, login ir register nuorodos), formą su el. paštu ir slaptažodžiu – įvedus kreipiasi į serverį (https://react-test-sejo6.ondigitalocean.app/v1/auth/login). Jei sėkmingai – nukreipia į Home, jei ne – išmetą notification klaidą (įskaičiuoti visus įmanomus error handlingus). Serveris grąžina tik du: 200 arba 400.

## Home (patekti galima tik prisijungus – router blocking)

Šis puslapis turės meniu juostą (logotipas, home ir add nuorodos <- skirtingai nei login/register puslapiuose) bei kortelėse (t.y. stačiakampiuose, dizainas nesvarbu) atvaizduos įrašus (atsisiųstus iš https://react-test-sejo6.ondigitalocean.app/v1/content/skills). Kol jie neužsikrovė – išmeta errorą. Jei nėra nei vieno įrašo – išmeta, kad nėra įrašų.

## Add (patekti galima tik prisijungus – router blocking)

Šis puslapis turės meniu juostą (logotipas, home ir add nuorodos) bei formą (t.y. title – input text ir description - textarea), kuriuos užpildžius – išsiųs į serverį (https://react-test-sejo6.ondigitalocean.app/v1/content/skills). Bet kokį atsaką, sėkmingą ar ne, atvaizduojame su notificationu.
