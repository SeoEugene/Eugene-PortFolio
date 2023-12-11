# PorFolio
여기서 제가 개발자로 성장하기 위해 밟아온 과정들을 보여드리겠습니다.
Vite 와 기본적인 바닐라 자바스크립트를 이용해 이 포트폴리오 페이지를 만들었으며, 여러 과정들을 담아보고자 합니다.

## install
`npm create vite@latest`
√ Project name: ... Eugene-PortFolio
√ Package name: ... eugene-portfolio
√ Select a framework: » `Vanilla`
√ Select a variant: » `JavaScript`

`cd Eugene-PortFolio`
`npm install` : 패키지 관리 도구       
`npm run dev`  : 실행

## 환경설정(vite.config.js)
vite.config.js파일을 직접 만든다.

export default {
    root: "src",
    build: {
        outDir: "../public",
    },
};

## using stack
-vite : `npm create vite@latest`
-gsap :  `npm install gsap`
-lenis : `npm install @studio-freight/lenis`
-git 
echo "# Eugene-PortFolio" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/SeoEugene/Eugene-PortFolio.git
  git push -u origin main
-netlify


## 트러블 슈팅
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it     
warning: in the working copy of 'src/index.html', LF will be replaced by CRLF the next time Git touches it
`git config --global core.autocrlf input`


## 네트리파이 배포시 page not found 
https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file

