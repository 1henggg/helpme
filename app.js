const academyItems = [
 {id:"scm",title:"Supply Chain Management",category:"Fundamentals",level:"Beginner",desc:"理解供應鏈如何整合供應商、製造、物流與客戶需求。",terms:["SCM","Value Chain","Coordination"],detail:"供應鏈管理（SCM）是跨企業、跨部門協調產品、資訊與資金流動的管理活動。核心目標不是單純降低成本，而是在服務水準、成本、速度與風險之間取得平衡。",application:"企業需要同步考量需求預測、採購、產能、庫存、物流與客戶交付，避免局部最佳化造成整體效率下降。"},
 {id:"procurement",title:"Procurement vs. Sourcing",category:"Procurement",level:"Beginner",desc:"區分採購執行與策略尋源，理解供應商管理的不同層次。",terms:["RFQ","Supplier Selection","TCO"],detail:"Sourcing 著重供應市場研究、供應商選擇與長期策略；Procurement 涵蓋請購、詢價、議價、下單、交付與付款等採購流程。實務上兩者密切合作。",application:"選擇供應商時，除了單價，也應評估品質、交期、財務穩定度、技術能力與總持有成本（TCO）。"},
 {id:"inventory",title:"Inventory Management",category:"Inventory",level:"Intermediate",desc:"透過 ABC Analysis、安全庫存與再訂購點管理庫存水準。",terms:["ABC Analysis","Safety Stock","ROP"],detail:"庫存管理需要在缺貨風險與持有成本之間取得平衡。ABC 分析依年消耗金額或其他管理指標分類，讓企業將管理資源優先投入重要品項。",application:"可結合平均需求、需求波動與補貨前置時間估算安全庫存，再以 ROP 作為補貨觸發點。不同 SKU 不應一體適用相同政策。"},
 {id:"planning",title:"Demand & Supply Planning",category:"Planning",level:"Intermediate",desc:"將市場需求轉換成採購、產能與供應計畫。",terms:["Forecast Accuracy","S&OP","Capacity"],detail:"需求規劃預估未來需求；供給規劃檢查供應商、物料、產能與物流是否足以滿足需求。S&OP 則協調銷售、營運、財務等部門的決策。",application:"當預測需求高於可用產能時，規劃人員需要評估加班、替代供應商、需求分配或交期協商等方案。"},
 {id:"risk",title:"Supply Chain Risk & Resilience",category:"Risk",level:"Intermediate",desc:"辨識單一來源、地緣政治、自然災害與物流中斷風險。",terms:["Dual Sourcing","BCP","Risk Mapping"],detail:"供應鏈韌性是企業預防、承受、應對並從中斷事件恢復的能力。韌性不等於所有物料都雙重來源，而是依風險與替代成本設計適當策略。",application:"建立風險矩陣時，可同時評估事件發生機率、財務衝擊、替代來源可行性與恢復時間。"},
 {id:"analytics",title:"Supply Chain Data Analytics",category:"Data & Analytics",level:"Beginner",desc:"使用 Excel、SQL、Python 將營運資料轉換成可行動的洞察。",terms:["KPI","Dashboard","Python"],detail:"供應鏈分析常見資料包含訂單、庫存、供應商交期、品質、需求預測與運輸紀錄。分析的重點不只是呈現數字，而是找出偏差、原因與可採取的行動。",application:"可從缺貨率、庫存週轉率、Days of Supply、準時交貨率（OTD）及 Forecast Accuracy 建立管理儀表板。"}
];
const industries = {
 semiconductor:{name:"半導體 Semiconductor",desc:"從材料與設備、IC 設計、晶圓製造到封裝測試，半導體供應鏈具有高度技術門檻與長認證週期。",stages:[
  ["01","材料與設備","矽晶圓、光阻劑、特殊氣體、製程設備"],
  ["02","IC 設計","晶片架構、設計服務、EDA 工具與 IP"],
  ["03","晶圓製造","晶圓製程、產能配置、良率與製程管理"],
  ["04","封裝測試與應用","封裝、測試、模組整合與終端應用"]
 ],companies:[["TSMC","晶圓代工","晶圓製造與先進製程"],["ASML","半導體設備","微影設備供應商"],["JSR","半導體材料","光阻劑及相關材料"],["ASE","封裝測試","半導體封裝與測試服務"],["NVIDIA","IC 設計","GPU 與 AI 加速運算晶片"]]},
 automotive:{name:"汽車 Automotive",desc:"汽車供應鏈由原材料、零組件、系統整合、整車製造到售後服務構成，電動化與軟體化正在改變供應商生態。",stages:[
  ["01","原材料","鋼鋁、銅、塑料、電池材料"],
  ["02","零組件與 Tier 1","動力系統、電子、底盤、座艙與安全系統"],
  ["03","整車製造 OEM","產品設計、採購整合、組裝與品質管理"],
  ["04","通路與售後","經銷、零件物流、維修與回收"]
 ],companies:[["Bosch","Tier 1 供應商","汽車技術與零組件"],["DENSO","Tier 1 供應商","汽車熱管理與電子系統"],["CATL","電池供應商","動力電池與儲能"],["Toyota","整車 OEM","汽車設計與製造"],["ZF","Tier 1 供應商","傳動、底盤與安全技術"]]},
 electronics:{name:"電子製造 Electronics",desc:"電子製造供應鏈涵蓋關鍵零組件、EMS/ODM、品牌商與通路，產品生命週期短且需求波動明顯。",stages:[
  ["01","關鍵零組件","半導體、面板、被動元件與連接器"],
  ["02","EMS / ODM","設計支援、物料採購、製造與組裝"],
  ["03","品牌與通路","產品規劃、品牌管理、銷售與配送"],
  ["04","售後與逆物流","維修、退貨、翻新與回收"]
 ],companies:[["Foxconn","EMS","電子製造服務與組裝"],["Quanta","ODM","筆電與伺服器設計製造"],["Pegatron","EMS / ODM","電子產品設計與製造"],["Apple","品牌商","消費電子產品與服務"],["Dell","品牌商","PC、伺服器與企業解決方案"]]}
};
const companies = {
 TSMC:{name:"台灣積體電路製造（TSMC）",role:"晶圓代工｜Semiconductor Manufacturing",overview:"提供先進及成熟製程晶圓代工服務，供應鏈管理涵蓋設備、材料、廠務、物流與產能規劃。",focus:["資本密集與產能配置","製程材料品質與穩定供應","供應商技術協作與風險管理"],note:"此頁為公司與產業角色介紹，不將產業上下游關係等同於已確認的直接供應商關係。"},
 ASML:{name:"ASML",role:"半導體設備｜Lithography Equipment",overview:"提供微影設備與相關服務，是先進半導體製程設備生態系的重要企業。",focus:["高複雜度設備零組件供應","全球服務與備品物流","長交期設備的產能及需求規劃"],note:"供應鏈角色以公開公司資訊及產業定位為主；個別供應商關係需另以官方揭露查證。"},
 JSR:{name:"JSR",role:"半導體材料｜Materials",overview:"日本材料企業，業務涉及半導體材料與光阻劑等高技術門檻材料。",focus:["材料純度與製程相容性","客戶認證與品質穩定","材料供應連續性與產能布局"],note:"材料認證、配方與客戶關係具有高度專業性，避免將推測列為直接供應關係。"},
 Bosch:{name:"Bosch",role:"汽車 Tier 1 供應商｜Automotive Technology",overview:"全球汽車與工業技術供應商，產品涵蓋汽車零組件、軟體與相關服務。",focus:["Tier 1 / OEM 協同規劃","全球製造與供應商管理","電動化與車用電子轉型"],note:"公司業務跨多個產業，供應商結構需依產品事業別分別研究。"},
 DHL:{name:"DHL Group",role:"第三方物流｜3PL & Logistics",overview:"全球物流集團，提供快遞、貨運、供應鏈及電子商務物流服務。",focus:["物流網絡設計與節點配置","運輸成本與服務水準","倉儲自動化與跨境物流"],note:"物流服務模式與績效指標會因地區、貨品與服務線而異。"}
};
const articles = [
 {category:"Semiconductor",topic:"Capacity & Demand",title:"AI 基礎建設需求如何改變半導體產能配置？",date:"研究專題｜示範文章",summary:"從 AI 伺服器需求、晶圓產能與不同終端市場的資源競爭，理解產能分配的管理難題。",impact:"需求結構變化可能影響產品組合、產能配置、交期與供應商分配。",question:"當高毛利產品吸引更多產能時，傳統消費性電子企業如何降低供給排擠風險？",status:"Analysis framework"},
 {category:"Procurement",topic:"Supplier Risk",title:"供應商整併：規模經濟與集中風險如何權衡？",date:"研究專題｜示範文章",summary:"以半導體材料產業為例，討論企業併購對供應商組合、議價能力與供應連續性的影響。",impact:"整併可能提高技術整合與規模效率，也可能提高供應集中度及轉換成本。",question:"採購團隊應如何把供應商財務、技術、認證時間與替代性納入風險評估？",status:"Analysis framework"},
 {category:"Logistics",topic:"Network Design",title:"AI 資料中心擴張，物流服務商需要哪些新能力？",date:"研究專題｜示範文章",summary:"探討高價值設備、專案型交付與全球物流網絡，如何改變 3PL 的服務設計。",impact:"專業倉儲、運輸可視性、設備保護與交付時程管理的重要性可能提高。",question:"高價值設備物流是否需要不同於一般電子產品的庫存與運輸 KPI？",status:"Analysis framework"}
];
let currentPage="home", currentIndustry="semiconductor";
const app=document.getElementById("app");
const crumbs={home:"總覽",academy:"知識與技能",industries:"產業與企業 Map",intelligence:"每週產業情報",about:"關於 ChainScope"};
function go(page){currentPage=page;document.querySelectorAll(".nav-link").forEach(a=>a.classList.toggle("active",a.dataset.page===page));document.getElementById("crumbCurrent").textContent=crumbs[page]||"企業資訊";render();document.getElementById("sidebar").classList.remove("open");window.scrollTo(0,0)}
function header(kicker,title,lead){return `<div class="eyebrow">${kicker}</div><h1 class="page-title">${title}</h1><p class="page-lead">${lead}</p>`}
function section(title,sub="",link=""){return `<div class="section-head"><div><h2>${title}</h2>${sub?`<p>${sub}</p>`:""}</div>${link?`<a class="text-link" href="${link}">VIEW ALL →</a>`:""}</div>`}
function home(){return `
 ${header("SUPPLY CHAIN INTELLIGENCE PLATFORM","看懂供應鏈，<br>從知識走向產業洞察。","ChainScope 整合供應鏈管理知識、產業與企業生態系，以及每週產業分析，幫助你理解全球供應鏈如何運作、連結與變化。")}
 <section class="hero" style="margin-top:25px"><div class="hero-grid"></div><div class="eyebrow">EXPLORE THE CONNECTIONS</div><h1>Understand the chain.<br>Discover the bigger picture.</h1><p>從一項原物料、一家企業，到一個全球產業事件。用系統化的方式拆解供應鏈，將資訊轉化為商業判斷。</p><div class="hero-actions"><button class="btn btn-primary" onclick="go('industries')">探索產業地圖 ↗</button><button class="btn btn-ghost" onclick="go('intelligence')">閱讀本週觀察</button></div></section>
 <div class="stats-grid"><div class="stat-card"><div class="stat-label">KNOWLEDGE TOPICS</div><div class="stat-value">06</div><div class="stat-note">供應鏈核心知識主題</div></div><div class="stat-card"><div class="stat-label">INDUSTRIES</div><div class="stat-value">03</div><div class="stat-note">半導體・汽車・電子</div></div><div class="stat-card"><div class="stat-label">COMPANY PROFILES</div><div class="stat-value">05</div><div class="stat-note">代表企業研究入口</div></div><div class="stat-card"><div class="stat-label">INSIGHT BRIEFS</div><div class="stat-value">03</div><div class="stat-note">產業分析示範專題</div></div></div>
 ${section("Explore the platform","從三個角度建立供應鏈視野")}
 <div class="feature-grid">
 <div class="content-card feature-card" onclick="go('academy')"><div class="feature-icon">▤</div><span class="card-arrow">↗</span><h3>Supply Chain Academy</h3><p>從 SCM 基礎、採購、庫存管理到數據分析，建立可應用的專業知識。</p></div>
 <div class="content-card feature-card" onclick="go('industries')"><div class="feature-icon">◎</div><span class="card-arrow">↗</span><h3>Industry & Company Map</h3><p>拆解產業上下游環節、代表企業與供應鏈角色，建立產業全貌。</p></div>
 <div class="content-card feature-card" onclick="go('intelligence')"><div class="feature-icon">↗</div><span class="card-arrow">↗</span><h3>Industry Intelligence</h3><p>追蹤國際產業事件，分析對需求、供給、成本、交期與風險的影響。</p></div>
 </div>
 ${section("Latest research themes","以問題為起點，連結產業事件與管理決策","intelligence")}
 <div class="two-col"><div class="panel"><div class="panel-title"><h3>Featured Insights</h3><span>EDITOR'S PICKS</span></div>${articles.map(a=>`<div class="news-row"><span class="news-dot"></span><div><h4>${a.title}</h4><p>${a.category} · ${a.topic}</p></div><span class="news-date">BRIEF</span></div>`).join("")}</div><div class="panel"><div class="panel-title"><h3>Research Note</h3><span>OUR APPROACH</span></div><p style="font-size:10px;line-height:1.9;color:#7e8e99">供應鏈分析不只是整理公司名單或新聞摘要。ChainScope 嘗試建立「產業結構 → 企業角色 → 事件變化 → 管理意涵」的連結。</p><div class="notice">資料原則：區分公開確認資訊、產業推論與示範情境；重要資訊應附上原始來源與發布日期。</div><button class="btn" style="background:#edf4f3;color:#397c74" onclick="go('about')">了解研究方法 →</button></div></div>
 `}
function academy(){return `${header("SUPPLY CHAIN ACADEMY","把供應鏈知識，轉化成分析能力。","以概念、實務應用與分析方法建立學習路徑。選擇主題，從基礎理解延伸至企業決策。")}
 <div class="toolbar"><div class="search-box"><span class="search-symbol">⌕</span><input id="academySearch" placeholder="搜尋知識主題或關鍵字..." /></div>${["All","Fundamentals","Procurement","Inventory","Planning","Risk","Data & Analytics"].map((c,i)=>`<button class="filter-btn ${i===0?"active":""}" data-filter="${c}" onclick="filterAcademy('${c}',this)">${c==="All"?"全部":c}</button>`).join("")}</div>
 <div class="cards-grid" id="academyCards">${academyItems.map(item=>academyCard(item)).join("")}</div><div id="academyDetail"></div>`}
function academyCard(x){return `<article class="content-card"><div class="card-top"><span class="tag">${x.category}</span><span class="card-icon">⌘</span></div><h3>${x.title}</h3><p>${x.desc}</p><div class="card-meta"><span>${x.level}</span><button class="text-link" onclick="showAcademy('${x.id}')">閱讀主題 →</button></div></article>`}
function filterAcademy(cat,btn){document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("active",x===btn));const q=(document.getElementById("academySearch").value||"").toLowerCase();const list=academyItems.filter(x=>(cat==="All"||x.category===cat)&&(x.title+x.desc+x.terms.join(" ")).toLowerCase().includes(q));document.getElementById("academyCards").innerHTML=list.length?list.map(academyCard).join(""):`<div class="empty">找不到符合條件的主題</div>`}
function showAcademy(id){const x=academyItems.find(a=>a.id===id);document.getElementById("academyDetail").innerHTML=`<div class="panel detail-main" style="margin-top:18px"><span class="tag">${x.category} · ${x.level}</span><h2>${x.title}</h2><p>${x.detail}</p><h3>Practical Application｜實務應用</h3><p>${x.application}</p><h3>Key Terms｜關鍵字</h3><div class="pill-list">${x.terms.map(t=>`<span class="pill">${t}</span>`).join("")}</div></div>`;document.getElementById("academyDetail").scrollIntoView({behavior:"smooth",block:"nearest"})}
function industriesPage(){const d=industries[currentIndustry];return `${header("INDUSTRY & COMPANY MAP","從產業結構，找到企業的位置。","以產業鏈流程拆解上中下游環節，理解企業在供應鏈中的角色。企業介紹以公開資訊為基礎，不將產業關聯直接視為已確認的供應商關係。")}
 <div class="industry-tabs">${Object.entries(industries).map(([k,v])=>`<button class="industry-tab ${k===currentIndustry?"active":""}" onclick="setIndustry('${k}')">${v.name}</button>`).join("")}</div>
 <div class="panel"><div class="eyebrow">INDUSTRY OVERVIEW</div><h2 style="font-size:20px;color:var(--navy);margin:0 0 8px">${d.name}</h2><p style="font-size:10px;line-height:1.9;color:#7d8d98;max-width:800px">${d.desc}</p><div class="chain-flow">${d.stages.map(s=>`<div class="chain-stage"><span class="stage-no">${s[0]}</span><h4>${s[1]}</h4><p>${s[2]}</p></div>`).join("")}</div><div class="notice">產業鏈為概念性簡化示意。實際供應鏈會依產品、技術、地區與企業策略而異。</div></div>
 ${section("Key companies","點選企業，查看其供應鏈角色與管理重點")}
 <div class="company-list">${d.companies.map(c=>`<button class="company-item" onclick="showCompany('${c[0]}')"><strong>${c[0]}</strong><span>${c[1]} · ${c[2]}</span></button>`).join("")}</div><div id="companyDetail" style="margin-top:14px"></div>`}
function setIndustry(k){currentIndustry=k;render()}
function showCompany(key){let c=companies[key];if(!c){document.getElementById("companyDetail").innerHTML=`<div class="panel"><h3>${key}</h3><p style="font-size:10px;color:#82909b">此企業目前只有產業角色索引，詳細公司檔案待補充研究。</p></div>`;return}document.getElementById("companyDetail").innerHTML=`<div class="detail-layout"><div class="panel detail-main"><span class="tag blue">COMPANY PROFILE</span><h2>${c.name}</h2><p><strong>${c.role}</strong></p><p>${c.overview}</p><h3>Supply Chain & Procurement Focus</h3><ul>${c.focus.map(f=>`<li>${f}</li>`).join("")}</ul></div><aside class="panel detail-side"><h3>Research Notes</h3><p>${c.note}</p><div class="mini-stat"><strong>公開資訊優先</strong><span>Source-first research</span></div><div class="mini-stat"><strong>關係需查證</strong><span>Supplier relationship validation</span></div></aside></div>`;document.getElementById("companyDetail").scrollIntoView({behavior:"smooth",block:"nearest"})}
function intelligence(){return `${header("WEEKLY INDUSTRY INTELLIGENCE","不只追蹤新聞，更理解商業影響。","每週挑選重要產業事件，從事件摘要、供應鏈影響到企業決策意涵，建立可持續累積的產業研究資料庫。")}
 <div class="news-feature"><span class="tag gold">EDITORIAL FRAMEWORK</span><h2>從 What Happened 到 What Should Businesses Do?</h2><p>每篇分析都遵循固定架構：事件摘要、重要性、需求與供給影響、成本與交期風險、企業決策意涵，以及個人觀點。</p></div>
 <div class="toolbar"><div class="search-box"><span class="search-symbol">⌕</span><input id="newsSearch" placeholder="搜尋產業、主題或關鍵字..." oninput="filterNews()" /></div>${["All","Semiconductor","Procurement","Logistics"].map((c,i)=>`<button class="filter-btn ${i===0?"active":""}" data-news-filter="${c}" onclick="setNewsFilter('${c}',this)">${c==="All"?"全部":c}</button>`).join("")}</div>
 <div class="article-grid" id="articleGrid">${articles.map((a,i)=>articleCard(a,i)).join("")}</div>
 <div class="notice">內容狀態說明：目前展示的是研究專題與分析框架示範，不代表已完成當週新聞查證。正式發布新聞時，請補上原始來源、發布日期、可開啟連結，並區分事實與分析推論。</div>`}
function articleCard(a,i){return `<article class="content-card article-card"><div class="card-top"><span class="tag ${i===1?"gold":i===2?"blue":""}">${a.category}</span><span style="font-size:8px;color:#9aa7b0">${a.status}</span></div><h3>${a.title}</h3><p>${a.summary}</p><div class="article-points"><strong>Supply Chain Impact</strong><br>${a.impact}<br><br><strong>Research Question</strong><br>${a.question}</div><div class="card-meta"><span>${a.date}</span><button class="text-link" onclick="showArticle(${i})">查看分析 →</button></div></article>`}
let newsFilter="All";
function setNewsFilter(c,btn){newsFilter=c;document.querySelectorAll("[data-news-filter]").forEach(x=>x.classList.toggle("active",x===btn));filterNews()}
function filterNews(){let q=(document.getElementById("newsSearch")?.value||"").toLowerCase();let list=articles.filter(a=>(newsFilter==="All"||a.category===newsFilter)&&(a.title+a.summary+a.topic+a.impact).toLowerCase().includes(q));document.getElementById("articleGrid").innerHTML=list.length?list.map(articleCard).join(""):`<div class="empty">找不到符合條件的文章</div>`}
function showArticle(i){let a=articles[i];document.getElementById("articleGrid").insertAdjacentHTML("afterend",`<div class="panel detail-main" id="openedArticle" style="margin-top:14px"><span class="tag">${a.category}</span><h2>${a.title}</h2><h3>1. What Happened｜事件摘要</h3><p>${a.summary}</p><h3>2. Why It Matters｜重要性</h3><p>${a.impact}</p><h3>3. Supply Chain Impact｜供應鏈影響</h3><p>${a.impact}</p><h3>4. Business Implications｜企業決策意涵</h3><p>企業可從供應商組合、需求規劃、庫存政策、交期管理與風險控管等面向評估應對策略。具體行動需依企業產品與供應鏈資料驗證。</p><h3>5. My Insights｜個人分析</h3><p>${a.question}</p><div class="notice">此為分析框架示範，正式新聞文章請補上原始報導連結、日期及資料查證紀錄。</div></div>`);document.getElementById("openedArticle").scrollIntoView({behavior:"smooth"})}
function about(){return `${header("ABOUT CHAINSCOPE","讓產業資訊，成為可理解的供應鏈知識。","ChainScope 是一個以供應鏈管理、產業研究與商業分析為核心的個人學習專案。")}
 <div class="about-grid"><div class="panel"><div class="eyebrow">MISSION</div><h2 style="font-size:17px;color:var(--navy)">Connect the dots.</h2><p>供應鏈的變化往往不是單一事件，而是需求、技術、供應商、政策與物流網絡彼此影響的結果。ChainScope 希望將分散資訊整理成有脈絡的產業洞察。</p></div><div class="panel"><div class="eyebrow">RESEARCH PRINCIPLES</div><h2 style="font-size:17px;color:var(--navy)">Evidence before opinions.</h2><p>重要事實優先引用企業官方公告、政府及產業機構資料與可信媒體。清楚標記已確認資訊、產業推論與假設情境，不捏造供應商關係或新聞內容。</p></div><div class="panel"><div class="eyebrow">SCOPE</div><h2 style="font-size:17px;color:var(--navy)">Three connected layers.</h2><p>知識與技能、產業與企業地圖、每週產業情報三個模組相互連結，讓讀者從概念學習走向產業理解與管理決策。</p><div class="pill-list"><span class="pill">Semiconductor</span><span class="pill">Automotive</span><span class="pill">Electronics</span><span class="pill">Logistics</span></div></div><div class="panel"><div class="eyebrow">NEXT STEPS</div><h2 style="font-size:17px;color:var(--navy)">Build in public.</h2><p>後續可逐步加入更多公司檔案、可查證的供應商關係、互動式風險指標、資料來源管理與每週更新紀錄。</p></div></div>`}
function render(){app.innerHTML=({home,academy,industries:industriesPage,intelligence,about}[currentPage]||home)();if(currentPage==="academy"){document.getElementById("academySearch").addEventListener("input",()=>{const active=document.querySelector("[data-filter].active");filterAcademy(active?.dataset.filter||"All",active||document.querySelector("[data-filter]"))})}}
document.querySelectorAll(".nav-link").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();go(a.dataset.page)}));
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
window.addEventListener("hashchange",()=>{const p=location.hash.replace("#","");if(p&&crumbs[p])go(p)});
render();
