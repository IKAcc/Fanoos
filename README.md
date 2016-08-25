# Fanoos
[![](http://ikacc.ir/github-assets/fanoos-header-v1.0.png)](https://github.com/IKAcc/Pol)

Fanoos (Farsi: فانوس, "Lighthouse") is a super lightweight jQuery plugin that lets you reveal part's of your website with animations when user is scrolling down the page.

Fanoos is created by [Javid Izadfar](https://twitter.com/JavidIzadfar "Javid Izadfar at Twitter") at [IKA Computing Club](http://ikacc.ir/) as a [free and open-source tool](../master/LICENSE); so feel free to use and modify it as you need.

## License
Fanoos files are licensed under the MIT License:
* https://opensource.org/licenses/mit-license.html

## Contributing
We support and encourage any kind of contribution by anyone. Please read through [contributing guidelines](../master/CONTRIBUTING.md). In these guidelines, directions to asking for an option, reporting a bug and other notes are fully explained.

## Animations
Fanoos itself is not an animation library so you need to add an CSS toolkit.

by defaults, Fanoos looks for [Animate.css](https://github.com/daneden/animate.css).

## Usage
To use Fanoos on your project, follow these steps:

1) Download Fanoos’s [latest release](../zipball/master).

2) Add Fanoos folder to your preferred directory on your project.

3) Add Fanoos.js to your HTML file (after jQuery):
```html
<!-- Fanoos js -->
    <script src="js/fanoos.js"></script>
```
  or
```html
<!-- Fanoos min.js -->
    <script src="js/fanoos.min.js"></script>
```

4) Add your favorite animation toolkit to your HTML file:
```html
<!-- Animate css -->
  <link href="css/animate.css" rel="stylesheet">
```

5) Initiate Fanoos in your custom js file:
```javascript
$('body').fanoos()
```
see [Options](#Options) for more initialization options.

6) Implement a Fanoos element, using `.fanoos` and animation classes:
```html
<div class="fanoos fadeIn"> .... </div>
```
## Options
| Option        | Default value          | Functionality          |
| ------------- |:----------------------:| :----------------------|
| animationClass| 'animated'             | Name of the class which activates animation |
| duration      | 1000                   | Duration of Animation. _milliseconds_ |
| offset        | 0                      | Distance from element to play animation. _pixels_ |
| delay      | 0                         | Time from activating animation to actually playing it. _ms_ |

## Creators
* ![](https://avatars3.githubusercontent.com/u/14288838?v=3&s=16) Javid Izadfar
  * Email: Javid.Izadfar@ikacc.ir
  * Twitter: [twitter.com/JavidIzadfar](http://twitter.com/JavidIzadfar)
  * Github: [github.com/Javid-Izadfar](http://github.com/Javid-Izadfar)
[![IKA Computing Club](http://ikacc.ir/github-assets/ika-footer.png)](http://ikacc.ir)
