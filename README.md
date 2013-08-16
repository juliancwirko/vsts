# Very (very very) Simple Text Slider

## Usage

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
	$('.slogans').vsts({
		speed: 5000, /* ms */
		effect: 'horizontal' /* vertical | horizontal */
	});
</script>
```
