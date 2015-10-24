<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="harmonizer"><span class="type-signature"></span>harmonizer<span class="signature">(source, note)</span><span class="type-signature"> &rarr; {Array.&lt;String>|Array.&lt;Array.&lt;Integer>>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Harmonize a note</p>
<p>This function is currified, so it can be partially applied</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array.&lt;String></span>
|
<span class="param-type">Array.&lt;Array.&lt;Integer>></span>
</td>
<td class="description last"><p>the intervals or notes</p></td>
</tr>
<tr>
<td class="name"><code>note</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array.&lt;Integer></span>
</td>
<td class="description last"><p>the note to harmonize</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.harmonizer/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.harmonizer/blob/master/index.js#L21">lineno 21</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the list of notes</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
|
<span class="param-type">Array.&lt;Array.&lt;Integer>></span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>harmonize('1 2 3 4', 'D') // => ['D', 'E', 'F#', 'G']
harmonize('d e f g a', 'g') // => ['G', 'A', 'Bb', 'C', 'D']
harmonize('d e f g a b c', false) // => ['1P', '2M', '3m', '4P', '5P', '6M', '7m']</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->