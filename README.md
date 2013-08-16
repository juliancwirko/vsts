# Very (very very) Simple Text Slider

```html
<div class="slogans">
	<div>
		First Slogan
	</div>
	<div>
		Second Slogan <br> Lorem ipsum.
	</div>
	<div>
		<div>Third Slogan</div>
		<div>Lorem ipsum dolor.</div>
	</div>
	...
	<div>
		Last slogan
	</div>
</div>
...
<script src="jquery.js"></script>
<script src="jquery.vsts.js"></script>
<script>
	(function(){
		$('.slogans').vsts({
			speed: 5000, /* ms */
		});
	})()
</script>
```

## Demo
[See demo page..](http://www.redsunmedia.pl/playground/vsts/demo/)

