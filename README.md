# superfly-css-task-test

The [superfly-css-task-test](https://github.com/superfly-css/superfly-css-task-test):
- Highlights content contained in `Test-markup`
- Generates a corresponding `Test-render` block that displays the markup contained in the `Test-markup` block

## Usage

Clone the package:
``` console
git clone https://github.com/superfly-css/superfly-css-task-test
```

Move to the root of the package
``` console
cd supefly-css-task-test
```

Build the test `src/test/html/index.html`.  The prebuilt contents are shown below.  Once `src/test/html/index.html` is built the markup contained in `Test-markup` will be highlighted, and a corresponding `Test-render` block will be generated after the `Test-then` block.

```html
<html>
<head>
  <meta charset="utf-8">
  <title>Supefly CSS Grid Component Test</title>
  <meta name="viewport" content="initial-scale=1,width=device-width">
  <link rel="stylesheet" href="../css/index.css">
</head>
<body>
  <div class="Test">
    <h1 class="Test-suite">Superfly CSS <a href="https://github.com/superfly-css/superfly-css-components-grid">Grid Component</a> Tests</h1>
    <h2 class="Test-context">.Grid, Grid-cell</h2>
    <h3 class="Test-when">When the <code>.Grid</code> container holds 2 <code>.Grid-cell</code> instances:</h3>
    <!--Markup contained by the code block is escaped and highlighted by gulp-highlight-->
    <pre class="Test-markup"><code class="html">
      <div class="Grid">
        <div class="Grid-cell">1/2</div>
        <div class="Grid-cell">2/2</div>
      </div>
    </code></pre>

    <h3 id="then" class="Test-then">Each grid cell occupies the same amount of space witin the grid container row.</h3>
  </div>
</body>
</html>
```

Postbuilt the test file looks like this:

```html
<html>
<head>
  <meta charset="utf-8">
  <title>Supefly CSS Grid Component Test</title>
  <meta name="viewport" content="initial-scale=1,width=device-width">
  <link rel="stylesheet" href="../css/index.css">
</head>
<body>
  <div class="Test">
    <h1 class="Test-suite">Superfly CSS <a href="https://github.com/superfly-css/superfly-css-components-grid">Grid Component</a> Tests</h1>
    <h2 class="Test-context">.Grid, Grid-cell</h2>
    <h3 class="Test-when">When the <code><span class="hljs-title">.Grid</span></code> container holds 2 <code><span class="hljs-title">.Grid-cell</span></code> instances:</h3>
    <!--Markup contained by the code block is escaped and highlighted by gulp-highlight-->
    <pre class="Test-markup"><code class="html">
      &lt;<span class="hljs-keyword">div</span> <span class="hljs-type">class</span>=<span class="hljs-string">&quot;Grid&quot;</span>&gt;
        &lt;<span class="hljs-keyword">div</span> <span class="hljs-type">class</span>=<span class="hljs-string">&quot;Grid-cell&quot;</span>&gt;<span class="hljs-number">1</span>/<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
        &lt;<span class="hljs-keyword">div</span> <span class="hljs-type">class</span>=<span class="hljs-string">&quot;Grid-cell&quot;</span>&gt;<span class="hljs-number">2</span>/<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
      &lt;/<span class="hljs-keyword">div</span>&gt;
    </code></pre>

    <h3 id="then" class="Test-then">Each grid cell occupies the same amount of space witin the grid container row.</h3>
    <div class="Test-render">
      <div class="Grid">
        <div class="Grid-cell">1/2</div>
        <div class="Grid-cell">2/2</div>
      </div>
    </div>
  </div>
</body>
</html>
```
