(()=>{
'use strict';
const T={
 zh:{siteLabel:'学术个人主页 / Academic Homepage',position:'研究员 · 博士生导师',institute:'中国科学院沈阳计算技术研究所',affiliation:'中国科学院大学',intro:'研究领域涵盖人工智能、多模态信息处理、知识工程与自然语言处理，关注复杂信息的表示、理解与推理。',navNews:'动态',navResearch:'研究方向',navAcademic:'学术简介',navPapers:'论文',navContact:'联系',emailLabel:'邮箱',ucas:'国科大导师主页',contactMe:'联系我',welcome:'欢迎就多模态智能、知识工程与科研合作开展学术交流。',newsTitle:'最新动态',moreNews:'显示更多动态 ↓',lessNews:'收起动态 ↑',researchTitle:'研究方向',researchLead:'主要关注人工智能及多模态数据理解与推理：',academicTitle:'学术简介',papersTitle:'精选论文',papersNote:'仅展示已核验的 CCF A / B 类高水平论文，按发表年份排列。合作署名论文也包含在内。',verifyNote:'注：论文标题与作者姓名保留正式英文原文；中文标题为本站辅助翻译。已处理的论文图片来自本地 PDF 原图截取；尚未获得 PDF 的论文暂显示占位图。录用状态待核实的成果暂不纳入。',contactTitle:'联系方式',contactDesc:'欢迎学术交流与科研合作，请通过邮箱联系：',footerNote:'参考经典学术主页布局 · 2026.11 更新',backTop:'返回顶部 ↑',pubCount:'篇论文',paperLink:'论文',arxivLink:'arXiv',bibLink:'引用',copied:'BibTeX 已复制',copyFail:'无法复制，请直接访问论文页面'},
 en:{siteLabel:'Academic Homepage / 学术个人主页',position:'Researcher · Doctoral Supervisor',institute:'Shenyang Institute of Computing Technology, Chinese Academy of Sciences',affiliation:'University of Chinese Academy of Sciences',intro:'My research interests span artificial intelligence, multimodal information processing, knowledge engineering, and natural language processing, with an emphasis on representation, understanding, and reasoning over complex information.',navNews:'News',navResearch:'Research Interest',navAcademic:'Academic Profile',navPapers:'Publications',navContact:'Contact',emailLabel:'Email',ucas:'UCAS Profile',contactMe:'Email',welcome:'I welcome academic discussions and collaboration on multimodal AI, knowledge engineering, and related topics.',newsTitle:'News',moreNews:'More news ↓',lessNews:'Less news ↑',researchTitle:'Research Interest',researchLead:'My main interests include AI and multimodal information understanding and reasoning:',academicTitle:'Academic Profile',papersTitle:'Selected Publications',papersNote:'Selected publications and preprints, ordered by year. Co-authored work is included.',verifyNote:'Note: Official English paper titles and author names are preserved. Chinese titles are provided for reading convenience. Thumbnails are local crops from the original PDFs when available. A temporary illustration indicates a PDF that has not yet been downloaded and processed. Preprints are labeled as such.',contactTitle:'Contact',contactDesc:'For research discussions and academic collaboration, please contact:',footerNote:'Classic academic homepage layout · Updated Nov 2026',backTop:'Back to top ↑',pubCount:'papers',paperLink:'Paper',arxivLink:'arXiv',bibLink:'BibTeX',copied:'BibTeX copied',copyFail:'Copy failed; please open the publication link instead.'}
};
const news=[
 {date:'2026',zh:'论文 <b>TRACER</b> 被 <b>NeurIPS 2026</b> 接收，于碧辉为第一作者。',en:'<b>TRACER</b> was accepted to <b>NeurIPS 2026</b>; Bihui Yu is the first author.'},
 {date:'2026',zh:'论文 <b>PAGER</b> 被 <b>NeurIPS 2026</b> 接收，于碧辉为通讯作者。',en:'<b>PAGER</b> was accepted to <b>NeurIPS 2026</b>; Bihui Yu is the corresponding author.'},
 {date:'2026',zh:'论文 <b>Geoint-R1</b> 与 <b>GGBench</b> 发表于 <b>CVPR 2026</b>。',en:'<b>Geoint-R1</b> and <b>GGBench</b> were published at <b>CVPR 2026</b>.'},
 {date:'2026',zh:'合作论文 <b>How RL Unlocks the Aha Moment</b> 发表于 <b>ICML 2026</b>。',en:'Our co-authored work <b>How RL Unlocks the Aha Moment</b> appeared at <b>ICML 2026</b>.'},
 {date:'2026',zh:'<b>GenProve</b> 发表于 <b>ACL 2026</b>。',en:'<b>GenProve</b> was published at <b>ACL 2026</b>.'},
 {date:'2025',zh:'<b>From Words to Structured Visuals</b> 发表于 <b>CVPR 2025</b>；<b>MM-Verify</b> 发表于 <b>ACL 2025</b>。',en:'<b>From Words to Structured Visuals</b> appeared at <b>CVPR 2025</b>, and <b>MM-Verify</b> at <b>ACL 2025</b>.'},
 {date:'2025',zh:'合作论文 <b>ResearchPulse</b> 发表于 <b>ACM Multimedia 2025</b>。',en:'Our co-authored paper <b>ResearchPulse</b> was published at <b>ACM Multimedia 2025</b>.'},
 {date:'2025',zh:'合作论文 <b>ChartMind</b> 发表于 <b>EMNLP 2025</b>。',en:'Our co-authored paper <b>ChartMind</b> was published at <b>EMNLP 2025</b>.'},
 {date:'2024',zh:'合作研究发表于 <b>ECCV 2024</b>、<b>IJCAI 2024</b> 和 <b>ECML-PKDD 2024</b>。',en:'Co-authored research appeared at <b>ECCV 2024</b>, <b>IJCAI 2024</b>, and <b>ECML-PKDD 2024</b>.'}
];
const interests={zh:['多模态学习、理解与推理','知识工程与知识图谱','自然语言处理与大语言模型','科学智能与可信人工智能'],en:['Multimodal Learning, Understanding, and Reasoning','Knowledge Engineering and Knowledge Graphs','Natural Language Processing and Large Language Models','AI for Science and Trustworthy Artificial Intelligence']};
const academic={zh:['中国科学院沈阳计算技术研究所 · 研究员、博士生导师','研究领域：人工智能、知识工程、多模态信息处理'],en:['Researcher and Doctoral Supervisor, Shenyang Institute of Computing Technology, Chinese Academy of Sciences','Research areas: Artificial Intelligence, Knowledge Engineering, and Multimodal Information Processing']};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hiddenPapers = new Set(['mChartQA and mChartQABench: A Multimodal-only Solution for Complex Chart Question-Answering', 'Mitigating Error Propagation in LLM Mathematical Reasoning via Disambiguation and Back-Verification']);
const papers=Array.isArray(window.PUBLICATIONS)?window.PUBLICATIONS.filter(p=>!hiddenPapers.has(p.title)):[];
const list=document.getElementById('papers-list');
let lang='en', expanded=false;
function allNews(){
 const items=expanded?news:news.slice(0,4);
 document.getElementById('news-list').innerHTML=items.map(x=>`<li><span class="news-date">[${esc(x.date)}]</span> ${x[lang]}</li>`).join('');
 const b=document.getElementById('toggle-news');b.textContent=T[lang][expanded?'lessNews':'moreNews'];b.setAttribute('aria-expanded',String(expanded));
}
function makePaper(p){
 const links=[]; if(p.paper_url)links.push(`<a href="${esc(p.paper_url)}" target="_blank" rel="noopener noreferrer">${T[lang].paperLink}</a>`);
 if(p.arxiv_url)links.push(`<a href="${esc(p.arxiv_url)}" target="_blank" rel="noopener noreferrer">arXiv</a>`);
 links.push(`<button type="button" class="bib-button" data-id="${esc(p.id)}">${T[lang].bibLink}</button>`);
 const authors=(p.authors||[]).map(a=>a.toLowerCase().trim()==='bihui yu'?'<strong>Bihui Yu</strong>':esc(a)).join(', ');
 return `<article class="publication"><a class="thumb" href="${esc(p.paper_url||p.arxiv_url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.title)}"><img src="${esc(p.thumbnail)}" loading="lazy" alt="${esc(p.teaser_status==='local_pdf_crop' ? (p.title+' — paper figure') : (p.title+' — preview pending'))}" data-fallback="${esc(p.thumbnail_fallback||'')}" onerror="this.onerror=null;this.src=this.dataset.fallback"></a><div class="pub-info"><p class="pub-title"><a href="${esc(p.paper_url||p.arxiv_url)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a></p>${lang==='zh'?`<p class="pub-title-zh">${esc(p.title_zh)}</p>`:''}<p class="pub-authors">${authors}</p><p class="pub-venue">${esc(p.venue)}, ${esc(p.year)} &nbsp; <b>${esc(p.level)}</b></p><div class="pub-actions">${links.join(' ')}</div></div></article>`
}
function makePapers(){
 let html='',years=[...new Set(papers.map(x=>x.year))].sort((a,b)=>b-a);
 for(let year of years){let group=papers.filter(x=>x.year===year);
 html+=`<h3 class="year-title">${year}<span class="year-small">${group.length} ${T[lang].pubCount}</span></h3>`+group.map(makePaper).join('')}
 list.innerHTML=html;
}
function render(){
 document.documentElement.lang=lang==='zh'?'zh-CN':'en';
 for(const el of document.querySelectorAll('[data-i18n]')){ const k=el.dataset.i18n; if(T[lang][k])el.textContent=T[lang][k]; }
 document.querySelectorAll('.lang-button').forEach(btn=>{const a=btn.dataset.language===lang;btn.classList.toggle('is-active',a);btn.setAttribute('aria-pressed',String(a));});
 allNews();
 document.getElementById('interests-list').innerHTML=interests[lang].map(x=>`<li>${esc(x)}</li>`).join('');
 document.getElementById('academic-list').innerHTML=academic[lang].map(x=>`<li>${esc(x)}</li>`).join('');
 makePapers();
}
function bib(p){
 const key=(p.authors?.[0]||'Yu').split(' ').at(-1)+p.year+p.id.split('-').slice(0,2).join('');
 return `@misc{${key},\n  title={${p.title}},\n  author={${(p.authors||[]).join(' and ')}},\n  year={${p.year}},\n  note={${p.venue}},\n  url={${p.paper_url||p.arxiv_url||''}}\n}`;
}
function legacyCopy(s){const t=document.createElement('textarea');t.value=s;document.body.append(t);t.select();const success=document.execCommand('copy');t.remove();if(!success)throw Error('Clipboard unavailable');}
list.addEventListener('click',async e=>{const b=e.target.closest('.bib-button');if(!b)return;const p=papers.find(p=>p.id===b.dataset.id);if(!p)return;const before=b.textContent;try{ if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(bib(p));else legacyCopy(bib(p));b.textContent=T[lang].copied;setTimeout(()=>b.isConnected&&(b.textContent=before),1700);}catch{b.textContent=T[lang].copyFail;setTimeout(()=>b.isConnected&&(b.textContent=before),2200);}});
document.querySelectorAll('.lang-button').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.language;render();}));
document.getElementById('toggle-news').addEventListener('click',()=>{expanded=!expanded;allNews();});
render();
})();
