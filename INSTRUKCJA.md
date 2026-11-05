# Wizytówka Arkadiusza Mordaka — przygotowanie i publikacja

## Stan tej paczki

**WERSJA ROBOCZA — nie publikować jako finalnej wizytówki.**

Brakuje zatwierdzonej grafiki z poprzedniej rozmowy oraz potwierdzonych pełnych danych kontaktowych. Nie zastąpiono jej nową ilustracją. Plik vCard zawiera na razie wyłącznie imię, nazwisko i adres strony. Po otrzymaniu danych należy go uzupełnić i sprawdzić import na telefonie.

Gotowe: prawdziwy kod QR, udostępnianie przez Web Share API, kopiowanie linku i ręczny fallback, pobieranie pliku vCard, manifest i ikony skrótu. Nie ma zewnętrznych skryptów, śledzenia ani procesu kompilacji.

## Co trzeba uzupełnić

1. Dodać zatwierdzoną grafikę jako `assets/wizytowka.png` i sprawdzić ją w podglądzie.
2. Jeżeli na oryginalnej grafice znajduje się imitacja QR, przed publikacją uzgodnić jej zastąpienie prawdziwym kodem albo zasłonięcie. W paczce prawdziwe kody znajdują się w `assets/qr.png` i `assets/qr.svg`.
3. Uzupełnić `arkadiusz-mordak.vcf` potwierdzonymi danymi; zachować format vCard 3.0, UTF-8 i zakończenia wierszy CRLF. Dodać czytelne dane kontaktowe również do HTML, aby były dostępne bez odczytywania grafiki.
4. Sprawdzić wygląd i zmienić status niniejszej instrukcji po zakończeniu przygotowania.

## Publikacja na GitHub Pages — po uzupełnieniu

1. Otwórz https://github.com/ArekM2506/wizyt-wka-2026
2. Wybierz **Add file → Upload files**. Prześlij zawartość folderu `wizytowka` (nie ZIP ani zewnętrzny folder). Folder `assets` musi pozostać folderem. Plik `index.html` musi być widoczny bezpośrednio w głównym katalogu repozytorium.
3. Zapisz przyciskiem **Commit changes** do gałęzi `main`.
4. Otwórz https://github.com/ArekM2506/wizyt-wka-2026/settings/pages
5. **Build and deployment → Source → Deploy from a branch**.
6. Wybierz **main** oraz **/(root)** i kliknij **Save**.
7. Poczekaj na zakończenie wdrożenia w zakładce **Actions**. Otwórz https://arekm2506.github.io/wizyt-wka-2026/

Dokumentacja GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Test po publikacji

- Otwórz powyższy adres w prywatnym oknie: strona i grafika powinny załadować się bez logowania.
- Wybierz „Pokaż mój kod QR”. Zeskanuj **ten kod** aparatem innego telefonu. Powinien otworzyć dokładnie podany adres. QR został odczytany programowo; dostępność celu wymaga osobnego sprawdzenia po wdrożeniu.
- Wybierz „Udostępnij wizytówkę”. Na obsługiwanym telefonie otworzy się panel systemowy. Sprawdź, że wysłany link otwiera stronę. Anulowanie panelu nie kopiuje linku.
- W przeglądarce bez Web Share sprawdź kopiowanie. Jeżeli schowek jest zablokowany, pojawi się zaznaczony link do ręcznego skopiowania.
- Wybierz „Zapisz kontakt”. Otwórz pobrany plik w Kontaktach i sprawdź polskie znaki, telefon, e-mail i stronę. Samo pobranie nie dodaje kontaktu automatycznie; zatwierdź import na telefonie.
- Sprawdź układ na telefonie pionowo i poziomo oraz obsługę przycisków klawiaturą.

## Skrót na ekranie telefonu

Skrót dodawaj dopiero z opublikowanego adresu HTTPS.

**Android / Chrome:** menu ⋮ → „Dodaj do ekranu głównego” lub „Zainstaluj aplikację” → „Dodaj”. Nadaj nazwę „Moja wizytówka”. Jeżeli przeglądarka udostępni możliwość instalacji, przycisk pojawi się także w instrukcji na stronie.

**iPhone / Safari:** „Udostępnij” → „Do ekranu początkowego” → nazwa „Moja wizytówka” → „Dodaj”. Nazwy poleceń mogą zależeć od wersji systemu.

Dotknij nowej ikony i sprawdź otwarcie strony. Skrót wymaga internetu; paczka nie deklaruje działania offline. Manifest korzysta ze ścieżek względnych, właściwych dla podkatalogu repozytorium GitHub Pages.

## Adres i kod QR

Wszystkie funkcje używają stałego adresu `https://arekm2506.github.io/wizyt-wka-2026/`, także podczas lokalnego podglądu. Zmiana nazwy repozytorium lub domeny wymaga aktualizacji HTML, JavaScript, vCard i ponownego wygenerowania obu plików QR. Nie używać QR z obrazu wygenerowanego przez AI jako kodu użytkowego.
