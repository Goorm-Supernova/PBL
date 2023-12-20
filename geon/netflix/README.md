# HTML, CSS를 이용해서 넷플릭스 사이트 만들기

## 페이지 구조
<img width="1390" alt="image" src="https://github.com/geon8692/html-css-netflix/assets/63420948/d900a6b0-0534-4ce2-b42c-9404e26a005a">
 
<br/>
<br/>

## 기능 구현
* Flex Box를 이용하여 영화들을 나열

```css
.main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.movie-list {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}
```
<br/>
* 영화에 마우스를 호버하면 사이즈가 확대

```css
.movie-list img {
    width: 10vw;
    transition: all 0.1s linear;
}

.movie-list img:hover {
    transform: scale(1.4);
    cursor: pointer;
}
```
