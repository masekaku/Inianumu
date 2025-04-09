
const videoList = [
  "8t5pj6u7tqub","api2ere4csi1","ruymy7p50bmp","lrwcynmntn5f",
  "cqa20a5p9vv3","b9g42gvxwjvp","0ybk0nf3n1v5","ifk5c67apnla",
  "jpit38en7r6m","h3e8jk69y67t","6flj4fsiab08","94xz98x1iyze",
  "gh8ujb2xumk3","b62iw99zcs39","g3z1nixo73i2","i7kvicfiy8ip",
  "sl69ua2z1nf3","0ubh0t5x9k9j","jmp5oshxhwgb","buromeppjnmx",
  "qxws3c5h4534","pfmvi5grhk4r","kl0zrxnhkxlw","wupjxmcz18mr",
  "qolq05u1qlf7","ab72groprau0","4647wzzo1xvs","yxskl2imf7to",
  "0j833m1fbfch","rqabdmex6zkf","ltvn8az1jgi5","9u7gqwyf8o1m",
  "8zifumaqq869","gqrd0u2mkt7p","i2cr9wnzta52","3bwl1pah8n17",
  "10ivhqxm54vn","q5gv6s8jwhue","ksb93oooi1jf","07nbi4bl7lwu",
  "oqd8caql5br5","t50soic970gs","s44t75zi3dua","6gawg5kceseu"
];

const linkDownloadTipuan = "https://incredibleenhancementslightning.com/ytydge8ted?key=f4e596ec641bf679bcc201d281e1ce64";

const videoContainer = document.getElementById("video-list");

videoList.forEach((videoId, index) => {
  const card = document.createElement("div");
  card.className = "video-card";
  const judul = AsupanViral[index % AsupanViral.length];
  card.innerHTML = `
    <h2>${judul}</h2>
    <iframe src="https://do7go.com/e/${videoId}" scrolling="no" frameborder="0" allowfullscreen></iframe>
    <a href="${linkDownloadTipuan}" target="_blank" class="download-btn">Download Video</a>
    <div class="ad-slot">
      <script type="text/javascript">
	atOptions = {
		'key' : '12838ee46c3b41c1d0eb93e294248125',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//incredibleenhancementslightning.com/12838ee46c3b41c1d0eb93e294248125/invoke.js"></script>
    </div>
  `;
  videoContainer.appendChild(card);
});
