# Git & Github

![Git](/img/git-github.png)

## Git

### Pengertian Git

Git adalah Version Control System (VCS), yaitu sistem yang mencatat perubahan pada file kode sehingga kita bisa kembali ke versi sebelumnya, membandingkan perubahan, dan bekerja dalam tim dengan lebih aman.

### Fungsi Git

- Melacak riwayat perubahan.
- Bekerja kolaborasi tanpa menimpa kode orang lain.
- Bisa kembali ke versi kode sebelumnya (rollback).

### Instalasi Git

- **Windows**

```jsx title="Windows"
https://git-scm.com/download/win
```

- **MacOS**

```jsx title="Windows"
https://git-scm.com/download/mac
```

- **Linux**

```jsx title="Windows"
https://git-scm.com/download/linux
```

- **Verifikasi Instalasi GIT**

```jsx title="cmd"
git --version
```

### Konfigurasi Git

- **Mengatur nama pengguna git di lokal sistem**

```jsx title="Git Bash"
git config --global user.name "nama anda"
```

- **Mengatur email pengguna git di lokal sistem**

```jsx title="Git Bash"
git config --global user.email "email@example.com"
```

- **Melihat konfigurasi**

```jsx title="Git Bash"
git config --list
```

### Perintah Git

- **Membuat git repositori lokal**

```jsx title="Git Bash"
git init
```

- **Menyimpan perubahan file tertentu ke staging area**

```jsx title="Git Bash"
git add nama_file
```

- **Menyimpan perubahan di staging area ke git repositori**

```jsx title="Git Bash"
git commit -m "pesan commit"
```

- **Menampilkan daftar branch**

```jsx title="Git Bash"
git branch
```

- **Membuat branch baru**

```jsx title="Git Bash"
git branch nama_branch
```

- **Beralih ke branch lain**

```jsx title="Git Bash"
git checkout nama_branch
```

- **Menggabungkan antara branch saat ini dan branch lain**

```jsx title="Git Bash"
git merge branch_lain
```

- **Menampilkan perubahan berdasarkan status**

```jsx title="Git Bash"
git status
```

- **Menampilkan riwayat commit**

```jsx title="Git Bash"
git log
```

## Github

### Pengertian Github

Github adalah Layanan berbasis cloud untuk menyimpan repo Git secara online.

### Fungsi Github

- Kolaborasi tim
- Tempat portofolio untuk developer.
- Banyak project open-source tersedia.

### Remote Repositories

- **Menambahkan akses ke repositori remote**

```jsx title="Git Bash"
git remote add nama_alias URL_repositori
```

- **Mengirim perubahan lokal ke repositori remote**

```jsx title="Git Bash"
git push nama_alias nama_branch
```

- **Mengambil perubahan dari repositori remote**

```jsx title="Git Bash"
git pull nama_alias nama_branch
```
