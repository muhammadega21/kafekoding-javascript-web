# Pengenalan Javascript

## Program

Program adalah serangkaian instruksi atau perintah yang ditulis dengan bahasa tertentu agar komputer bisa menjalankan dan menghasilkan suatu pekerjaan.
![Contoh Program](/img/contoh-program.png)

## Bahasa Pemograman

### Tingkat Bahasa Pemograman

![Tingkat Bahasa Pemograman](/img/tingkat-bahasa-pemograman.png)

### Bahasa Pemograman Tingkat Tinggi

Mencetak **Hello World** menggunakan **Javascript**:

```jsx title="index.js"
console.log("Hello, World!");
```

Mencetak **Hello World** menggunakan **Python**:

```jsx title="index.py"
print("Hello, World!");
```

### Bahasa Pemograman Rendah

Mencetak **Hello World** menggunakan **Assembly**:

```jsx title="assembly"
section .data
    msg db 'Hello, World!',0Ah

section .text
    global _start
_start:
    mov edx, 13
    mov ecx, msg
    mov ebx, 1
    mov eax, 4
    int 0x80

    mov eax, 1
    int 0x80
```

### Data Populeritas Bahasa Pemrograman tahun 2023

Data Statistik Popularitas berdasarkan [Survey Stack Overflow 2025](https://survey.stackoverflow.co/2025/technology#most-popular-technologies-language).
![Popularitas Bahasa Pemograman](/img/stackoverflow-all-respondents.png)

## Sejarah Javascript

1. **Awal Mula (1995)**

   - Dibuat oleh Brendan Eich di perusahaan Netscape.
   - Awalnya bernama Mocha, kemudian LiveScript, dan akhirnya menjadi JavaScript.
   - Tujuannya: membuat halaman web lebih interaktif.

2. **Popularitas dan Standarisasi (1996–1997)**

   - Microsoft membuat versi tandingan bernama JScript di Internet Explorer.
   - Agar tidak kacau dengan banyak versi, JavaScript kemudian distandarisasi oleh ECMA International (1997) dengan nama resmi ECMAScript

3. **Perkembangan Awal (2000-an)**
   - Awalnya JavaScript dianggap bahasa “mainan” karena hanya dipakai untuk efek sederhana di web (misalnya pop-up, validasi form).
   - Namun muncul AJAX (Asynchronous JavaScript and XML) sekitar 2005, yang membuat website bisa memuat data tanpa reload halaman penuh (contohnya: Gmail, Google Maps).
   - Inilah yang membuat JavaScript naik kelas.
4. **Era Framework (2010-an)**
   - Muncul banyak library/framework yang mempopulerkan JavaScript: jQuery, AngularJS, React, Vue.js.
   - JavaScript tidak hanya di front-end, tapi juga di back-end lewat Node.js (2009). Artinya, JavaScript bisa dipakai full-stack.
5. **Era Modern (2015–Sekarang)**
   - Rilis ECMAScript 6 (ES6) pada 2015 jadi tonggak penting: menambah fitur modern seperti let, const, arrow function, class, module, dll.
   - Kini JavaScript dipakai di banyak bidang: Web front-end (React, Vue, Angular), Back-end (Node.js, Deno), Mobile apps (React Native, Ionic), Desktop apps (Electron), Bahkan di IoT & AI.

## Pengertian Javascript

**JavaScript** adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi lebih interaktif, dinamis, dan menarik. Jika HTML berfungsi untuk membuat struktur halaman, dan CSS untuk mempercantik tampilan, maka JavaScript dipakai untuk memberikan perilaku pada halaman tersebut.

Dengan JavaScript, sebuah website bisa:

- Menanggapi aksi pengguna (misalnya klik tombol atau mengetik di form).
- Membuat animasi, validasi form.
- Hingga aplikasi web kompleks.

Sekarang, JavaScript tidak hanya berjalan di browser (client-side), tetapi juga bisa berjalan di server dengan bantuan Node.js, serta di perangkat mobile, desktop, bahkan IoT.

## Pentingnya Javascript

Dalam sebuah analogi robot, javascript itu mempengaruhi pola fungsi semuanya, seperti

![Analogi Javascript](/img/javascript.gif)
Berdasarkan gambar diatas, bisa kita ambil kesimpulan yaitu dalam sebuah analogi robot

- HTML diibaratkan dengan kerangka robot, yang hanya terdiri dari kawat-kawat (konten halaman web)
- CSS diibaratkan dengan desain kerangka, seperti baju, topeng dan lain-lain (tata letak halaman web)
- JS diibaratkan dengan otak yang mampu bergerak dinamis (perilaku halaman web)
