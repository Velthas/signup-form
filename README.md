# Sign Up Form
<p>**live example:** https://velthas.github.io/signup-form/ </p>
<p>A page with a sign up form to put into practice what I have been learning about forms and form validation, as well as a few more CSS tricks and selectors.</p>

## Selectors
<p>During the first part of The Odin Project I worked my way through projects using Vanilla CSS, specifically handling class, id and type selectors.</p>
<p>This past week and a half I have been studying new selectors and properties to further my knowledge of CSS, so I went a bit overboard with all sort of fun selectors in my css. Here is what I used:</p>

+ Adjacent sibling combinator (+)
+ Direct children combinator (>)
+ Attribute selectors ([attribute="value"])
+ Pseudo-classes (:first-child - :last-child - :nth-child)

<p>Of course, in my eagerness in trying all these new, fun tools I noticed using them is not as easy as it seems: while they do reduce the number of unique classes and ids used throughout the document, they would sometimes cause some overlaps where the selector wasn't extremely specific. </p>
<p>Moreover, as the number of rules kept increasing, so did the difficulty in keeping track of what rule applied to what selector: scary if you think this is a microscopic project. Thankfully Chrome dev-tools can help you with this, and I am sure other tools exist too, but it was daunting nonetheless.</p>
<p>In short, based on my brief experience, I believe these tools are amazing, but for clarity purposes best used sparingly to apply very specific styling.</p>

## Forms
<p>This unit was extremely important to deepend my understanding of forms: ironically enough, I had already used them on at least two instances in my projects, but all validation was done by me client-side with JavaScript. Here is what I learned and used for this here project:</p>

+ Input Types (text, number, email, tel and password)
+ Use of Labels
+ Attributes (minlength, maxlength, min, max, title, name, required)
+ Pseudo-classes (:valid, :invalid)

<p>Validation was achieved in two steps: the first part is done through normal HTML form validation using attributes such as minlength, maxlength, and even a small regular expression for the telephone input (just want a number with 10 digits, no prefixes). Of course, my regex is greatly limiting and I am sure there are a million things I did not take into account, but for Italian numbers it should work. </p>
<p>The second part of my validation was done through JavaScript, as it seems it is the only way to make sure two inputs have matching, well, inputs. To achieve this, I made it so the script checks if the two input match on every keystroke by using an input event listener. If the two inputs don't match, I also prevent the form from submitting by adding a submit event on the form, passing in the event as parameter to the function and using the preventDefault method.</p>

## Media Queries
<p>Even though I guess it was not mandatory, I still wrote some media queries to prevent this whole page from falling apart when opened through a mobile phone.</p>




