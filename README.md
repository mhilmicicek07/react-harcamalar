# 📝 Harcamalar Uygulaması

Bu proje, kullanıcıların **harcamalarını ekleyip yönetebileceği** basit ama işlevsel bir **React tabanlı harcama takip uygulaması**dır.  
Uygulama, **React**, **CSS** ve tarayıcının **LocalStorage** özelliği kullanılarak geliştirilmiştir. Harcamalar, sayfa yenilense veya tarayıcı kapatılsa bile kaybolmaz.  

---

## 🚀 Özellikler

- ✅ Yeni harcama ekleme ve listeye dinamik olarak yansıtma  
- 🗑️ Tek bir harcamayı kolayca silme  
- 💾 Harcamaları tarayıcı **LocalStorage**'ında kalıcı olarak saklama  
- 🔁 Sayfa ilk yüklendiğinde harcamaların LocalStorage'dan otomatik olarak geri yüklenmesi  
- 💻 **Modern ve Temiz Arayüz:** Kullanıcı dostu ve estetik tasarım  

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Rolü |
|------------|-----------|
| **React (Hooks: useState, useEffect)** | Uygulamanın temel dinamik yapısı ve durum yönetimi |
| **CSS3** | Modern, responsive ve düzenli arayüz tasarımı |
| **LocalStorage API** | Harcama verilerinin istemci tarafında kalıcı olarak saklanması |

---

## 📂 Proje Dosya Yapısı

📁 react-harcamalar  
├── 📄 App.js  
├── 📄 App.css  
├── 📁 Components  
│   ├── 📄 Parca.js  
│   ├── 📄 Parca.css  
│   ├── 📄 YeniHarcamaForm.js  
│   └── 📄 YeniHarcamaForm.css  
└── 📄 README.md  

---

## ⚙️ Kurulum ve Çalıştırma

Bu projeyi yerel ortamınıza klonlayın ve aşağıdaki adımları izleyin:

```bash
git clone https://github.com/mhilmicicek07/react-harcamalar.git
cd react-harcamalar
npm install
npm start
Tarayıcınızda otomatik olarak açılacaktır. 🎉

🧠 Teknik Açıklama
App.js: Ana bileşen, harcama listesini useState ile yönetir, useEffect ile LocalStorage senkronizasyonu yapar.

YeniHarcamaForm.js: Kullanıcıdan veri alır, form doğrulama ve resetleme işlemleri içerir.

Parca.js: Her bir harcama öğesini temsil eder, silme işlemini yönetir.

CSS dosyaları: Minimal ve modern tasarımı destekler.

👨‍💻 Geliştirici: Mehmet Hilmi Çiçek
💼 Full Stack Web Developer
📍 Geislingen an der Steige
💬 “Basit ama tutarlı kod, karmaşık olandan her zaman üstündür.”

🪪 Lisans: Bu proje açık kaynaklıdır. İsteyen herkes kodu inceleyebilir, geliştirebilir veya kişisel projelerinde kullanabilir.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
