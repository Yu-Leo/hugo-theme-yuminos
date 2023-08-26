<h1 align="center"> Yuminos </h1>

<p align="center">
  <a href="https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/LICENSE" target="_blank"> <img alt="license" src="https://img.shields.io/github/license/Yu-Leo/hugo-theme-yuminos?style=for-the-badge&labelColor=090909"></a>
  <a href="https://github.com/Yu-Leo/hugo-theme-yuminos/releases/latest" target="_blank"> <img alt="last release" src="https://img.shields.io/github/v/release/Yu-Leo/hugo-theme-yuminos?style=for-the-badge&labelColor=090909"></a>
  <a href="https://github.com/Yu-Leo/hugo-theme-yuminos/commits/main" target="_blank"> <img alt="last commit" src="https://img.shields.io/github/last-commit/Yu-Leo/hugo-theme-yuminos?style=for-the-badge&labelColor=090909"></a>
  <a href="https://github.com/Yu-Leo/hugo-theme-yuminos/graphs/contributors" target="_blank"> <img alt="commit activity" src="https://img.shields.io/github/commit-activity/m/Yu-Leo/hugo-theme-yuminos?style=for-the-badge&labelColor=090909"></a>
</p>

**[Yuminos](https://github.com/Yu-Leo/hugo-theme-yuminos)** - тема для генератора статических сайтов [Hugo](https://gohugo.io/). *Основана* на теме [Minos](https://github.com/carsonip/hugo-theme-minos), а так же изменениях, внесённых [Дмитрием Ковалёвым](https://github.com/devpew) и используемых на [его сайте](https://devpew.com/). Ключевые дополнительные возможности перечислены ниже.

## ❗Дисклеймер

1. На данный момент проект находится в процессе разработки. Может содержать недочёты и ошибки как в UI/UX, так и в фактической реализации задуманного ("костыли", не оптимальные решения, дублирование кода, просто некрасивый код и т. д.). [Issues](https://github.com/Yu-Leo/hugo-theme-yuminos/issues) с замечаниями и предложениями, а так же [Pull Requests](https://github.com/Yu-Leo/hugo-theme-yuminos/pulls) с исправлениями ошибок и нововведениями приветствуются!
2. Изначально данная тема создавалась мною для [собственного блога](https://yu-leo.github.io/yu0dev/). Если Вы хотите использовать её на своём сайте, обратите внимание на то, что:
  - Название сайта, расположенное в левом углу хедера, "захардкожено" в файле `header.html`.
  - Иконка сайта, отображаемая на вкладке в браузерах, расположена в файле `static/favicon.ico`.
3. Корректное отображение и работа блока с оглавлением постов (`table of content`, `toc`) при включении данной опции в конфиге, а так же системы `Disqus` при интеграции её на Ваш сайт **не гарантируются!**

## 🖼 Скриншоты

**Главная страница**

![screenshot.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/screenshot.png)

**Страница тега**

![tag.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/tag.png)

**Статья**

![article.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/article.png)

## 🔨 Установка

Для того, чтобы установить тему **Yuminos**, склонируйте данный репозиторий в директорию `themes/` Вашего сайта:

```shell
git clone https://github.com/Yu-Leo/hugo-theme-yuminos
```

либо добавьте его как подмодуль git, если в директории с Вашим сайтом инициализирован git-репозиторий:

```shell
git submodule add https://github.com/Yu-Leo/hugo-theme-yuminos
```

После чего укажите название темы в конфигурационном файле (по умолчанию - `hugo.toml` в директории с Вашим сайтом):

```toml
theme = "hugo-theme-yuminos"
```

## ⚙ Опции

Настраиваются в конфигурационном файле.

### Пагиниция

Используется на страницах, содержащих списки постов (главная страница, страницы тегов и категорий).

```toml
paginate = 50
```

### KaTeX

Присутствует поддержка рендеринга `TeX`-синтаксиса, реализованная при помощи [KaTeX](https://github.com/KaTeX/KaTeX). Включить либо отключить её можно в соответствующем параметре в конфиге:

```toml
[params]  
  katex = true
```

<details>

<summary>Скриншот</summary>

![latex.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/latex.png)

</details>

### RunTime

Если данная опция включена (`enabled = true`), в футере будет выводится количество дней и часов, прошедших с момента, указанного в параметре `startTime`.

```toml
[params]
  [params.runTime]
    enabled = true
    startTime = "2023-08-24T10:00:00"
```

<details>

<summary>Скриншот</summary>

![footer.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/footer.png)

</details>

### Ссылка на Telegram-канал

Если URL указан, то в футере будет отображаться фраза "FOLLOW ME ON TELEGRAM", в которой слово "TELEGRAM" будет являться гиперссылкой на соответствующий URL.

```toml
[params]
  [params.social]
    telegram = "https://t.me/YU0DEV"
```

<details>

<summary>Скриншот</summary>

![footer.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/footer.png)

</details>

## ⭐ Дополнительные возможности

Здесь перечислены основные функциональные возможности, которые предоставляет форк **Yuminos** помимо возможностей, входящих в базовую тему ([Minos](https://github.com/carsonip/hugo-theme-minos)).

### Alerts

К каждому посту можно добавить алёрт, который будет отображаться перед его содержимым.

Для этого укажите в параметрах поста следующие строки:

```yaml
---
page:
  alert:
    message: "Содержимое алёрта. Можно использовать **Markdown**"
    type: "danger"
---
```

Типы алёртов:
- `info` (синий)
- `success` (зелёный)
- `danger` (красный)

Если Вам нужен информационный алёрт, можно использовать сокращённую форму:

```yaml
---
page:
  alert: "Информационный алерт"
---
```

<details>

<summary>Скриншоты</summary>

![info-alert.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/info-alert.png)

![success-alert.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/success-alert.png)

![danger-alert.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/danger-alert.png)

</details>

### Блоки ToDo 

Полезны, если в процессе написания поста Вы хотите оставить какие-либо заметки на будущее, которые должны быть удалены перед публикацией.

Все ToDo-блоки, содержащиеся в посте, автоматически будут подсчитаны; в начале поста будет отображаться алёрт с их количеством (если оно больше 0).

### Блок с содержимым

Добавляется в пост следующим образом:

```markdown
{{< todo >}}
Содержимое блока ToDo. Можно использовать **Markdown**
{{< /todo >}}
```

### Блок без содержимого

Добавляется в пост следующим образом:

```markdown
{{< td >}}
```

<details>

<summary>Скриншоты</summary>

![todo-block.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/todo-block.png)

![todo-alert.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/todo-alert.png)

</details>

### Блоки кода

Все блоки с кодом (оформленные в разметке Markdown, либо добавленные при помощи Hugo shortcodes) будут содержать кнопку "копировать", по нажатию на которую содержимое соответствующего блока с кодом будет скопировано в буфер обмена.

Цвета для кнопки копирования взяты из палитры цветовой темы `gruvbox`. Рекомендую установить её в качестве темы для блоков с кодом в конфиге:

```toml
[markup]
  [markup.highlight]
    style = 'gruvbox'
```

<details>

<summary>Скриншот</summary>

![codeblock.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/codeblock.png)

</details>

#### Shell

Если в качестве языка для блока с кодом указан `shell`, то к каждой строке такого блока будет добавлен символ "$". При этом он не будет выделяться курсором вместе с остальным текстом, а так же не будет копироваться в буфер обмена при нажатии кнопки копирования. Эту фичу можно использовать для красивого оформления запускаемых из терминала команд (строк).

<details>

<summary>Скриншот</summary>

![codeblock-shell.png](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/images/codeblock-shell.png)

</details>

## 🎨 Цветовая палитра

На данный момент тема содержит **только светлое оформление**, основанное на следующей цветовой палитре:

- Белый: `#ffffff` - фоновый цвет
- Черный: `#000000` - основной цвет текста
- Оттенки серого: 
  - `#939393` - иконки и названия тегов и категорий, иконки ссылки в заголовках в постах, текст в футере сайта
  - `#f2f2f2` - фон для inline-кода
  - `#495057` - фон для клавиш
  - `#444444` - ссылки и заголовки постов в списках
- Оранжевый: `#F37E0C` - основной контрастный цвет. Используется для подсветки элемента под курсором, а так же с разной степенью прозрачности используется для цитат и выделенного текста.
- Синий: `#0C7C96` - алёрт типа `info`
- Зелёный: `#0AC20A` - алёрт типа `success`
- Красный: `#E10B39` - алёрт типа `danger`
- Фиолетовый: `#5815A4` - ToDo блоки и алёрты

## 📝 Лицензия

- Автор темы **Minos** для [Hexo](https://hexo.io/ru/): [@ppoffice](https://github.com/ppoffice)
- Порт для Hugo: [@carsonip](https://github.com/carsonip)
- Дополнения: [@devpew](https://github.com/devpew)
- Автор темы **Yuminos**: [@Yu-Leo](https://github.com/yu-leo)

Проект разрабатывается под лицензией **MIT**. Полный текст - в файле [LICENSE](https://github.com/Yu-Leo/hugo-theme-yuminos/blob/main/LICENSE). 
