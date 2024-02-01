import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


@font-face {
	font-family: 'Lexend';
	font-weight: 100 800;
	font-style: normal;
	font-display: swap;
	src: local('Lexend'), url('./font/Lexend-VariableFont_wght.ttf') format('font-ttf-variations');
}
@font-face {
	font-family: 'SorceSans3';
	font-weight: 100 800;
	font-style: normal;
	font-display: swap;
	src: local('SorceSans3'), url('./font/SourceSans3-VariableFont_wght.ttf') format('font-ttf-variations');
}

*{
	font-family: "SorceSans3", sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
  position: relative;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #fff;	
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  text-decoration: none;
  color: inherit;
}
body{
  max-width: 375px;
  margin: 0 auto;
}
`;
