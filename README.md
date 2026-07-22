# Veb Layihəsi — Əlçatanlıq (Accessibility) və Responsiv Dizayn

Bu proyekt müasir veb standartlarına, **WCAG (Web Content Accessibility Guidelines)** tələblərinə və istifadəçi təcrübəsinə (UX/UI) tam uyğun şəkildə hazırlanmışdır. Layihədə xüsusilə **Əlçatanlıq (A11y)**, semantik HTML strukturu və klaviatura naviqasiyası ön plana çəkilmişdir.

---

## Əlçatanlıq (Accessibility) 

Əlçatanlıq mərhələsində görülən işlər 4 əsas meyar üzrə tam reallaşdırılmışdır:

### 1. Alt-Text (Şəkil Təsvirləri)
* Səhifədəki bütün `<img>` teqlərinə ekran oxuyucular (screen readers) üçün anlaşıqlı, dəqiq və məzmunlu `alt` atributları əlavə edilmişdir.
* Dekorativ məqsədli ikonlar üçün ekran oxuyucuların onları yersiz oxumaması adına `aria-hidden="true"` atributundan istifadə olunmuşdur.

### 2. Klaviatura ilə Naviqasiya
* Bütün interaktiv elementlər (`<a>`, `<button>`, `<input>`, `<textarea>`) `Tab` düyməsi ilə tam naviqasiya oluna bilir.
* `:focus-visible` psevdo-klasından istifadə edilərək klaviatura ilə gəzən istifadəçilər üçün **2px görünən fərqli haşiyə (outline)** tətbiq olunmuşdur:
  ```css
  input:focus-visible,
  textarea:focus-visible,
  button:focus-visible,
  a:focus-visible {
      outline: 2px solid #3498db;
      outline-offset: 2px;
  }
