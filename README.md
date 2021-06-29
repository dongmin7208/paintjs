# Painting Board 2021🎨

## 🚩 Table of Contents

-   [🗼Screen](#screen)
-   [📦How to run](#how-to-run)
-   [🔧Main techniques used](#main-techniques-used)
-   [🔎Reference web link](#reference-web-link)
-   [🌏Web Support](#web-support)
-   [❗Realization](#realization)

### 🗼Screen

![FRONT](./image/paintjs.gif)

#### 📦How to run

Development Environment Version  
Visual Studio code -v 1.57  
git -v 2.32.0.window.1

-   [reset CSS](https://meyerweb.com/eric/tools/css/reset)
-   Code copy
-   Create reset.css
-   import "reset.css";
-   option > [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) install

### 🔧Main techniques used

| Name                                                                           | Description              |
| ------------------------------------------------------------------------------ | ------------------------ |
| [`range`](https://github.com/dongmin7208/paintjs/blob/main/index.html)         | controlled by range.     |
| [`fillRect()`](https://github.com/dongmin7208/paintjs/blob/main/app.js)        | Draws a filled rectangle |
| [`preventDefault()`](https://github.com/dongmin7208/paintjs/blob/main/app.js)  | Prevent right-click      |
| [`.addEventListener`](https://github.com/dongmin7208/paintjs/blob/main/app.js) | Used to register events  |
| [`.getElementById`](https://github.com/dongmin7208/paintjs/blob/main/app.js)   | Find id properties.      |

## 🔎Reference web link

:school: [`nomadcoders`](https://nomadcoders.co/)

:book: [`Canvas-Docs`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

:book: [`CSS:active`](https://www.w3schools.com/cssref/sel_active.asp)

## 🌏Web Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                               Yes                                                                                |                                                                                   11+                                                                                   |                                                                             Yes                                                                              |                                                                               Yes                                                                                |                                                                                Yes                                                                                 |

## ❗Realization

I found out that < input type="range"/>.  
The <'canvas'>element is essential for all tasks dealing with pixels.  
box-shadow: 0 4px 20px rgba(50, 50, 93, 0.5)  
(offset-x | offset-y | blur-radius | color)

Get the coordinates of the "cursor"  
We simply used offset here.

canvas.addEventListener("mousemove", onMouseMove);  
const x = event.offsetX;  
const y = event.offsetY;  
![cursor](./image/offset-cursor.jpg)
