// 1. Get values from query params in URL
let url = new URL(document.location.href);
let params = new URLSearchParams(url.search);
let img_url = params.get('img-url');
let msg = params.get('msg');

// 2. Get the <img> and <p> element


// 3. Change the innerHTML of the <p> element


// 4. Change the src attribute of <img> element