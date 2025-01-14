# FCM-Access-Token

Repositori ini berisi skrip untuk mendapatkan token akses Firebase Cloud Messaging (FCM).

## Instalasi

1. Clone repositori ini ke komputer Anda:
   ```bash
   git clone https://github.com/bailyboy021/FCM-Access-Token.git
   ```

2. Masuk ke folder proyek:
   ```bash
   cd FCM-Access-Token
   ```

3. Instal dependensi menggunakan npm:
   ```bash
   npm install jsonwebtoken
   ```

## Penggunaan

1. Pastikan Anda memiliki file kredensial Firebase (`user-firebase.json`) di root folder proyek.
2. Jalankan skrip untuk mendapatkan token akses:
   ```bash
   node getAccessToken.js
   ```
3. Token akses akan ditampilkan di terminal (expired 1 jam).

