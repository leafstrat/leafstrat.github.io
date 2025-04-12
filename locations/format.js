// Load marked dynamically if needed
(function () {
	const loadScript = (src, callback) => {
		const s = document.createElement('script');
		s.src = src;
		s.onload = callback;
		document.head.appendChild(s);
	};
	
	const renderMarkdown = () => {
		const raw = document.body.innerText;
		const html = marked.parse(raw);
		document.body.innerHTML = html;
		document.body.style.fontFamily = 'sans-serif';
		document.body.style.maxWidth = '800px';
		document.body.style.margin = '2rem auto';
		document.body.style.lineHeight = '1.6';
	};
	
	if (typeof marked === 'undefined') {
		loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js', renderMarkdown);
	} else {
		renderMarkdown();
	}
})();
